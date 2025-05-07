"use client";

import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { FooterSection, SocialLink } from "@/types/sanity";

interface FooterProps {
  data?: FooterSection;
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = data?.copyrightText || `© ${currentYear} Website Template. All rights reserved.`;
  
  // Default social links if none provided
  const socialLinks = data?.socialLinks || [
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "facebook", url: "https://facebook.com" },
  ];

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            {data?.logo ? (
              <div className="mb-4">
                <Image 
                  src={urlForImage(data.logo)} 
                  alt="Website Logo"
                  width={150}
                  height={50}
                  className="h-auto w-auto"
                />
              </div>
            ) : (
              <h3 className="text-xl font-bold">Website Template</h3>
            )}
            <p className="text-sm text-gray-500">
              A modern, high-performance website template built with Next.js, Tailwind CSS, and Supabase.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-gray-600 hover:text-primary-600">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-primary-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-primary-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-sm text-gray-600 hover:text-primary-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-gray-600 hover:text-primary-600">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-primary-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-6 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-600">
            {copyrightText}
          </p>
          <div className="flex items-center space-x-4">
            {/* Social links */}
            {socialLinks?.length > 0 && (
              <div className="flex space-x-4 mr-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600"
                    aria-label={link.platform}
                  >
                    {/* Simple icon representation */}
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
                      {link.platform.charAt(0).toUpperCase()}
                    </div>
                  </a>
                ))}
              </div>
            )}
            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary-600">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary-600">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-600 hover:text-primary-600">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
