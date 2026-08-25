import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

const primaryNavigation = siteConfig.navigation.slice(0, -1);
const quoteLink = siteConfig.navigation.at(-1);
const logoPath = join(process.cwd(), "public", siteConfig.branding.logoPath);
const hasLogoAsset = existsSync(logoPath);

export function Header() {
  return (
    <header className="relative border-b border-border bg-background">
      <a
        href="#main-content"
        className="sr-only absolute left-4 top-4 z-20 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-surface focus:not-sr-only focus:outline-primary"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="shrink-0 rounded-sm focus-visible:outline-primary">
          {hasLogoAsset ? (
            <Image
              src={siteConfig.branding.logoPath}
              alt={siteConfig.business.name}
              width={180}
              height={48}
              className="h-9 w-auto object-contain"
            />
          ) : (
            <span className="font-heading text-xl font-semibold tracking-tight text-pine">
              {siteConfig.business.name}
            </span>
          )}
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text hover:text-pine focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          {quoteLink ? (
            <Link
              href={quoteLink.href}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-surface hover:bg-primary-hover focus-visible:outline-primary"
            >
              {quoteLink.label}
            </Link>
          ) : null}
        </div>

        <MobileNavigation navigation={primaryNavigation} quoteLink={quoteLink} />
      </div>
    </header>
  );
}
