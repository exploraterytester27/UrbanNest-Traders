import Link from "next/link";

export function QuoteCta() {
  return (
    <section className="bg-surface" aria-labelledby="quote-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Ready when you are</p>
          <h2 id="quote-title" className="mt-4 max-w-2xl text-4xl text-text sm:text-5xl">Have a product or quantity in mind?</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">Tell us what you are looking for and use the enquiry flow to begin a considered quote conversation.</p>
        </div>
        <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover focus-visible:outline-primary">
          Request a quote <span className="ml-3" aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
