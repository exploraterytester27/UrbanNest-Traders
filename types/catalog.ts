export type CategorySlug =
  | "bags"
  | "bottles"
  | "gifts-storage"
  | "kids"
  | "kitchen"
  | "gifts";

export type LocalImagePath = `/products/${string}`;

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

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  description: string;
  images: readonly LocalImagePath[];
  featured: boolean;
  bulkOrder: boolean;
  returnGift: boolean;
  corporateGift: boolean;
}
