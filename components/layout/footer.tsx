import Link from "next/link";
import { siteConfig } from "@/config/site";

const primaryNavigation = siteConfig.navigation.slice(0, -1);
const quoteLink = siteConfig.navigation.at(-1);
const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export function Footer() {
  return (
    <footer className="bg-pine text-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm">
            <Link href="/" className="rounded-sm focus-visible:outline-surface">
              <span className="font-heading text-2xl font-semibold tracking-tight">
                {siteConfig.business.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-background/80">
              {siteConfig.business.description}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold">Explore</h2>
            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="space-y-2">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-sm text-sm text-background/80 hover:text-surface focus-visible:outline-surface"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold">Contact</h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-background/80">
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.whatsAppNumber}</p>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.location}</p>
            </address>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold">Enquiries</h2>
            <p className="mt-4 text-sm leading-6 text-background/80">{siteConfig.business.tagline}</p>
            {quoteLink ? (
              <Link
                href={quoteLink.href}
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-surface px-4 py-2.5 text-sm font-semibold text-pine hover:bg-background focus-visible:outline-surface"
              >
                {quoteLink.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/20 pt-6 text-sm text-background/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex gap-5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm hover:text-surface focus-visible:outline-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
