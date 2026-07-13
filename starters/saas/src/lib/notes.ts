import { z } from 'zod'
import type { Database } from '@/types/database.types'

export type Note = Database['public']['Tables']['notes']['Row']
export type NoteInsert = Database['public']['Tables']['notes']['Insert']

// Validation lives in a pure module so it is shared by the UI, the data hook,
// and unit tests — and can later be reused server-side. Keep it framework-free.
export const noteInputSchema = z.object({
  title: z.string().trim().min(1, 'Title is required').max(120, 'Title must be 120 characters or fewer'),
  body: z.string().trim().max(10_000, 'Body must be 10,000 characters or fewer').optional().default(''),
})

export type NoteInput = z.infer<typeof noteInputSchema>

export type ValidateResult =
  | { success: true; data: NoteInput }
  | { success: false; errors: string[] }

export function validateNoteInput(input: unknown): ValidateResult {
  const parsed = noteInputSchema.safeParse(input)
  if (parsed.success) return { success: true, data: parsed.data }
  return { success: false, errors: parsed.error.issues.map((i) => i.message) }
}

/** Pure, non-mutating sort: newest first. */
export function sortNotesByRecent<T extends { created_at: string }>(notes: T[]): T[] {
  return [...notes].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  )
}
