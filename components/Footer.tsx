import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/images";
import { FOOTER_LINKS, SITE } from "@/lib/site";
import { ButtonLink } from "./Button";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";

/** Compact footer: brand + links + contact in one band. Links use the header's .nav-text family, a step smaller. */
export function Footer() {
  return (
    <footer className="bg-sand text-brand-ink">
      <div className="container-brand grid gap-6 py-7 md:grid-cols-12 md:gap-8 md:py-8">
        <div className="flex gap-5 md:col-span-6 lg:col-span-4">
          <Link href="/" aria-label="Alpha Prana Healing — home" className="shrink-0">
            <Image src={brand.logoTeal} alt="" className="h-auto w-16 md:w-[4.5rem]" sizes="72px" />
          </Link>
          <p className="max-w-sm text-[0.9rem] leading-normal text-brand-ink/80">
            <strong className="text-brand-ink">Prana Healing Yoga</strong> is a sacred space guided by Komang Sukerni, a
            Registered Yoga Teacher (RYT) since 2004. Rooted in Balinese wisdom, yoga, breath, and healing practices, we
            hold space for deep restoration, balance, and soulful connection.
          </p>
        </div>

        {/* Column flow: Pages on the left, Services on the right. */}
        <nav aria-label="Footer" className="md:col-span-6 lg:col-span-5">
          <ul className="nav-text grid grid-flow-col grid-rows-4 gap-x-6 text-base leading-snug text-brand-dark xl:text-base">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-11 items-center transition-colors hover:text-brand md:min-h-9">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-1 text-[0.9rem] md:col-span-12 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-4 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:gap-1">
          <a href={SITE.phoneHref} className="inline-flex min-h-11 items-center gap-2.5 hover:text-brand md:min-h-9">
            <PhoneIcon className="size-4 shrink-0 text-brand" />
            {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="inline-flex min-h-11 items-center gap-2.5 break-all hover:text-brand md:min-h-9">
            <MailIcon className="size-4 shrink-0 text-brand" />
            {SITE.email}
          </a>
          <ButtonLink href={SITE.whatsappBooking} size="sm" className="mt-2 self-start whitespace-nowrap md:mt-0 lg:mt-2">
            <WhatsAppIcon className="size-4" />
            Book appointment
          </ButtonLink>
        </div>
      </div>
      <div className="border-t border-brand/15">
        <p className="container-brand py-3 text-center text-[0.8rem] text-brand-ink/70">
          Copyright © 2026 Alpha Prana Healing - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
