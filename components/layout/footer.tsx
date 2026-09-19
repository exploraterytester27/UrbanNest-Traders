import Link from "next/link";
import { siteConfig } from "@/config/site";

const primaryNavigation = siteConfig.navigation.slice(0, -1);
const quoteLink = siteConfig.navigation.at(-1);

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
            <p className="mt-4 text-base leading-7 text-background/80">
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
                      className="rounded-sm text-base text-background/80 hover:text-surface focus-visible:outline-surface"
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
            <address className="mt-4 space-y-2 text-base not-italic text-background/80">
              <p><span className="mr-2 text-background/60">Phone</span><a href="tel:+917338782287" className="hover:text-surface focus-visible:outline-surface">{siteConfig.contact.phone}</a></p>
              <p><span className="mr-2 text-background/60">WhatsApp</span><a href={`https://wa.me/${siteConfig.contact.whatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-surface focus-visible:outline-surface">{siteConfig.contact.whatsAppDisplay}</a></p>
              <p><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-surface focus-visible:outline-surface">{siteConfig.contact.email}</a></p>
              <p className="whitespace-pre-line">{siteConfig.contact.location}</p>
              <p><a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-surface focus-visible:outline-surface">Instagram</a></p>
            </address>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold">Enquiries</h2>
            <p className="mt-4 text-base leading-7 text-background/80">{siteConfig.business.tagline}</p>
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

        <div className="mt-12 border-t border-background/20 pt-6 text-sm text-background/70">
          <p>
            © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
