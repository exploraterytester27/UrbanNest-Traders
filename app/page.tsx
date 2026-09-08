import { AboutSection } from "@/components/home/about-section";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { ContactSection } from "@/components/home/contact-section";
import { CorporateCta } from "@/components/home/corporate-cta";
import { Hero } from "@/components/home/hero";
import { ProductShowcase } from "@/components/home/product-showcase";
import { QuoteCta } from "@/components/home/quote-cta";
import { ValueProposition } from "@/components/home/value-proposition";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CategoryShowcase />
      <ProductShowcase />
      <ValueProposition />
      <CorporateCta />
      <QuoteCta />
      <ContactSection />
    </>
  );
}
