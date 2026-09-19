"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavigationItem } from "@/config/site";

interface MobileNavigationProps {
  navigation: readonly NavigationItem[];
  quoteLink?: NavigationItem;
}

function isCurrentPage(href: NavigationItem["href"], pathname: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/products") {
    return pathname.startsWith("/products");
  }

  return false;
}

export function MobileNavigation({ navigation, quoteLink }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const wasOpen = wasOpenRef.current;
    wasOpenRef.current = isOpen;

    if (!isOpen) {
      if (wasOpen) {
        menuButtonRef.current?.focus();
      }

      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstLinkRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface text-text hover:bg-background focus-visible:outline-primary"
        aria-expanded={isOpen}
        aria-controls="mobile-site-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? "Close navigation menu" : "Open navigation menu"}</span>
        <span aria-hidden="true" className="flex w-5 flex-col gap-1">
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
        </span>
      </button>

      {isOpen ? (
        <nav
          id="mobile-site-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-y border-border bg-background px-5 py-6 shadow-sm"
        >
          <ul className="space-y-1">
            {navigation.map((item, index) => {
              const isCurrent = isCurrentPage(item.href, pathname);

              return (
                <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`block rounded-md px-3 py-3 text-sm font-medium text-text hover:bg-surface focus-visible:outline-primary ${isCurrent ? "font-semibold underline decoration-accent decoration-2 underline-offset-4" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                </li>
              );
            })}
          </ul>

          {quoteLink ? (
            <Link
              href={quoteLink.href}
              className="mt-5 flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-surface hover:bg-primary-hover focus-visible:outline-primary"
              onClick={closeMenu}
            >
              {quoteLink.label}
            </Link>
          ) : null}
        </nav>
      ) : null}
    </div>
  );
}
