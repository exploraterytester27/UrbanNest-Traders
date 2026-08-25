export type SiteRoute =
  | "/"
  | "/products"
  | "/bulk-corporate"
  | "/about"
  | "/contact"
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

// Replace the clearly marked placeholders when real UrbanNest Traders details are available.
export const siteConfig = {
  business: {
    name: "UrbanNest Traders",
    tagline: "Thoughtful everyday goods for gifting and living.",
    description:
      "A fictional product catalogue and enquiry website for UrbanNest Traders.",
  },
  contact: {
    phone: "[PHONE_NUMBER_TO_BE_CONFIRMED]",
    whatsAppNumber: "[WHATSAPP_NUMBER_TO_BE_CONFIRMED]",
    email: "[EMAIL_ADDRESS_TO_BE_CONFIRMED]",
    location: "[LOCATION_TO_BE_CONFIRMED]",
  },
  branding: {
    logoPath: "/images/brand/urbannest-traders-logo.svg",
  },
  seo: {
    defaultTitle: "UrbanNest Traders | Product Catalogue & Enquiries",
    defaultDescription:
      "Explore the fictional UrbanNest Traders catalogue and send an enquiry for product or quote information.",
    siteUrl: "https://example.com",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Bulk & Corporate", href: "/bulk-corporate" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/request-a-quote" },
  ],
} as const satisfies SiteConfiguration;
