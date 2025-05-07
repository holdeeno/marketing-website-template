import { createClient } from '@supabase/supabase-js';
import { ContactFormData } from '@/types';

// These environment variables are set in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if the URL is valid (starts with http or https)
const isValidUrl = supabaseUrl.startsWith('http');

// Flag to check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey && isValidUrl);

// Create client only if properly configured with valid URL
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Contact form will run in demo mode.');
} else if (!isValidUrl) {
  console.warn('Invalid Supabase URL format. Contact form will run in demo mode.');
}

/**
 * Validate contact form data
 * @param formData Contact form submission data
 * @returns Object containing validation result and any error messages
 */
export const validateContactForm = (formData: ContactFormData) => {
  // Required field validation
  if (!formData.name || !formData.name.trim()) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (!formData.email || !formData.email.trim()) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (!formData.message || !formData.message.trim()) {
    return { isValid: false, error: 'Message is required' };
  }
  
  // Email format validation
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(formData.email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  // Message length validation
  if (formData.message.length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters long' };
  }
  
  if (formData.message.length > 1000) {
    return { isValid: false, error: 'Message cannot exceed 1000 characters' };
  }
  
  // All validations passed
  return { isValid: true, error: null };
};

/**
 * Sanitize user input to prevent security issues
 * @param formData Form data to sanitize
 * @returns Sanitized form data
 */
const sanitizeFormData = (formData: ContactFormData): ContactFormData => {
  return {
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    message: formData.message.trim()
  };
};

/**
 * Submit contact form data to Supabase
 * @param formData Contact form submission data
 * @returns Promise with submission result
 */
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // First, validate the form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      console.warn('Contact form validation failed:', validation.error);
      return { success: false, error: validation.error };
    }
    
    // Sanitize the input data
    const sanitizedData = sanitizeFormData(formData);
    
    // If Supabase is not properly configured or URL is invalid, simulate a successful submission
    if (!isSupabaseConfigured || !supabase) {
      console.log('Demo mode: Form would be submitted:', sanitizedData);
      // Simulate network latency
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { 
        success: true, 
        data: null,
        message: 'Demo mode: Form submission simulated successfully' 
      };
    }
    
    // Otherwise, submit to Supabase
    // We can safely use the non-null assertion operator here since we've already checked isSupabaseConfigured
    const { data, error } = await supabase!
      .from('contact_submissions')
      .insert([sanitizedData])
      .select();
    
    if (error) {
      // Provide more specific error messages based on error types
      if (error.code === '23505') {
        return { success: false, error: 'This message has already been submitted' };
      } else if (error.code === '23514') { 
        // This would handle the CHECK constraint on email format
        return { success: false, error: 'Please enter a valid email address' };
      } else if (error.code?.startsWith('22')) {
        return { success: false, error: 'Your message contains invalid data' };
      } else if (error.code?.startsWith('23')) {
        return { success: false, error: 'Your submission violates data constraints' };
      }
      
      throw error;
    }
    
    console.log('Contact form submitted successfully:', data);
    
    return { 
      success: true, 
      data,
      message: 'Your message has been sent successfully!' 
    };
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    
    // Check for network errors
    if (!navigator.onLine) {
      return { success: false, error: 'You appear to be offline. Please check your internet connection.' };
    }
    
    // Handle rate limiting
    if (error?.status === 429) {
      return { success: false, error: 'Too many requests. Please try again later.' };
    }
    
    return { 
      success: false, 
      error: 'An unexpected error occurred. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    };
  }
};
