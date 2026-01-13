import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example usage:
// import { supabase } from "@/lib/supabase";
// 
// // Save a lead
// await supabase.from('leads').insert([
//   { name: 'John Doe', email: 'john@example.com', service: 'SEO' }
// ]);
//
// // Get leads
// const { data, error } = await supabase.from('leads').select('*');
