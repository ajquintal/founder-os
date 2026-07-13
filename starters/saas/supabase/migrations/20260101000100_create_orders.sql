-- Orders: system-managed billing records, written ONLY by the stripe-webhook
-- edge function using the service role (which bypasses RLS).
--
-- Convention nuance: user-owned tables get a full CRUD policy set (see notes).
-- For a SYSTEM-managed table we deliberately grant owners SELECT and OMIT client
-- INSERT/UPDATE/DELETE policies. No client may write billing state; the service
-- role bypasses RLS, so the webhook can still insert. This is the more secure
-- posture — document the omission rather than adding a write policy.

create table if not exists public.orders (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid references auth.users (id) on delete set null,
  stripe_event_id    text not null unique,          -- idempotency key (Stripe event id)
  stripe_session_id  text,
  stripe_customer_id text,
  amount_total       integer,                        -- smallest currency unit (e.g. cents)
  currency           text,
  status             text not null default 'pending',
  created_at         timestamptz not null default now()
);

create index if not exists orders_user_id_idx on public.orders (user_id);

alter table public.orders enable row level security;

-- Owners may read their own orders.
create policy "orders_select_own"
  on public.orders for select
  using (auth.uid() = user_id);

-- NOTE: INSERT / UPDATE / DELETE policies are intentionally omitted. Only the
-- service role (stripe-webhook) writes here. Granting a client write policy
-- would let a user forge billing records.
