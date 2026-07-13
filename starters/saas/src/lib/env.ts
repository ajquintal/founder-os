// Client-side environment. Only VITE_* variables exist in the browser bundle.
//
// Design choice: missing config is NON-FATAL. The UI still renders (so CI smoke
// tests and a fresh clone work before a Supabase project is wired up), but any
// auth/data call will fail until real values are set. See .env.example.

const PLACEHOLDER_URL = 'https://placeholder.supabase.co'
const PLACEHOLDER_ANON = 'public-anon-placeholder-key'

const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anon) {
  console.warn(
    '[env] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set — using placeholders. ' +
      'Copy .env.example to .env.local and fill them in. Auth and data will not work until then.',
  )
}

export const env = {
  SUPABASE_URL: url ?? PLACEHOLDER_URL,
  SUPABASE_ANON_KEY: anon ?? PLACEHOLDER_ANON,
  APP_URL: import.meta.env.VITE_APP_URL ?? window.location.origin,
} as const
