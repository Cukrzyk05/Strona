// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://your-project.supabase.co'; // <- zmień na swój URL
const SUPABASE_ANON_KEY = 'your-anon-public-key'; // <- zmień na swój ANON KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
