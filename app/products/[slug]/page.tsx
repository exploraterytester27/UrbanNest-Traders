import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/catalog/product-gallery";
import { getCategoryBySlug, getProductBySlug, getProducts } from "@/data/catalog";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found | UrbanNest Traders" };
  }

  return {
    title: `${product.name} | UrbanNest Traders`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const enquiryTypes = [
    product.bulkOrder ? "Bulk order enquiries" : null,
    product.returnGift ? "Return gift enquiries" : null,
    product.corporateGift ? "Corporate gift enquiries" : null,
  ].filter((value): value is string => value !== null);

  return (
    <article className="bg-background" aria-labelledby="product-title">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <Link href="/products" className="inline-flex min-h-11 items-center text-sm font-semibold text-pine underline decoration-pine/30 underline-offset-4 hover:text-primary focus-visible:outline-primary">
          <span className="mr-2" aria-hidden="true">←</span> Browse products
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          <ProductGallery product={product} />

          <div>
            <Link href={`/products?category=${product.category}`} className="text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-primary-hover focus-visible:outline-primary">
              {category?.name ?? "Catalogue"}
            </Link>
            <h1 id="product-title" className="mt-4 text-4xl text-text sm:text-5xl">{product.name}</h1>
            <p className="mt-6 text-base leading-7 text-muted sm:text-lg">{product.description}</p>

            {enquiryTypes.length > 0 ? (
              <div className="mt-8 border-t border-border pt-7">
                <h2 className="text-xl text-pine">Suitable enquiry types</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2" aria-label="Suitable enquiry types">
                  {enquiryTypes.map((type) => (
                    <li key={type} className="flex items-start gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-surface hover:bg-primary-hover focus-visible:outline-primary">
                Request a Quote <span className="ml-3" aria-hidden="true">↗</span>
              </Link>
              <Link href="/products" className="inline-flex min-h-12 items-center justify-center rounded-md border border-pine px-6 py-3 text-sm font-semibold text-pine hover:bg-pine hover:text-surface focus-visible:outline-primary">
                Continue browsing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
