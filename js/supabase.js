import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aihkjtyhzvwhnzaovoil.supabase.co'; // <- Zastąp własnym URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpaGtqdHloenZ3aG56YW92b2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MzE4NDAsImV4cCI6MjA2MTUwNzg0MH0.Of960rPQcjf3e2TZAza3gwf_6hzSXxsC7AtNXUsmGPw'; // <- Zastąp własnym kluczem z dashboardu

export const supabase = createClient(supabaseUrl, supabaseKey);
