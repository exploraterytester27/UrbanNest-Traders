import Link from "next/link";

export default function ProductNotFound() {
  return (
    <section className="bg-background" aria-labelledby="product-not-found-title">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Product not found</p>
        <h1 id="product-not-found-title" className="mt-4 text-4xl text-pine sm:text-5xl">That catalogue item is not available.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">The product link may be out of date. Return to the catalogue to browse the current Mallusha Enterprises collection.</p>
        <Link href="/products" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-surface hover:bg-primary-hover focus-visible:outline-primary">
          Browse products
        </Link>
      </div>
    </section>
  );
}
