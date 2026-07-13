// -----------------------------------------------------------------------------
// Supabase database types.
//
// These are hand-authored to match supabase/migrations/* so the template
// type-checks BEFORE you connect a project. Once your project is live, treat this
// file as GENERATED and regenerate it after every migration:
//
//   supabase gen types typescript --local > src/types/database.types.ts
//   # or against the remote project:
//   supabase gen types typescript --project-id <ref> > src/types/database.types.ts
//
// `npm run db:types` runs the --local variant.
// -----------------------------------------------------------------------------

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          id: string
          user_id: string
          title: string
          body: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          body?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          body?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          stripe_event_id: string
          stripe_session_id: string | null
          stripe_customer_id: string | null
          amount_total: number | null
          currency: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          stripe_event_id: string
          stripe_session_id?: string | null
          stripe_customer_id?: string | null
          amount_total?: number | null
          currency?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          stripe_event_id?: string
          stripe_session_id?: string | null
          stripe_customer_id?: string | null
          amount_total?: number | null
          currency?: string | null
          status?: string
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
