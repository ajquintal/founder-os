import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    const fn = mode === 'signin' ? signIn : signUp
    const { error } = await fn(email, password)
    setBusy(false)
    if (error) {
      setError(error)
      return
    }
    navigate('/notes')
  }

  return (
    <div className="grid min-h-screen place-items-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">{mode === 'signin' ? 'Sign in' : 'Create account'}</CardTitle>
          {/* find/replace: SaaS Starter -> Your Venture */}
          <CardDescription>SaaS Starter — swap this branding for your venture.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                autoComplete="email"
                data-testid="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                data-testid="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-sm text-destructive" data-testid="login-error">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={busy} data-testid="login-submit">
              {busy ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Sign up'}
            </Button>
          </form>
          <button
            type="button"
            className="mt-4 text-sm text-muted-foreground underline-offset-4 hover:underline"
            onClick={() => setMode((m) => (m === 'signin' ? 'signup' : 'signin'))}
          >
            {mode === 'signin' ? "Don't have an account? Create one" : 'Already have an account? Sign in'}
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
