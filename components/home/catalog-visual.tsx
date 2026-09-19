import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

interface CatalogVisualProps {
  src: string;
  alt: string;
  label: string;
  aspectClassName?: string;
}

export function CatalogVisual({
  src,
  alt,
  label,
  aspectClassName = "aspect-[4/3]",
}: CatalogVisualProps) {
  const hasAsset = existsSync(join(process.cwd(), "public", src));

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-background ${aspectClassName}`}>
      {hasAsset ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center border border-dashed border-accent/25 bg-gradient-to-br from-surface via-background to-[#eadfd2] p-6 text-center">
          <span className="font-heading text-4xl text-accent/35" aria-hidden="true">
            {label.charAt(0)}
          </span>
          <span className="mt-3 max-w-[12rem] text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Visual preview unavailable
          </span>
        </div>
      )}
    </div>
  );
}
