"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/images";

const INITIAL = 8;

/**
 * Photo gallery on an even grid so it ends flush with the next section.
 * The first few photos show immediately; the rest sit behind a native <details> toggle
 * so long galleries don't bury the page footer on phones. Tiles open an in-page lightbox
 * (native <dialog>: Esc closes, arrow keys step through) instead of a raw file in a new tab.
 */
export function Gallery({
  title = "Gallery",
  photos,
}: {
  title?: string;
  photos: Photo[];
}) {
  const first = photos.slice(0, INITIAL);
  const more = photos.slice(INITIAL);
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [step]);

  const current = index === null ? null : photos[index];

  return (
    <section className="bg-cream section-y" aria-labelledby="gallery-title">
      <div className="container-brand">
        <h2 id="gallery-title" className="h-section reveal text-brand-dark">
          {title}
        </h2>
        <Grid photos={first} offset={0} onOpen={open} className="mt-8 md:mt-10" />
        {more.length > 0 && (
          <details className="group">
            <summary className="mx-auto mt-6 flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-brand-dark/40 px-6 font-sans text-sm font-bold uppercase tracking-[1px] text-brand-dark transition-colors hover:bg-brand-dark hover:text-white group-open:hidden [&::-webkit-details-marker]:hidden">
              Show all {photos.length} photos
            </summary>
            <Grid photos={more} offset={INITIAL} onOpen={open} className="mt-3 md:mt-4" />
          </details>
        )}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        aria-label="Photo viewer"
        className="m-auto size-full max-h-none max-w-none bg-transparent p-0 backdrop:bg-brand-ink/90"
      >
        {current && (
          <div className="flex size-full items-center justify-center p-4 md:p-14" onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}>
            <figure className="relative h-full w-full">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              <figcaption className="absolute inset-x-0 -bottom-1 translate-y-full text-center text-sm text-white/80">
                {current.alt} · {(index ?? 0) + 1} / {photos.length}
              </figcaption>
            </figure>
          </div>
        )}
        <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className={`${navBtn} right-3 top-3`}>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        </button>
        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={`${navBtn} left-3 top-1/2 -translate-y-1/2`}>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next photo" className={`${navBtn} right-3 top-1/2 -translate-y-1/2`}>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </dialog>
    </section>
  );
}

const navBtn =
  "absolute flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25";

/**
 * Even grid: every tile shares one portrait ratio so rows and the bottom edge line up
 * exactly. INITIAL is a multiple of both column counts, so the first block is always full.
 */
function Grid({
  photos,
  offset,
  onOpen,
  className = "",
}: {
  photos: Photo[];
  offset: number;
  onOpen: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 ${className}`}>
      {photos.map((p, i) => (
        <button
          key={p.src.src}
          type="button"
          onClick={() => onOpen(offset + i)}
          className="group relative block aspect-[4/5] cursor-zoom-in overflow-hidden rounded-[3px] bg-sand"
          aria-label={`View larger: ${p.alt}`}
        >
          <Image
            src={p.src}
            alt=""
            fill
            placeholder="blur"
            sizes="(min-width: 1280px) 18rem, (min-width: 768px) 23vw, 46vw"
            className="object-cover transition-transform duration-700 ease-(--ease-calm) group-hover:scale-[1.03]"
          />
        </button>
      ))}
    </div>
  );
}
