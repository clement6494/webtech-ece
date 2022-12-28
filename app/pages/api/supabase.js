import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export const { data } = await supabaseAdmin.from('images').select('*').order('id')
return {
  props: {
    images: data,
  },
}
