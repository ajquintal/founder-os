// Deno / Supabase Edge Runtime module. Type-checked with `deno check`, not tsc.
import Stripe from 'https://esm.sh/stripe@16.2.0?target=deno'

/**
 * Stripe client configured for Deno's fetch-based HTTP. Reads STRIPE_SECRET_KEY
 * from the environment (use a sk_test_ key until you go live).
 */
export function getStripe(): Stripe {
  const key = Deno.env.get('STRIPE_SECRET_KEY')
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
  return new Stripe(key, {
    apiVersion: '2024-06-20',
    httpClient: Stripe.createFetchHttpClient(),
  })
}
