"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Category } from "@/types/catalog";

interface ProductFiltersProps {
  categories: readonly Category[];
  selectedCategory?: string;
  search?: string;
}

function buildProductsUrl(category: string | undefined, search: string): string {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (search.trim()) {
    params.set("search", search.trim());
  }

  const query = params.toString();
  return query ? `/products?${query}` : "/products";
}

export function ProductFilters({ categories, selectedCategory, search = "" }: ProductFiltersProps) {
  const router = useRouter();
  const hasActiveFilters = Boolean(selectedCategory || search.trim());

  const updateFilters = (category: string | undefined, nextSearch: string) => {
    router.replace(buildProductsUrl(category, nextSearch), { scroll: false });
  };

  const handleSearchChange = (value: string) => updateFilters(selectedCategory, value);

  return (
    <div className="mt-10 rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <label htmlFor="product-search" className="text-sm font-semibold text-text">Search products</label>
          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder="Search by product, category, or description"
            className="mt-2 block min-h-12 w-full rounded-md border border-border bg-background px-4 py-3 text-base text-text outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
            aria-describedby="product-search-help"
          />
          <p id="product-search-help" className="mt-2 text-sm text-muted">Search is case-insensitive.</p>
        </div>

        {hasActiveFilters ? (
          <Link href="/products" className="inline-flex min-h-11 items-center justify-center rounded-md border border-pine px-5 py-2.5 text-sm font-semibold text-pine hover:bg-pine hover:text-surface focus-visible:outline-primary">
            Clear filters
          </Link>
        ) : null}
      </div>

      <nav className="mt-6 overflow-x-auto pb-2" aria-label="Product categories">
        <ul className="flex min-w-max gap-2">
          <li>
            <button
              type="button"
              aria-pressed={!selectedCategory}
              onClick={() => updateFilters(undefined, search)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold focus-visible:outline-primary ${
                selectedCategory ? "border-border bg-background text-pine hover:border-pine" : "border-pine bg-pine text-surface"
              }`}
            >
              All products
            </button>
          </li>
          {categories.map((category) => {
            const isSelected = category.slug === selectedCategory;

            return (
              <li key={category.slug}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => updateFilters(category.slug, search)}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold focus-visible:outline-primary ${
                    isSelected ? "border-pine bg-pine text-surface" : "border-border bg-background text-pine hover:border-pine"
                  }`}
                >
                  {category.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <span className="sr-only">Current catalogue filters: {selectedCategory ?? "all categories"}{search.trim() ? `, search ${search}` : ""}.</span>
    </div>
  );
}
