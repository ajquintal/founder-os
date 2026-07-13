import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

/**
 * Route guard. Client-side redirect for UX only — it is NOT a security boundary.
 * Real authorization is enforced by Supabase RLS on every table and by
 * server-side checks in edge functions.
 */
export function ProtectedRoute() {
  const { session, loading } = useAuth()

  if (loading) {
    return <div className="grid min-h-screen place-items-center text-muted-foreground">Loading…</div>
  }
  if (!session) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}
