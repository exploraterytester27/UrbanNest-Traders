import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/catalog/product-card";
import { ProductFilters } from "@/components/catalog/product-filters";
import { SectionHeading } from "@/components/home/section-heading";
import { getCategories, getCategoryBySlug, getProductsByFilters } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Products | Mallusha Enterprises",
  description: "Browse the Mallusha Enterprises product catalogue and send an enquiry.",
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string | string[] | undefined; search?: string | string[] | undefined }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const categoryParam = Array.isArray(params.category) ? params.category[0] : params.category;
  const searchParam = Array.isArray(params.search) ? params.search[0] : params.search;
  const selectedCategory = categoryParam ? getCategoryBySlug(categoryParam) : undefined;
  const categories = getCategories();
  const products = getProductsByFilters({ category: selectedCategory?.slug, search: searchParam });
  const hasFilters = Boolean(selectedCategory || searchParam?.trim());
  const productCount = `${products.length} ${products.length === 1 ? "product" : "products"}`;

  return (
    <section className="bg-background" aria-labelledby="products-title">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeading
          id="products-title"
          eyebrow="The catalogue"
          title={selectedCategory?.name ?? "Products for considered gifting and living."}
          description={
            selectedCategory?.shortDescription ?? "Browse the Mallusha Enterprises product catalogue, then open a product to start an enquiry."
          }
        />

        <ProductFilters categories={categories} selectedCategory={selectedCategory?.slug} search={searchParam} />

        {products.length > 0 ? (
          <>
            <p className="mt-8 text-sm font-semibold text-muted" aria-live="polite">{productCount}</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        ) : (
          <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="text-2xl text-pine">No products found</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Try a different search or category.</p>
            {hasFilters ? <Link href="/products" className="mt-5 inline-flex min-h-11 items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-surface hover:bg-primary-hover focus-visible:outline-primary">Clear filters</Link> : null}
          </div>
        )}
      </div>
    </section>
  );
}
