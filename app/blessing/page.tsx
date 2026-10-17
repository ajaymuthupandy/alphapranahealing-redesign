import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { BLESSING_EXPERIENCES, BLESSING_FOR } from "@/lib/content";
import { gallery, img } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Balinese Blessing",
  description:
    "Balinese Blessing (Purevacation) — a fully guided spiritual journey in Bali: Melukat water purification, temple blessings, nature healing walks, sound healing and private energy work.",
  openGraph: { images: [img.templeWater.src.src] },
};

// The gallery skips photos already shown on this page.
const USED = new Set([img.blessingRice, img.blessingPriest].map((p) => p.src.src));
const GALLERY = gallery.blessing.filter((p) => !USED.has(p.src.src));

export default function BlessingPage() {
  return (
    <>
      <PageHero
        title="Balinese Blessing"
        intro="Explore the spiritual vibration of Bali — sacred traditions designed to nurture your spirit."
        photo={img.templeWater}
        focus="58% 45%"
      >
        <ButtonLink href={SITE.whatsappBookNow} variant="sand">
          Book now<span className="sr-only"> — Balinese Blessing</span>
        </ButtonLink>
      </PageHero>

      {/* Intro */}
      <section className="bg-cream section-y">
        <div className="container-brand grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="reveal lg:col-span-6">
            <h2 className="h-section text-brand-dark">Blessings &amp; Spiritual Rituals</h2>
            <p className="mt-3 font-display text-xl text-brand">A Sacred Journey to Reconnect With Your Inner Self</p>
            <div className="mt-6 max-w-xl space-y-4 text-[1.05rem] text-brand-ink/85">
              <p>
                Our Balinese Blessing programme, <strong>Purevacation</strong>, is a curated spiritual exploration
                for travelers who seek more than a holiday — those longing for renewal, clarity, and a deeper connection with themselves.
              </p>
              <p>
                Guided by local healers and spiritual practitioners, you’ll experience ancient purification rituals,
                sacred temples, healing landscapes, and the powerful energy of Bali — each moment crafted to help you
                release emotional weight and realign with your higher vibration.
              </p>
              <p className="font-display text-lg text-brand-dark">
                Not just a retreat — a spiritual adventure, a healing escape, and a cultural immersion all in one.
              </p>
            </div>
            <ButtonLink href={SITE.whatsappBookNow} className="mt-8">
              Book now<span className="sr-only"> — Balinese Blessing</span>
            </ButtonLink>
          </div>
          <div className="relative lg:col-span-5 lg:col-start-8">
            <Image
              src={img.yogaWaterfall.src}
              alt={img.yogaWaterfall.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="reveal-img aspect-[4/5] w-full rounded-[3px] object-cover object-[50%_60%]"
            />
          </div>
        </div>
      </section>

      {/* What you will experience */}
      <section className="bg-brand-dark section-y text-white" aria-labelledby="experience-title">
        <div className="container-brand grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 id="experience-title" className="h-section reveal">
              What You Will Experience
            </h2>
            <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {BLESSING_EXPERIENCES.map((e, i) => (
                <li key={e.title} className="reveal border-t border-white/15 py-6 sm:last:odd:col-span-2">
                  <span className="font-display text-sm text-sand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-display text-xl">{e.title}</h3>
                  <p className="mt-2 text-[0.97rem] text-white/70">{e.body}</p>
                </li>
              ))}
            </ol>
          </div>
          {/* Two portraits at a natural 3:4 ratio (no stretching), so faces are never cropped away. */}
          <div className="hidden content-start gap-4 lg:col-span-5 lg:grid lg:grid-cols-2 lg:pt-24">
            <div className="reveal-img relative aspect-[3/4] overflow-hidden rounded-[3px]">
              <Image
                src={img.blessingRice.src}
                alt={img.blessingRice.alt}
                fill
                placeholder="blur"
                sizes="20vw"
                className="object-cover object-[60%_30%]"
              />
            </div>
            <div className="reveal-img relative mt-24 aspect-[3/4] overflow-hidden rounded-[3px]">
              <Image
                src={img.blessingPriest.src}
                alt={img.blessingPriest.alt}
                fill
                placeholder="blur"
                sizes="20vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for + fully guided */}
      <section className="bg-sand section-y">
        <div className="container-brand grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-7">
            <h2 className="h-section text-brand-dark">Who This Program Is For</h2>
            <p className="mt-4 text-[1.05rem] text-brand-ink/80">This programme is perfect for individuals who want to:</p>
            <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {BLESSING_FOR.map((b) => (
                <li key={b} className="flex gap-3 border-b border-brand-ink/10 py-3 text-[1rem]">
                  <svg viewBox="0 0 24 24" className="mt-1 size-4 shrink-0 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="reveal self-start rounded-[3px] bg-brand p-8 text-white md:p-10 lg:col-span-5 lg:mt-2">
            <h3 className="font-display text-2xl">The Journey Is Fully Guided</h3>
            <p className="mt-3 text-white/85">
              You won’t explore alone. A healer or spiritual guide will accompany you throughout the experience —
              ensuring you feel safe, grounded, and supported in every step.
            </p>
            <ButtonLink href={SITE.whatsappBookNow} variant="light" className="mt-7">
              Book now<span className="sr-only"> — Balinese Blessing</span>
            </ButtonLink>
          </aside>
        </div>
      </section>

      <Gallery photos={GALLERY} />
    </>
  );
}
