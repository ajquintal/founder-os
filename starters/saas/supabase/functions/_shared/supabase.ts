// Deno / Supabase Edge Runtime module. Type-checked with `deno check`, not tsc.
import { createClient, type SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4'

/**
 * Service-role client. BYPASSES RLS — use only in trusted server code (e.g. the
 * Stripe webhook). Never expose SUPABASE_SERVICE_ROLE_KEY to the browser.
 */
export function serviceClient(): SupabaseClient {
  return createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  )
}

/**
 * User-scoped client. Respects RLS as the calling user by forwarding their JWT.
 * Use this to read the authenticated user in verify_jwt=true functions.
 */
export function userClient(authHeader: string): SupabaseClient {
  return createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false, autoRefreshToken: false },
    },
  )
}
