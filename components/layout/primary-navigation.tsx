"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/config/site";

interface PrimaryNavigationProps {
  navigation: readonly NavigationItem[];
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

export function PrimaryNavigation({ navigation }: PrimaryNavigationProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
      {navigation.map((item) => {
        const isCurrent = isCurrentPage(item.href, pathname);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isCurrent ? "page" : undefined}
            className={`rounded-md px-3 py-2 text-sm font-medium text-text hover:text-pine focus-visible:outline-primary ${
              isCurrent ? "font-semibold underline decoration-primary decoration-2 underline-offset-4" : ""
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
