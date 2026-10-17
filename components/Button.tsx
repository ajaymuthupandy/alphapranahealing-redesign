import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "sage" | "sand" | "light" | "outline-light" | "outline";

// Lato bold, uppercase with 1px tracking — the button treatment from the original site.
const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] text-center font-sans font-bold uppercase leading-[1.2] tracking-[1px] transition-[background-color,color,border-color,transform] duration-300 ease-(--ease-calm) active:scale-[0.98]";

const variants: Record<Variant, string> = {
  sage: "bg-brand text-white hover:bg-brand-dark",
  sand: "bg-sand text-brand-ink hover:bg-white",
  light: "bg-white text-brand-dark hover:bg-sand",
  "outline-light": "border border-white/70 text-white hover:bg-white hover:text-brand-dark",
  outline: "border border-brand-dark/40 text-brand-dark hover:border-brand-dark hover:bg-brand-dark hover:text-white",
};

const sizes = {
  md: "min-h-12 px-7 py-3.5 text-[0.9rem]",
  sm: "min-h-10 px-5 py-2.5 text-[0.8rem]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
};

export function ButtonLink({ href, children, variant = "sage", size = "md", className = "" }: Props) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (/^https?:|^tel:|^mailto:/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Understated arrow link for secondary "learn more" style actions. */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const cls = `group inline-flex min-h-11 items-center gap-3 font-sans text-[0.9rem] font-bold uppercase tracking-[1px] ${className}`;
  const inner = (
    <>
      <span className="link-quiet">{children}</span>
      <svg
        viewBox="0 0 24 24"
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
