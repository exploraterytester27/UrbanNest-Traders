import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-border bg-background" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-10 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">UrbanNest Traders</p>
          <h1 id="hero-title" className="mt-5 max-w-3xl text-5xl text-text sm:text-6xl lg:text-7xl">
            Everyday goods, chosen with intention.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            {siteConfig.business.tagline} Explore a considered catalogue for personal gifting, everyday routines, and thoughtful business enquiries.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover focus-visible:outline-primary"
            >
              Explore the catalogue
            </Link>
            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-pine px-6 py-3 text-sm font-semibold text-pine transition-colors hover:bg-pine hover:text-surface focus-visible:outline-primary"
            >
              Start an enquiry
            </Link>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted">Catalogue</dt>
              <dd className="mt-2 font-heading text-2xl text-pine">Curated</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted">Enquiries</dt>
              <dd className="mt-2 font-heading text-2xl text-pine">Personal</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-xs uppercase tracking-[0.15em] text-muted">Approach</dt>
              <dd className="mt-2 font-heading text-2xl text-pine">Considered</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-pine p-7 text-background sm:min-h-[30rem] sm:p-10">
          <div className="absolute -right-20 -top-20 size-64 rounded-full border border-background/20" aria-hidden="true" />
          <div className="absolute -bottom-28 -left-20 size-72 rounded-full border border-background/15" aria-hidden="true" />
          <div className="relative flex h-full min-h-[20rem] flex-col justify-between sm:min-h-[26rem]">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-background/70">A softer way to browse</span>
            <div>
              <p className="font-heading text-5xl leading-none text-background sm:text-7xl">Useful.</p>
              <p className="font-heading text-5xl leading-none text-[#e6b08f] sm:text-7xl">Giftable.</p>
              <p className="font-heading text-5xl leading-none text-background sm:text-7xl">Ready to discuss.</p>
            </div>
            <p className="max-w-xs text-sm leading-6 text-background/70">
              A fictional catalogue foundation for meaningful product and quote conversations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
