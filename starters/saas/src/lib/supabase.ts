import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database.types'
import { env } from '@/lib/env'

// Single typed browser client. Uses the ANON key — safe to ship to the browser
// BECAUSE Row Level Security is on for every table. RLS is the security boundary,
// not the key. Never import the service role key into client code.
export const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})
