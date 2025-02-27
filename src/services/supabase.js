import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fmlqpkuhijnztfjxfgtz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbHFwa3VoaWpuenRmanhmZ3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2Nzg2NjksImV4cCI6MjA1NjI1NDY2OX0.qjyV0z_vlFyQEE3RE_VQnv4_uwx9JKGVs_jB02GTlgc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
