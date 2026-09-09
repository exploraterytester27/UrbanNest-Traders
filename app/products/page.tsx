import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/catalog/product-card";
import { SectionHeading } from "@/components/home/section-heading";
import { getCategories, getCategoryBySlug, getProducts, getProductsByCategory } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Products | UrbanNest Traders",
  description: "Browse the UrbanNest Traders product catalogue and enquire about products for gifting and everyday use.",
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string | string[] | undefined }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const categoryParam = Array.isArray(params.category) ? params.category[0] : params.category;
  const selectedCategory = categoryParam ? getCategoryBySlug(categoryParam) : undefined;
  const products = selectedCategory ? getProductsByCategory(selectedCategory.slug) : getProducts();
  const categories = getCategories();

  return (
    <section className="bg-background" aria-labelledby="products-title">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeading
          id="products-title"
          eyebrow="The catalogue"
          title={selectedCategory?.name ?? "Products for considered gifting and living."}
          description={
            selectedCategory?.shortDescription ??
            "Browse the current UrbanNest Traders product catalogue, then open a product to start an enquiry."
          }
        />

        <nav className="mt-10 overflow-x-auto pb-2" aria-label="Product categories">
          <ul className="flex min-w-max gap-2">
            <li>
              <Link
                href="/products"
                className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold focus-visible:outline-primary ${
                  selectedCategory
                    ? "border-border bg-surface text-pine hover:border-pine"
                    : "border-pine bg-pine text-surface"
                }`}
                aria-current={selectedCategory ? undefined : "page"}
              >
                All products
              </Link>
            </li>
            {categories.map((category) => {
              const isSelected = category.slug === selectedCategory?.slug;

              return (
                <li key={category.slug}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold focus-visible:outline-primary ${
                      isSelected
                        ? "border-pine bg-pine text-surface"
                        : "border-border bg-surface text-pine hover:border-pine"
                    }`}
                    aria-current={isSelected ? "page" : undefined}
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {products.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="text-2xl text-pine">No products in this category yet.</h2>
            <Link href="/products" className="mt-5 inline-flex min-h-11 items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-surface hover:bg-primary-hover focus-visible:outline-primary">
              Browse all products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
