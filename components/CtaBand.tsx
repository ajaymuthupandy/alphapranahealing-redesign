import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/lib/images";
import { img } from "@/lib/images";
import { SITE } from "@/lib/site";
import { ButtonLink } from "./Button";

type Variant = "split" | "immersive" | "arch" | "banner";

type Props = {
  variant?: Variant;
  eyebrow?: string;
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
  photo?: Photo;
  focus?: string;
};

const eyebrowCls = "font-sans text-[0.8rem] font-bold uppercase tracking-[3px]";

/**
 * Closing invitation used across pages — the original "Give yourself permission to pause." block.
 * Variants give each page its own ending while sitting flush on the footer:
 *   split     — text left, photo right (default)
 *   immersive — full-bleed photo with centred text (About)
 *   arch      — temple-arch photo rising from the footer, with service shortcuts (Services)
 *   banner    — compact horizontal band with a round portrait (Blog)
 */
export function CtaBand({
  variant = "split",
  eyebrow,
  title = "Give yourself permission to pause.",
  text = "Join us for a healing retreat that invites softness, presence, and renewal.",
  cta = "Book on WhatsApp",
  href = SITE.whatsappBooking,
  photo = img.partnerYogaBeach,
  focus = "35% 50%",
}: Props) {
  if (variant === "immersive") {
    return (
      <section className="cta-fit relative isolate flex items-center overflow-hidden bg-brand-ink py-20 text-white lg:py-12">
        <Image
          src={photo.src}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover"
          style={{ objectPosition: focus }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/90 via-brand-dark/70 to-brand-dark/45" />
        <span
          aria-hidden="true"
          className="lotus absolute top-1/2 left-1/2 -z-10 w-[34rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 text-white/[0.06]"
        />
        <div className="container-brand reveal text-center">
          {eyebrow && <p className={`${eyebrowCls} text-sand`}>{eyebrow}</p>}
          <h2 className="h-section mx-auto mt-4 max-w-3xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={href} variant="light">
              {cta}
            </ButtonLink>
            <ButtonLink href="/services" variant="outline-light">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "arch") {
    const links = [
      { label: "Yoga & Movement", href: "/yoga-movement-sessions" },
      { label: "Sound & Energy Healing", href: "/sound-healing" },
      { label: "Balinese Blessing", href: "/blessing" },
    ];
    return (
      <section className="cta-fit relative isolate flex overflow-hidden bg-brand-dark text-white">
        <span aria-hidden="true" className="lotus absolute -top-10 -right-20 -z-10 w-96 text-white/[0.05] md:w-[30rem]" />
        <div className="container-brand grid items-end gap-10 pt-14 md:grid-cols-12 md:gap-12 lg:pt-12">
          <div className="reveal self-center md:order-2 md:col-span-7 md:col-start-6 md:pb-14 lg:pb-12">
            {eyebrow && <p className={`${eyebrowCls} text-sand`}>{eyebrow}</p>}
            <h2 className="h-section mt-4">{title}</h2>
            <p className="mt-4 max-w-lg text-lg text-white/80">{text}</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-11 items-center rounded-full border border-white/35 px-4 text-sm transition-colors hover:border-sand hover:bg-sand hover:text-brand-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href={href} variant="sand" className="mt-8">
              {cta}
            </ButtonLink>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[18rem] self-end overflow-hidden rounded-t-full border-x-[6px] border-t-[6px] border-sand/90 md:order-1 md:col-span-5 md:max-w-[22rem] lg:aspect-auto lg:h-[clamp(19rem,calc(100svh-26rem),30rem)]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 22rem, 18rem"
              className="reveal-img object-cover"
              style={{ objectPosition: focus }}
            />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "banner") {
    return (
      <section className="cta-fit relative isolate flex items-center overflow-hidden bg-brand py-12 text-white md:py-14">
        <Image
          src={img.bowlsCloseup.src}
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-[0.18] mix-blend-luminosity"
        />
        <span aria-hidden="true" className="lotus absolute top-1/2 -right-16 -z-10 w-80 -translate-y-1/2 text-white/[0.07] md:w-[26rem]" />
        <div className="container-brand reveal flex w-full flex-col items-center gap-8 text-center md:flex-row md:text-left lg:gap-12">
          <div className="relative size-36 shrink-0 overflow-hidden rounded-full ring-4 ring-sand ring-offset-4 ring-offset-brand md:size-40 lg:size-48">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              placeholder="blur"
              sizes="12rem"
              className="object-cover"
              style={{ objectPosition: focus }}
            />
          </div>
          <div className="flex-1">
            {eyebrow && <p className={`${eyebrowCls} text-sand`}>{eyebrow}</p>}
            <h2 className="mt-2 text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)]">{title}</h2>
            <p className="mt-3 max-w-xl text-white/85">{text}</p>
          </div>
          <ButtonLink href={href} variant="light" className="shrink-0">
            {cta}
          </ButtonLink>
        </div>
      </section>
    );
  }

  return (
    <section className="cta-fit relative isolate grid overflow-hidden bg-brand text-white md:grid-cols-2">
      <span aria-hidden="true" className="lotus absolute -bottom-16 -left-16 -z-10 w-80 text-white/[0.07] md:w-[26rem]" />
      <div className="relative min-h-72 overflow-hidden md:order-2 md:min-h-[30rem] lg:min-h-0">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="reveal-img object-cover"
          style={{ objectPosition: focus }}
        />
      </div>
      <div className="flex items-center">
        <div className="reveal w-full px-5 py-14 md:py-16 md:pr-12 md:pl-[max(2.5rem,calc((100vw-78rem)/2+2.5rem))] lg:py-12">
          <h2 className="h-section">{title}</h2>
          <p className="mt-4 max-w-md text-lg text-white/85">{text}</p>
          <ButtonLink href={href} variant="light" className="mt-8">
            {cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
