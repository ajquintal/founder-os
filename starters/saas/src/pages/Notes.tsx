import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useNotes } from '@/hooks/useNotes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// The vertical slice: authenticated CRUD over a user-owned table, RLS-scoped.
export default function NotesPage() {
  const { user, signOut } = useAuth()
  const { notes, loading, error, createNote, deleteNote } = useNotes()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [formError, setFormError] = useState<string | null>(null)

  async function onCreate(e: FormEvent) {
    e.preventDefault()
    setFormError(null)
    const res = await createNote({ title, body })
    if ('error' in res) {
      setFormError(res.error)
      return
    }
    setTitle('')
    setBody('')
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-lg font-semibold">Notes</h1>
          <div className="flex items-center gap-3">
            <Link to="/billing" className="text-sm underline-offset-4 hover:underline">
              Billing
            </Link>
            <span className="hidden text-sm text-muted-foreground sm:inline">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={() => void signOut()} data-testid="sign-out">
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="container space-y-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">New note</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onCreate} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  data-testid="note-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Note title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="body">Body</Label>
                <Textarea
                  id="body"
                  data-testid="note-body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Optional details…"
                />
              </div>
              {formError && (
                <p className="text-sm text-destructive" data-testid="note-error">
                  {formError}
                </p>
              )}
              <Button type="submit" data-testid="note-submit">
                Add note
              </Button>
            </form>
          </CardContent>
        </Card>

        <section className="space-y-3" data-testid="notes-list">
          {loading && <p className="text-muted-foreground">Loading…</p>}
          {error && <p className="text-destructive">{error}</p>}
          {!loading && notes.length === 0 && (
            <p className="text-muted-foreground">No notes yet. Add your first one above.</p>
          )}
          {notes.map((note) => (
            <Card key={note.id} data-testid="note-item">
              <CardContent className="flex items-start justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="font-medium">{note.title}</p>
                  {note.body && (
                    <p className="whitespace-pre-wrap text-sm text-muted-foreground">{note.body}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Delete note"
                  data-testid="note-delete"
                  onClick={() => void deleteNote(note.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
