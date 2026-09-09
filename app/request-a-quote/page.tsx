import type { Metadata } from "next";
import Link from "next/link";
import { ProductEnquiryForm } from "@/components/catalog/product-enquiry-form";
import { getProductBySlug } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Request a Quote | UrbanNest Traders",
  description: "Share your product enquiry requirements with UrbanNest Traders.",
};

type RequestAQuotePageProps = {
  searchParams: Promise<{ product?: string | string[] | undefined }>;
};

export default async function RequestAQuotePage({ searchParams }: RequestAQuotePageProps) {
  const params = await searchParams;
  const productSlug = Array.isArray(params.product) ? params.product[0] : params.product;
  const product = productSlug ? getProductBySlug(productSlug) : undefined;

  return (
    <section className="bg-background" aria-labelledby="quote-page-title">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <Link href={product ? `/products/${product.slug}` : "/products"} className="inline-flex min-h-11 items-center text-sm font-semibold text-pine underline decoration-pine/30 underline-offset-4 hover:text-primary focus-visible:outline-primary">
          <span className="mr-2" aria-hidden="true">←</span> {product ? "Back to product" : "Browse products"}
        </Link>

        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Request a quote</p>
          <h1 id="quote-page-title" className="mt-4 text-4xl text-text sm:text-5xl">Start a product enquiry.</h1>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">Provide the essentials below. The selected product is carried into the form automatically when you start from a product page.</p>
          <div className="mt-10">
            <ProductEnquiryForm product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
