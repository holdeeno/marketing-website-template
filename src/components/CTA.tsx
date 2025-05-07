"use client";

import Link from "next/link";
import { CTASection } from "@/types/sanity";

interface CTAProps {
  data?: CTASection;
}

export default function CTA({ data }: CTAProps) {
  // Default values if no data is provided
  const title = data?.title || "Ready to take your business to the next level?";
  const description = data?.description || "Contact us today to discuss how we can help you achieve your business goals.";
  const buttonText = data?.buttonText || "Contact Us";
  const buttonLink = data?.buttonLink || "#contact";
  
  return (
    <section className="w-full py-12 md:py-24 bg-primary-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
              {title}
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href={buttonLink}
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary-600 shadow transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400"
            >
              {buttonText}
            </Link>
            <Link
              href="#about"
              className="inline-flex h-10 items-center justify-center rounded-md border border-primary-200 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
