/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string
  readonly VITE_SUPABASE_ANON_KEY?: string
  readonly VITE_APP_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// tailwindcss-animate ships no type declarations; declare it so tailwind.config.ts type-checks.
declare module 'tailwindcss-animate'
