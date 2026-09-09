import Link from "next/link";
import { getFeaturedProducts } from "@/data/catalog";
import { CatalogVisual } from "@/components/home/catalog-visual";
import { SectionHeading } from "@/components/home/section-heading";

export function ProductShowcase() {
  const products = getFeaturedProducts();

  return (
    <section id="featured-products" className="bg-surface" aria-labelledby="featured-title">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <SectionHeading
          id="featured-title"
          eyebrow="A few to begin with"
          title="Small details, considered for everyday life."
          description="These fictional catalogue concepts are a starting point for product and gifting conversations."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <article key={product.id} className="group overflow-hidden rounded-2xl border border-border bg-background">
              <CatalogVisual src={product.images[0]} alt="" label={product.name} aspectClassName="aspect-[5/4] rounded-none" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Featured concept</p>
                <h3 className="mt-3 text-2xl text-pine group-hover:text-primary">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
                <Link href={`/products/${product.slug}`} className="mt-5 inline-flex text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 focus-visible:outline-primary">
                  View details <span className="ml-2" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
