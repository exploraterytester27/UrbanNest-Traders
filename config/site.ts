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
  about: {
    heading: string;
    paragraphs: readonly string[];
  };
  contact: {
    phone: string;
    whatsAppNumber: string;
    whatsAppDisplay: string;
    email: string;
    location: string;
    instagram: string;
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

export const siteConfig = {
  business: {
    name: "Mallusha Enterprises",
    tagline: "Gifts | Essentials | Beyond Expectations",
    description: "Gifts made for every special occasion. From weddings and birthdays to betrothals and corporate gifting, Mallusha Enterprises offers return gifts, kitchen essentials, handbags, vanity boxes, bottles and customized gifting options to make every occasion more memorable.",
  },
  about: {
    heading: "Making Every Occasion More Memorable",
    paragraphs: [
      "Mallusha Enterprises offers a thoughtfully selected range of return gifts, everyday essentials, and customized gifting solutions for personal celebrations and corporate needs.",
      "From weddings, birthdays, betrothals and other special occasions to corporate gifting requirements, we help customers find gifts that complement the occasion and make it even more memorable.",
      "Our range includes return gifts, kitchen essentials, handbags, vanity boxes, bottles and other gift articles, with customization available across selected products.",
      "We also cater to corporate gifting requirements, providing customized gift options suitable for businesses looking to create meaningful gifts for their employees, clients or special occasions.",
      "At Mallusha Enterprises, our focus is simple — helping customers choose practical, presentable and personalized gifts for the moments that matter.",
    ],
  },
  contact: {
    phone: "+91 73387 82287",
    whatsAppNumber: "917338782287",
    whatsAppDisplay: "+91 73387 82287",
    email: "mallushaenterprises1@gmail.com",
    location: "No. 10, Lephoenix Gardens\nPalathurai Road, Madukkarai\nCoimbatore – 641105\nTamil Nadu, India",
    instagram: "https://www.instagram.com/mallusha19/",
  },
  branding: {
    logoPath: "/images/mallusha-logo.png.png",
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
