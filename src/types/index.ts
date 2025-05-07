/**
 * Contact form submission type
 */
export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

/**
 * Contact form state
 */
export type ContactFormState = {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
};

/**
 * Site metadata
 */
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

/**
 * Navigation item definition
 */
export type NavigationItem = {
  title: string;
  href: string;
  external?: boolean;
};

/**
 * Feature definition for the features section
 */
export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
