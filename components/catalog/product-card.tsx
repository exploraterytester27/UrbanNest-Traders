import Link from "next/link";
import { CatalogVisual } from "@/components/home/catalog-visual";
import { getCategoryBySlug } from "@/data/catalog";
import type { Product } from "@/types/catalog";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface">
      <Link href={`/products/${product.slug}`} className="block focus-visible:outline-primary">
        <CatalogVisual
          src={product.images[0]}
          alt={`${product.name} product image`}
          label={product.name}
          aspectClassName="aspect-[5/4] rounded-none"
        />
      </Link>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          {category?.name ?? "Catalogue"}
        </p>
        <h2 className="mt-3 text-2xl text-pine group-hover:text-primary">{product.name}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 focus-visible:outline-primary"
        >
          View product <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
