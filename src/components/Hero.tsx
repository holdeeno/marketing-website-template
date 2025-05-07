"use client";

import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity/image";
import { HeroSection } from "@/types/sanity";

interface HeroProps {
  data?: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  // If no data is provided, use the default content
  const title = data?.title || "Grow Your Business with Our Solutions";
  const description = data?.description || "We help businesses scale through innovative strategies, cutting-edge technology, and data-driven insights. Let's transform your vision into reality.";
  const primaryButton = data?.primaryButton || { text: "Get in Touch", link: "#contact" };
  const secondaryButton = data?.secondaryButton || { text: "Our Services", link: "#features" };
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                {title}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href={primaryButton.link}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400"
              >
                {primaryButton.text}
              </Link>
              <Link
                href={secondaryButton.link}
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
              >
                {secondaryButton.text}
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
              {data?.image ? (
                <Image 
                  src={urlForImage(data.image)}
                  alt={title}
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="space-y-4 p-6">
                      <div className="mx-auto h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10 text-primary-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">Results-Driven Approach</h3>
                        <p className="text-sm text-gray-500">
                          Focused on delivering measurable business outcomes
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
