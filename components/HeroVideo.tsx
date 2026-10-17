"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type Props = { src: string; delayMs?: number };

const REDUCED = "(prefers-reduced-motion: reduce)";
// The video sits in the desktop photo panel; phones keep the still photo and skip the download.
const WIDE = "(min-width: 1024px)";

function subscribe(cb: () => void) {
  const mqs = [window.matchMedia(REDUCED), window.matchMedia(WIDE)];
  mqs.forEach((mq) => mq.addEventListener("change", cb));
  return () => mqs.forEach((mq) => mq.removeEventListener("change", cb));
}

/** Video only on wide screens, for visitors who haven't asked for reduced motion or reduced data. */
function canPlay() {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return !window.matchMedia(REDUCED).matches && window.matchMedia(WIDE).matches && !saveData;
}

/**
 * Hero background video: a self-hosted, silent, looping clip from the site's "Open Online Class" video.
 * It begins playing (fading in over the photo) `delayMs` after navigation.
 */
export function HeroVideo({ src, delayMs = 1500 }: Props) {
  const enabled = useSyncExternalStore(subscribe, canPlay, () => false);
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!enabled || !v) return;
    v.muted = true;
    // performance.now() counts from navigation start, so this lands at `delayMs` after the page began loading.
    const timer = window.setTimeout(
      () => {
        v.play().then(
          () => setVisible(true),
          () => setVisible(false),
        );
      },
      Math.max(0, delayMs - performance.now()),
    );
    return () => window.clearTimeout(timer);
  }, [enabled, delayMs]);

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
      className={`pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-700 ease-(--ease-calm) ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
