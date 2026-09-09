"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import type { Product } from "@/types/catalog";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hasMultipleImages = product.images.length > 1;
  const activeImage = product.images[activeIndex] ?? product.images[0];

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? product.images.length - 1 : currentIndex - 1));
  }, [product.images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % product.images.length);
  }, [product.images.length]);

  useEffect(() => {
    if (!hasMultipleImages) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultipleImages, showNext, showPrevious]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || !hasMultipleImages) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 40) {
      return;
    }

    if (distance > 0) {
      showPrevious();
    } else {
      showNext();
    }
  };

  return (
    <div>
      <div
        className="relative aspect-square overflow-hidden rounded-2xl bg-background sm:aspect-[4/3]"
        onTouchStart={hasMultipleImages ? handleTouchStart : undefined}
        onTouchEnd={hasMultipleImages ? handleTouchEnd : undefined}
      >
        <Image
          key={activeImage}
          src={activeImage}
          alt={`${product.name}, view ${activeIndex + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain transition-opacity duration-200"
        />

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-xl text-pine transition-colors hover:bg-surface focus-visible:outline-primary"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={showNext}
              className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-xl text-pine transition-colors hover:bg-surface focus-visible:outline-primary"
            >
              <span aria-hidden="true">→</span>
            </button>
            <p className="sr-only" aria-live="polite">
              Showing image {activeIndex + 1} of {product.images.length}
            </p>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <div className="mt-4 max-w-full overflow-x-auto pb-2" aria-label={`${product.name} image views`}>
          <ul className="flex min-w-max gap-3">
            {product.images.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={image} className="shrink-0">
                  <button
                    type="button"
                    aria-label={`Show ${product.name}, view ${index + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setActiveIndex(index)}
                    className={`relative block aspect-square w-20 overflow-hidden rounded-xl border bg-background focus-visible:outline-primary sm:w-24 ${
                      isActive ? "border-primary ring-2 ring-primary/30" : "border-border"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name}, view ${index + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
