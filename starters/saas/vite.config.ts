import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Vite + Vitest share one config. `defineConfig` is imported from 'vitest/config'
// so the `test` block below is type-checked and the `@` alias applies to tests too.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { port: 5173 },
  preview: { port: 4173 },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    // Unit tests live under src/. Playwright e2e specs (e2e/) are run separately.
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    css: false,
  },
})
