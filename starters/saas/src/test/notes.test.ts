import { describe, it, expect } from 'vitest'
import { validateNoteInput, sortNotesByRecent } from '@/lib/notes'

describe('validateNoteInput', () => {
  it('accepts a valid note', () => {
    const result = validateNoteInput({ title: 'Hello', body: 'World' })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.title).toBe('Hello')
      expect(result.data.body).toBe('World')
    }
  })

  it('rejects a blank title (after trim)', () => {
    const result = validateNoteInput({ title: '   ', body: 'x' })
    expect(result.success).toBe(false)
    if (!result.success) expect(result.errors).toContain('Title is required')
  })

  it('rejects an over-long title', () => {
    const result = validateNoteInput({ title: 'a'.repeat(121) })
    expect(result.success).toBe(false)
  })

  it('defaults body to an empty string when omitted', () => {
    const result = validateNoteInput({ title: 'ok' })
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.body).toBe('')
  })
})

describe('sortNotesByRecent', () => {
  const notes = [
    { id: '1', created_at: '2026-01-01T00:00:00Z' },
    { id: '2', created_at: '2026-03-01T00:00:00Z' },
    { id: '3', created_at: '2026-02-01T00:00:00Z' },
  ]

  it('orders newest first', () => {
    expect(sortNotesByRecent(notes).map((n) => n.id)).toEqual(['2', '3', '1'])
  })

  it('does not mutate its input', () => {
    const snapshot = notes.map((n) => n.id)
    sortNotesByRecent(notes)
    expect(notes.map((n) => n.id)).toEqual(snapshot)
  })
})
