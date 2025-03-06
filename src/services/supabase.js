import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fmlqpkuhijnztfjxfgtz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbHFwa3VoaWpuenRmanhmZ3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2ODM0MTQsImV4cCI6MjA1NjI1OTQxNH0.8ZHcvUWKZ-gnBllo-z-rC6eCwrXmINtXpX3Uf0O26S0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
