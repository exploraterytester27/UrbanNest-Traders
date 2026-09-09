import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { Category, CategorySlug, Product } from "@/types/catalog";

export { categories, products };

export function getCategories(): readonly Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProducts(): readonly Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: CategorySlug): readonly Product[] {
  return products.filter((product) => product.category === categorySlug);
}

export function getFeaturedProducts(): readonly Product[] {
  return products.filter((product) => product.featured);
}
