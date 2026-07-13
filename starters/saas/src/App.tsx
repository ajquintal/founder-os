import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/hooks/useAuth'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import LoginPage from '@/pages/Login'
import NotesPage from '@/pages/Notes'
import BillingPage from '@/pages/Billing'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* Protected area — ProtectedRoute redirects to /login when signed out. */}
          <Route element={<ProtectedRoute />}>
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/billing" element={<BillingPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/notes" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
