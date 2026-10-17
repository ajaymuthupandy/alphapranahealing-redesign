"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/**
 * Mirrors the original "Click to Chat" plugin: fixed bottom-right, same number and greeting.
 * It stays out of the way over the hero and the footer, which both carry their own booking button,
 * so it never sits on top of those calls to action.
 */
export function WhatsAppFloat() {
  const [pastHero, setPastHero] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.querySelector("footer");
    const io = footer ? new IntersectionObserver(([e]) => setFooterInView(e.isIntersecting)) : null;
    if (footer && io) io.observe(footer);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const shown = pastHero && !footerInView;

  return (
    <a
      href={SITE.whatsappChat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      tabIndex={shown ? undefined : -1}
      aria-hidden={shown ? undefined : true}
      className={`group fixed bottom-4 right-4 z-40 flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-[opacity,transform] duration-300 hover:scale-105 md:bottom-6 md:right-6 ${
        shown ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-[3px] bg-white px-3 py-1.5 text-sm text-brand-ink opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100 md:block">
        WhatsApp us
      </span>
    </a>
  );
}
