"use client";

import { useState, useRef, useEffect } from "react";
import { validateContactForm, submitContactForm } from "@/lib/supabase";
import { ContactFormData, ContactFormState } from "@/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  
  const [formState, setFormState] = useState<ContactFormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
    successMessage: null
  });
  
  // For tracking character count in message
  const [messageCharCount, setMessageCharCount] = useState(0);
  
  // For focusing error fields
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  
  // Effect for focusing first field with error
  useEffect(() => {
    if (formState.error) {
      const errorLowerCase = formState.error.toLowerCase();
      if (errorLowerCase.includes('name')) {
        nameInputRef.current?.focus();
      } else if (errorLowerCase.includes('email')) {
        emailInputRef.current?.focus();
      } else if (errorLowerCase.includes('message')) {
        messageInputRef.current?.focus();
      }
    }
  }, [formState.error]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Clear error when field is being edited
    if (formState.error) {
      setFormState(prev => ({ ...prev, error: null }));
    }
    
    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Update character count for message
    if (name === 'message') {
      setMessageCharCount(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      error: null,
      successMessage: null
    }));
    
    try {
      // Submit the form data
      const result = await submitContactForm(formData);
      
      if (result.success) {
        // Success state
        setFormState({
          isSubmitting: false,
          isSubmitted: true,
          error: null,
          successMessage: result.message || 'Your message has been sent successfully!'
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        setMessageCharCount(0);
        
        // Track form submission success (can be replaced with actual analytics)
        if (typeof window !== 'undefined') {
          console.log('Form submission success tracked');
        }
      } else {
        // Error state
        setFormState({
          isSubmitting: false,
          isSubmitted: false,
          error: result.error || 'Something went wrong. Please try again.',
          successMessage: null
        });
        
        // Track form submission failure (can be replaced with actual analytics)
        if (typeof window !== 'undefined') {
          console.log('Form submission failure tracked:', result.error);
        }
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'An unexpected error occurred. Please try again later.',
        successMessage: null
      });
    }
  };

  if (formState.isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3 className="mt-3 text-lg font-medium text-gray-900">Message sent!</h3>
          <p className="mt-2 text-sm text-gray-500">
            {formState.successMessage || 'Thank you for contacting us. We\'ll get back to you as soon as possible.'}
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              onClick={() => setFormState({ 
                isSubmitting: false, 
                isSubmitted: false, 
                error: null,
                successMessage: null
              })}
            >
              Send another message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="space-y-6">
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              ref={nameInputRef}
              required
              value={formData.name}
              onChange={handleChange}
              aria-describedby="name-error"
              className={`block w-full rounded-md border ${
                formState.error?.toLowerCase().includes('name') 
                  ? 'border-red-300 ring-red-500' 
                  : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
              } px-3 py-2 shadow-sm`}
            />
          </div>
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              ref={emailInputRef}
              required
              value={formData.email}
              onChange={handleChange}
              aria-describedby="email-error"
              className={`block w-full rounded-md border ${
                formState.error?.toLowerCase().includes('email') 
                  ? 'border-red-300 ring-red-500' 
                  : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
              } px-3 py-2 shadow-sm`}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <span className={`text-xs ${
              messageCharCount > 1000 
                ? 'text-red-500' 
                : messageCharCount > 800 
                  ? 'text-yellow-500' 
                  : 'text-gray-500'
            }`}>
              {messageCharCount}/1000
            </span>
          </div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              ref={messageInputRef}
              required
              value={formData.message}
              onChange={handleChange}
              aria-describedby="message-error"
              className={`block w-full rounded-md border ${
                formState.error?.toLowerCase().includes('message') 
                  ? 'border-red-300 ring-red-500' 
                  : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
              } px-3 py-2 shadow-sm`}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Please include any relevant details about your inquiry. We'll respond within 2 business days.
          </p>
        </div>

        {formState.error && (
          <div className="rounded-md bg-red-50 p-4" role="alert">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">{formState.error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            aria-live="polite"
          >
            {formState.isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
          <p className="mt-2 text-xs text-center text-gray-500">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </form>
  );
}
