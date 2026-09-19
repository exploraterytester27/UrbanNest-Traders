import Link from "next/link";
import { getCategories } from "@/data/catalog";
import { CatalogVisual } from "@/components/home/catalog-visual";
import { SectionHeading } from "@/components/home/section-heading";

export function CategoryShowcase() {
  const categories = getCategories();

  return (
    <section id="categories" className="bg-soft-beige" aria-labelledby="category-title">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="category-title"
            eyebrow="Browse the Collection"
            title="Gifts and essentials for every occasion."
            description="Explore return gifts, kitchen essentials, handbags, vanity boxes, bottles and other gift articles."
          />
          <Link href="/products" className="shrink-0 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-8 hover:text-primary-hover focus-visible:outline-primary">
            View all products <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group rounded-2xl border border-border bg-surface p-3 transition-transform hover:-translate-y-1 focus-visible:outline-primary"
            >
              <CatalogVisual src={category.image} alt="" label={category.name} />
              <div className="px-3 pb-3 pt-5">
                <h3 className="text-2xl text-pine group-hover:text-primary">{category.name}</h3>
                <p className="mt-2 text-base leading-7 text-muted">{category.shortDescription}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-primary">Explore category <span className="ml-2" aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
