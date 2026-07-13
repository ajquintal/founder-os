import { useCallback, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import { sortNotesByRecent, validateNoteInput, type Note, type NoteInput } from '@/lib/notes'

type MutationResult = { data: Note } | { error: string }

/**
 * Typed data hook for the `notes` table — the reference pattern for user-owned data.
 *
 * Note there is no manual `where user_id = ...` filter anywhere: Postgres RLS
 * (see the notes migration) scopes every query to the authenticated user. The
 * client only sets `user_id` on INSERT to satisfy the WITH CHECK policy.
 */
export function useNotes() {
  const { user } = useAuth()
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    if (!user) {
      setNotes([])
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) setError(error.message)
    else setNotes(sortNotesByRecent(data ?? []))
    setLoading(false)
  }, [user])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const createNote = useCallback(
    async (input: NoteInput): Promise<MutationResult> => {
      const check = validateNoteInput(input)
      if (!check.success) return { error: check.errors.join(', ') }
      if (!user) return { error: 'Not authenticated' }
      const { data, error } = await supabase
        .from('notes')
        .insert({ ...check.data, user_id: user.id })
        .select()
        .single()
      if (error) return { error: error.message }
      setNotes((prev) => sortNotesByRecent([data, ...prev]))
      return { data }
    },
    [user],
  )

  const updateNote = useCallback(
    async (id: string, input: NoteInput): Promise<MutationResult> => {
      const check = validateNoteInput(input)
      if (!check.success) return { error: check.errors.join(', ') }
      const { data, error } = await supabase
        .from('notes')
        .update(check.data)
        .eq('id', id)
        .select()
        .single()
      if (error) return { error: error.message }
      setNotes((prev) => sortNotesByRecent(prev.map((n) => (n.id === id ? data : n))))
      return { data }
    },
    [],
  )

  const deleteNote = useCallback(async (id: string): Promise<{ error?: string }> => {
    const { error } = await supabase.from('notes').delete().eq('id', id)
    if (error) return { error: error.message }
    setNotes((prev) => prev.filter((n) => n.id !== id))
    return {}
  }, [])

  return { notes, loading, error, refresh, createNote, updateNote, deleteNote }
}
