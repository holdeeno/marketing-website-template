"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Website Template</h3>
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
            &copy; {currentYear} Website Template. All rights reserved.
          </p>
          <div className="flex space-x-4">
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
