"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { brand } from "@/lib/images";
import { NAV, SITE } from "@/lib/site";
import { ChevronIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Expose the real header + footer heights so the closing band (.cta-fit) fills the screen exactly.
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const header = headerRef.current;
    const footer = document.querySelector("footer");
    if (!header || !footer) return;
    const root = document.documentElement;
    const ro = new ResizeObserver(() => {
      root.style.setProperty("--header-h", `${header.offsetHeight}px`);
      root.style.setProperty("--footer-h", `${footer.offsetHeight}px`);
    });
    ro.observe(header, { box: "border-box" });
    ro.observe(footer, { box: "border-box" });
    return () => ro.disconnect();
  }, []);

  // Close menus on route change (state adjusted during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || menuOpen;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ease-(--ease-calm) ${
        menuOpen
          ? "bg-brand py-2"
          : scrolled
            ? "bg-brand/95 py-2 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
            : "py-4"
      }`}
    >
      <a
        href="#content"
        className="sr-only rounded bg-white px-4 py-2 text-brand-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <div className="container-brand flex items-center justify-between gap-6">
        <Link href="/" className="relative z-10 shrink-0" aria-label="Alpha Prana Healing — home">
          <Image
            src={brand.logoWhite}
            alt=""
            className={`h-auto transition-[width] duration-500 ${solid ? "w-14" : "w-[4.5rem] md:w-20"}`}
            sizes="80px"
            preload
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`nav-text px-3 py-2 text-white transition-opacity hover:opacity-80 ${
                        isActive(item.href) ? "underline decoration-sand underline-offset-8" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="-ml-3 flex size-11 items-center justify-center rounded text-white"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      aria-label="Show service pages"
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      <ChevronIcon className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <ul
                    id="services-menu"
                    className={`absolute left-0 top-full w-72 origin-top rounded-[3px] bg-cream p-2 text-brand-ink shadow-[0_18px_40px_-18px_rgba(30,46,44,0.45)] transition-[opacity,transform,visibility] duration-200 ${
                      servicesOpen ? "visible translate-y-1 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`nav-text block whitespace-nowrap rounded-[2px] px-4 py-2.5 font-normal transition-colors hover:bg-sand ${
                            isActive(child.href) ? "font-bold text-brand-dark" : ""
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`nav-text px-3 py-2 text-white transition-opacity hover:opacity-80 ${
                      isActive(item.href) ? "underline decoration-sand underline-offset-8" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`${pathname === "/contact" ? "hidden" : "hidden sm:inline-flex"} rounded-full bg-white px-5 py-2.5 font-sans text-[0.85rem] font-bold uppercase tracking-[1px] text-brand-dark transition-colors hover:bg-sand`}
          >
            Contact us
          </Link>
          <button
            type="button"
            className="relative z-10 flex size-11 items-center justify-center rounded-full text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 -z-0 bg-brand transition-[opacity,visibility] duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-brand flex h-full flex-col overflow-y-auto pb-10 pt-28">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 font-display text-[2rem] font-semibold ${
                    isActive(item.href) && item.href !== "/services" ? "text-sand" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-1 border-l border-white/25 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={isActive(child.href) ? "page" : undefined}
                          className={`block py-1.5 text-lg ${isActive(child.href) ? "text-sand" : "text-white/85"}`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href={SITE.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-white py-3.5 font-sans text-sm font-bold uppercase tracking-[1px] text-brand-dark"
          >
            Book on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
