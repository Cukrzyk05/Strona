// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://vnlpafhoowdvxfhxzhpf.supabase.co'; // <- zmień na swój URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZubHBhZmhvb3dkdnhmaHh6aHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4OTExODQsImV4cCI6MjA2MTQ2NzE4NH0.f_NoMRFCD6hak7l-r1eUBQKTl5Bn9acsdHw5MGugAKQ'; // <- zmień na swój ANON KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
