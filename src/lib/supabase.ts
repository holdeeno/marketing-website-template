import { createClient } from '@supabase/supabase-js';
import { ContactFormData } from '@/types';

// These environment variables are set in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Flag to check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Create client only if properly configured
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!isSupabaseConfigured) {
  console.warn('Supabase credentials not found. Contact form will run in demo mode.');
}

/**
 * Submit contact form data to Supabase
 * @param formData Contact form submission data
 * @returns Promise with submission result
 */
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // If Supabase is not configured, simulate a successful submission
    if (!isSupabaseConfigured) {
      console.log('Demo mode: Form would be submitted:', formData);
      // Simulate network latency
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, data: null };
    }
    
    // Otherwise, submit to Supabase
    // We can safely use the non-null assertion operator here since we've already checked isSupabaseConfigured
    const { data, error } = await supabase!
      .from('contact_submissions')
      .insert([formData])
      .select();
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};
