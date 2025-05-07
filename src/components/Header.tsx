"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { HeaderSection } from "@/types/sanity";

interface HeaderProps {
  data?: HeaderSection;
}

export default function Header({ data }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Default menu items if none provided
  const defaultMenuItems = [
    { title: "Home", link: "/" },
    { title: "Features", link: "#features" },
    { title: "About", link: "#about" },
    { title: "Contact", link: "#contact" },
  ];
  
  // Use data properties if available, otherwise use defaults
  const title = data?.title || "Website Template";
  const menuItems = data?.menuItems || defaultMenuItems;

  return (
    <header className="w-full border-b border-gray-100 bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {data?.logo ? (
            <Link href="/" className="flex items-center">
              <Image 
                src={urlForImage(data.logo)} 
                alt={title}
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-2xl font-bold text-primary-600">{title}</span>
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-bold text-primary-600">
              {title}
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={`desktop-${index}`}
              href={item.link}
              className="text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <Link
                key={`mobile-${index}`}
                href={item.link}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
