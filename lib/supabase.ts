import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to check if Supabase is configured
export function isSupabaseConfigured() {
  return supabaseUrl && supabaseAnonKey;
}

// Lead management
export async function createLead(data: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}) {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Lead saved locally.");
    return { data, error: null };
  }

  const { data: lead, error } = await supabase
    .from("leads")
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        service: data.service,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ])
    .select();

  return { data: lead, error };
}

// Social media post management
export async function createSocialPost(data: {
  content: string;
  hashtags?: string;
  platforms: string[];
  scheduleDate?: string | null;
}) {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Post saved locally.");
    return { data, error: null };
  }

  const { data: post, error } = await supabase
    .from("social_posts")
    .insert([
      {
        content: data.content,
        hashtags: data.hashtags || "",
        platforms: data.platforms,
        schedule_date: data.scheduleDate || null,
        status: data.scheduleDate ? "scheduled" : "published",
        created_at: new Date().toISOString(),
      },
    ])
    .select();

  return { data: post, error };
}
