export type CategorySlug =
  | "water-bottles"
  | "insulated-bottles"
  | "lunch-boxes"
  | "travel-bags"
  | "handbags"
  | "purses"
  | "vanity-boxes"
  | "gift-sets-return-gifts"
  | "kitchen-lifestyle-accessories";

export type LocalImagePath = `/images/${string}`;

export interface SeoMetadata {
  title: string;
  description: string;
}

export interface Category {
  name: string;
  slug: CategorySlug;
  shortDescription: string;
  image: LocalImagePath;
}

export interface ProductVariant {
  label: string;
  values: readonly string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categorySlug: CategorySlug;
  images: readonly LocalImagePath[];
  featured: boolean;
  suitableFor: readonly string[];
  keyFeatures: readonly string[];
  variants?: readonly ProductVariant[];
  seo: SeoMetadata;
}
