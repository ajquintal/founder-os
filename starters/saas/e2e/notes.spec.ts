import { test, expect } from '@playwright/test'

// -----------------------------------------------------------------------------
// Smoke tests — run anywhere, no backend or credentials required. These prove
// the app boots, routing works, and the route guard redirects.
// -----------------------------------------------------------------------------
test('login page renders', async ({ page }) => {
  await page.goto('/login')
  await expect(page.getByTestId('login-email')).toBeVisible()
  await expect(page.getByTestId('login-password')).toBeVisible()
  await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible()
})

test('unauthenticated user is redirected to /login', async ({ page }) => {
  await page.goto('/notes')
  await expect(page).toHaveURL(/\/login$/)
})

// -----------------------------------------------------------------------------
// STUB: full authenticated CRUD flow.
// Requires a real Supabase project (VITE_SUPABASE_* set) AND a seeded test user.
// Enable by exporting E2E_EMAIL and E2E_PASSWORD; otherwise this block is skipped.
// See docs/CUSTOMIZE.md for how to seed a confirmed test user.
// -----------------------------------------------------------------------------
const email = process.env.E2E_EMAIL
const password = process.env.E2E_PASSWORD

test.describe('notes CRUD (authenticated)', () => {
  test.skip(!email || !password, 'Set E2E_EMAIL and E2E_PASSWORD to run the authenticated flow')

  test('sign in, create a note, then delete it', async ({ page }) => {
    await page.goto('/login')
    await page.getByTestId('login-email').fill(email!)
    await page.getByTestId('login-password').fill(password!)
    await page.getByTestId('login-submit').click()
    await expect(page).toHaveURL(/\/notes$/)

    const title = `E2E note ${Date.now()}`
    await page.getByTestId('note-title').fill(title)
    await page.getByTestId('note-submit').click()

    const item = page.getByTestId('note-item').filter({ hasText: title })
    await expect(item).toBeVisible()

    await item.getByTestId('note-delete').click()
    await expect(item).toHaveCount(0)
  })
})
