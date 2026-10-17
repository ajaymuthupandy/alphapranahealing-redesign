import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { ContactComposer } from "@/components/ContactComposer";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { img } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about private sessions, healing work, retreats or spiritual blessings in Bali. WhatsApp +62 878-6012-0011 or email alphayogabali@gmail.com.",
  openGraph: { images: [img.komangMeditationYellow.src.src] },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand text-white">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-5/12 overflow-hidden lg:block">
          <Image
            src={img.komangMeditationYellow.src}
            alt={img.komangMeditationYellow.alt}
            fill
            preload
            placeholder="blur"
            sizes="42vw"
            className="hero-img object-cover object-[50%_40%]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,46,44,0.4)_0%,rgba(30,46,44,0)_25%)]" />
        </div>
        <div className="container-brand grid pb-16 pt-32 md:pb-20 md:pt-40 lg:min-h-[38rem] lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h1 className="h-display hero-in">Get in Touch</h1>
            <p className="hero-in-delay mt-5 max-w-lg text-[1.05rem] text-white/90 md:text-lg">
              Whether you want to inquire about private sessions, healing work, retreats, or spiritual blessings — we’re
              here to support your journey.
            </p>
            <ul className="hero-in-delay mt-7 space-y-1 text-lg">
              <li>
                <a href={SITE.phoneHref} className="inline-flex min-h-11 items-center gap-3 hover:underline">
                  <PhoneIcon className="size-5 text-sand" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex min-h-11 items-center gap-3 break-all hover:underline">
                  <MailIcon className="size-5 shrink-0 text-sand" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <ButtonLink href={SITE.whatsappBooking} variant="sand" className="hero-in-delay mt-9">
              <WhatsAppIcon className="size-5" />
              Message us on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Phones and tablets: the portrait sits below the intro (desktop shows it in the hero's right panel). */}
      <Image
        src={img.komangMeditationYellow.src}
        alt={img.komangMeditationYellow.alt}
        placeholder="blur"
        sizes="(min-width: 1024px) 1px, 100vw"
        className="aspect-[4/3] w-full object-cover object-[50%_45%] lg:hidden"
      />

      <section className="cta-fit flex items-center bg-cream section-y lg:py-10">
        <div className="container-brand grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="reveal lg:col-span-5">
            <h2 className="h-section text-brand-dark">Send an enquiry</h2>
            <p className="mt-4 text-[1.05rem] text-brand-ink/80">
              Fill in the form and it opens WhatsApp with your message ready to send. We’re happy to help you choose the
              best offering for your journey.
            </p>
            <p className="mt-4 text-[1.05rem] text-brand-ink/80">
              Private sessions are held at your accommodation or a space of your choice in Bali, and blessing ceremonies
              include transport to the temple.
            </p>
          </div>
          <div className="reveal lg:col-span-7">
            <ContactComposer />
          </div>
        </div>
      </section>
    </>
  );
}
