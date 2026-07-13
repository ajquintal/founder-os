// Shared CORS headers for browser-invoked edge functions.
// STUB: '*' is fine for local/test. In production, lock this to your app origin
// (read APP_URL and echo it back only when it matches an allow-list).
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
