export type SiteRoute =
  | "/"
  | "/products"
  | "/#categories"
  | "/#about"
  | "/#contact"
  | "/request-a-quote";

export interface NavigationItem {
  label: string;
  href: SiteRoute;
}

export interface SiteConfiguration {
  business: {
    name: string;
    tagline: string;
    description: string;
  };
  contact: {
    phone: string;
    whatsAppNumber: string;
    email: string;
    location: string;
  };
  branding: {
    logoPath: `/images/${string}`;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    siteUrl: string;
  };
  navigation: readonly NavigationItem[];
}

// Replace the logo path with the approved Mallusha Enterprises logo asset when supplied.
export const siteConfig = {
  business: {
    name: "Mallusha Enterprises",
    tagline: "Products and enquiries",
    description: "Mallusha Enterprises product catalogue and enquiry website.",
  },
  contact: {
    phone: "73387 82287",
    whatsAppNumber: "917338782287",
    email: "mallushaenterprises1@gmail.com",
    location: "No. 10, PVM Lephonix Garden, Madukkarai Market, Coimbatore - 641 105",
  },
  branding: {
    logoPath: "/images/brand/mallusha-enterprises-logo.svg",
  },
  seo: {
    defaultTitle: "Mallusha Enterprises | Product Catalogue & Enquiries",
    defaultDescription: "Explore the Mallusha Enterprises product catalogue and send an enquiry.",
    siteUrl: "https://example.com",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/#categories" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "Request a Quote", href: "/request-a-quote" },
  ],
} as const satisfies SiteConfiguration;
