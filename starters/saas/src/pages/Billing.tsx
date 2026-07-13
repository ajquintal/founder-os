import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type OrderRow = {
  id: string
  amount_total: number | null
  currency: string | null
  status: string
  created_at: string
}

export default function BillingPage() {
  const [params] = useSearchParams()
  const [orders, setOrders] = useState<OrderRow[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const status = params.get('status')

  useEffect(() => {
    // RLS returns only the current user's orders (orders_select_own policy).
    supabase
      .from('orders')
      .select('id, amount_total, currency, status, created_at')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) setError(error.message)
        else setOrders(data ?? [])
      })
  }, [])

  async function subscribe() {
    setBusy(true)
    setError(null)
    // Invokes the create-checkout edge function (verify_jwt=true) — it reads the
    // user from the JWT and returns a Stripe Checkout URL (test mode).
    const { data, error } = await supabase.functions.invoke<{ url: string }>('create-checkout', {
      body: {},
    })
    setBusy(false)
    if (error) {
      setError(error.message)
      return
    }
    if (data?.url) window.location.href = data.url
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-lg font-semibold">Billing</h1>
          <Link to="/notes" className="text-sm underline-offset-4 hover:underline">
            Back to notes
          </Link>
        </div>
      </header>

      <main className="container space-y-8 py-8">
        {status === 'success' && (
          <p className="text-sm text-green-600" data-testid="billing-success">
            Payment successful — your order appears below once the webhook is processed.
          </p>
        )}
        {status === 'cancelled' && <p className="text-sm text-muted-foreground">Checkout cancelled.</p>}

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Subscribe</CardTitle>
            <CardDescription>
              Stripe test mode. Set STRIPE_SECRET_KEY / STRIPE_PRICE_ID and deploy the edge
              functions first (see docs/CUSTOMIZE.md).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => void subscribe()} disabled={busy} data-testid="subscribe">
              {busy ? 'Redirecting…' : 'Start checkout'}
            </Button>
            {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Your orders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* STUB: entitlement / plan-gating logic (e.g. "is this user on a paid plan?")
                would be derived from these order rows. Not implemented — see README. */}
            {orders.length === 0 && <p className="text-muted-foreground">No orders yet.</p>}
            {orders.map((o) => (
              <div key={o.id} className="flex justify-between gap-4 text-sm">
                <span>{new Date(o.created_at).toLocaleString()}</span>
                <span>
                  {o.amount_total != null
                    ? `${(o.amount_total / 100).toFixed(2)} ${(o.currency ?? '').toUpperCase()}`
                    : '—'}
                </span>
                <span className="text-muted-foreground">{o.status}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
