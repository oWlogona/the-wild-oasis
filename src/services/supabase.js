import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fmlqpkuhijnztfjxfgtz.supabase.co";
const supabaseKey = "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
