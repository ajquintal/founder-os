// create-checkout (verify_jwt = true).
// Creates a Stripe Checkout Session for the authenticated user and returns its URL.
// Deno / Supabase Edge Runtime — type-checked with `deno check`, not tsc.
import { corsHeaders } from '../_shared/cors.ts'
import { getStripe } from '../_shared/stripe.ts'
import { userClient } from '../_shared/supabase.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  try {
    const authHeader = req.headers.get('Authorization') ?? ''
    if (!authHeader) return json({ error: 'Missing Authorization header' }, 401)

    // verify_jwt=true already validated the token at the gateway; we fetch the
    // user to get their id/email for the checkout session.
    const supabase = userClient(authHeader)
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()
    if (userError || !user) return json({ error: 'Not authenticated' }, 401)

    const priceId = Deno.env.get('STRIPE_PRICE_ID')
    if (!priceId) return json({ error: 'STRIPE_PRICE_ID is not set' }, 500)
    const appUrl = Deno.env.get('APP_URL') ?? 'http://localhost:5173'

    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription', // switch to 'payment' for one-time purchases
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: user.email ?? undefined,
      client_reference_id: user.id, // links the payment back to the Supabase user
      metadata: { user_id: user.id },
      success_url: `${appUrl}/billing?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/billing?status=cancelled`,
    })

    return json({ url: session.url })
  } catch (err) {
    console.error('create-checkout error:', err)
    return json({ error: (err as Error).message }, 500)
  }
})

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}
