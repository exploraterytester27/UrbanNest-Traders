import Link from "next/link";

export function CorporateCta() {
  return (
    <section id="bulk-corporate" className="bg-background" aria-labelledby="corporate-title">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#eadfd2] px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
          <div className="absolute -right-10 top-1/2 size-56 -translate-y-1/2 rounded-full border border-primary/20" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Bulk &amp; corporate</p>
            <h2 id="corporate-title" className="mt-4 text-4xl text-pine sm:text-5xl">Planning something for a group?</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">Share a little about your gifting, event, or business requirement and we can use the catalogue as a starting point for the conversation.</p>
            <Link href="/request-a-quote" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-pine px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary focus-visible:outline-primary">
              Start an enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
