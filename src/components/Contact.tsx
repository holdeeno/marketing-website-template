"use client";

import { ContactSection } from "@/types/sanity";
import ContactForm from "./ContactForm";
import ClientContactWrapper from "./ClientContactWrapper";

// Social icons
const socialIcons = {
  twitter: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  ),
  linkedin: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  facebook: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

// Define social platforms with default URLs
const socialPlatforms = [
  { platform: "twitter", url: "https://twitter.com", icon: socialIcons.twitter },
  { platform: "linkedin", url: "https://linkedin.com", icon: socialIcons.linkedin },
  { platform: "facebook", url: "https://facebook.com", icon: socialIcons.facebook },
];

interface ContactProps {
  data?: ContactSection;
}

export default function Contact({ data }: ContactProps) {

  // Default values if no data is provided
  const title = data?.title || "Get in Touch";
  const description = data?.description || 
    "Have questions or ready to discuss your project? Fill out the form below and we'll get back to you as soon as possible.";
  const email = data?.email || "info@example.com";
  const phone = data?.phone || "+1 (555) 123-4567";
  
  // Format phone for href (remove non-numeric chars)
  const phoneHref = phone.replace(/\D/g, "");

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[700px] mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              {title}
            </h2>
            <p className="mx-auto text-gray-500 md:text-xl">
              {description}
            </p>
          </div>

          <div className="w-full max-w-md mx-auto">
            <ClientContactWrapper>
              <ContactForm />
            </ClientContactWrapper>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-200 w-full max-w-md mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-sm text-gray-500">
                  <a href={`mailto:${email}`} className="hover:text-primary-600">
                    {email}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-sm text-gray-500">
                  <a href={`tel:+${phoneHref}`} className="hover:text-primary-600">
                    {phone}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Follow Us</h3>
                <div className="mt-1 flex items-center justify-center space-x-2">
                  {socialPlatforms.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600"
                    >
                      <span className="sr-only">{social.platform}</span>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {data?.address && (
                <div className="md:col-span-3 mt-4">
                  <h3 className="text-sm font-medium text-gray-900">Address</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {data.address}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
