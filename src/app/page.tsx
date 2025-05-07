import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { client } from "@/lib/sanity/client";
import { homePageQuery } from "@/lib/sanity/queries";
import { HomePageContent } from "@/types/sanity";

export const revalidate = 60; // Revalidate at most once per minute

export default async function Home() {
  // Fetch content from Sanity
  const data: HomePageContent = await client.fetch(homePageQuery);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header data={data.header} />
      <Hero data={data.hero} />
      <Features data={data.features} />
      <CTA data={data.cta} />
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </main>
  );
}
