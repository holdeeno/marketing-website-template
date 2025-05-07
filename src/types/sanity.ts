import { SanityImageObject } from '@sanity/image-url/lib/types/types';

// Common button interface
interface ButtonLink {
  text: string;
  link: string;
}

// Section interfaces
export interface HeroSection {
  _type: 'hero';
  title: string;
  description?: string;
  primaryButton?: ButtonLink;
  secondaryButton?: ButtonLink;
  image?: SanityImageObject;
}

export interface FeatureItem {
  _type: 'feature';
  title: string;
  description: string;
  icon?: string;
}

export interface FeaturesSection {
  _type: 'features';
  title?: string;
  subtitle?: string;
  description?: string;
  featureItems: FeatureItem[];
}

export interface CTASection {
  _type: 'cta';
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface ContactSection {
  _type: 'contact';
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface MenuItem {
  title: string;
  link: string;
}

export interface HeaderSection {
  _type: 'header';
  title?: string;
  logo?: SanityImageObject;
  menuItems?: MenuItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface FooterSection {
  _type: 'footer';
  logo?: SanityImageObject;
  copyrightText?: string;
  socialLinks?: SocialLink[];
}

// Complete homepage content
export interface HomePageContent {
  hero?: HeroSection;
  features?: FeaturesSection;
  cta?: CTASection;
  contact?: ContactSection;
  header?: HeaderSection;
  footer?: FooterSection;
}
