// stripe-webhook (verify_jwt = false — see supabase/config.toml).
// Stripe sends no Supabase JWT; this function authenticates the caller by
// verifying the Stripe webhook SIGNATURE, then writes orders idempotently.
// Deno / Supabase Edge Runtime — type-checked with `deno check`, not tsc.
import { getStripe } from '../_shared/stripe.ts'
import { serviceClient } from '../_shared/supabase.ts'

Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  const signature = req.headers.get('stripe-signature')
  const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
  if (!signature || !webhookSecret) {
    return new Response('Missing signature or STRIPE_WEBHOOK_SECRET', { status: 400 })
  }

  const stripe = getStripe()
  const body = await req.text() // RAW body is required for signature verification

  // 1) Authenticate: verify the signature (async variant is required on Deno).
  let event
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret)
  } catch (err) {
    console.error('Signature verification failed:', err)
    return new Response(`Invalid signature: ${(err as Error).message}`, { status: 400 })
  }

  const supabase = serviceClient() // service role — bypasses RLS to write orders

  // 2) Idempotency: if we already recorded this event, acknowledge and stop.
  const { data: existing } = await supabase
    .from('orders')
    .select('id')
    .eq('stripe_event_id', event.id)
    .maybeSingle()
  if (existing) {
    return new Response(JSON.stringify({ received: true, duplicate: true }), { status: 200 })
  }

  // 3) Handle the events we care about.
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const s = event.data.object as {
          id: string
          client_reference_id: string | null
          customer: string | null
          amount_total: number | null
          currency: string | null
          metadata: Record<string, string> | null
        }
        const userId = s.client_reference_id ?? s.metadata?.user_id ?? null

        // The unique constraint on stripe_event_id gives DB-level idempotency;
        // ignoreDuplicates makes a racing redelivery a no-op instead of an error.
        const { error } = await supabase.from('orders').upsert(
          {
            user_id: userId,
            stripe_event_id: event.id,
            stripe_session_id: s.id,
            stripe_customer_id: typeof s.customer === 'string' ? s.customer : null,
            amount_total: s.amount_total,
            currency: s.currency,
            status: 'paid',
          },
          { onConflict: 'stripe_event_id', ignoreDuplicates: true },
        )
        if (error) throw error
        break
      }
      default:
        // Acknowledge unhandled types so Stripe does not retry them.
        console.log(`Unhandled event type: ${event.type}`)
    }
  } catch (err) {
    console.error('Webhook handler error:', err)
    // 5xx tells Stripe to retry later.
    return new Response(`Handler error: ${(err as Error).message}`, { status: 500 })
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 })
})
