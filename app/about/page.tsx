import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Komang Sukerni (Sinta), founder of Prana Healing Yoga — a Balinese Registered Yoga Teacher since 2004, raised in traditional ceremonial wisdom.",
  openGraph: { images: [img.komangPortrait.src.src] },
};

const TEACHINGS = [
  "Mindful movement & breath",
  "Energetic balance",
  "Spiritual presence",
  "Inner peace through self-acceptance and awareness",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        intro="Balinese-born, raised in ceremonial wisdom, and teaching yoga and healing since 2004."
        photo={img.komangMeditationBowls}
        focus="50% 6%"
      />

      <section className="bg-cream section-y">
        <div className="container-brand grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="reveal-img md:col-span-5 lg:col-span-4">
            <Image
              src={img.komangPortrait.src}
              alt={img.komangPortrait.alt}
              placeholder="blur"
              sizes="(min-width: 768px) 38vw, 100vw"
              className="aspect-[3/4] w-full rounded-[3px] object-cover md:sticky md:top-28"
            />
          </div>
          <div className="reveal md:col-span-7 lg:col-span-7 lg:col-start-6">
            <h2 className="h-section text-brand-dark">About Komang Sukerni</h2>
            <p className="mt-2 font-display text-xl text-brand">Founder &amp; Lead Guide — Prana Healing Yoga</p>
            <div className="mt-7 max-w-2xl space-y-5 text-[1.05rem] text-brand-ink/85">
              <p>
                Komang Sukerni — affectionately known as Sinta — is the founder and heart of Prana Healing Yoga. Born in
                Singaraja, Bali, she was raised with traditional Balinese ceremonial wisdom passed down from her father
                and grandfather, both Hindu mangkus (priests). Her calling emerged early: to guide others toward
                balance, inner harmony, and soulful presence.
              </p>
              <p>
                A Registered Yoga Teacher (RYT) since 2004, Komang has devoted over two decades to teaching and healing.
                Her approach blends mindful yoga, breathwork, meditation, and sacred rituals — all grounded in prana, the
                Sanskrit word for life force.
              </p>
              <p>
                For Komang, yoga is a path to presence and self-acceptance. She encourages every student to meet
                themselves with compassion — releasing emotional blockages, calming the nervous system, and opening the
                heart. Today she welcomes students from around the world to private classes, group practices, and sacred
                water blessings across Bali.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand section-y text-white">
        <figure className="container-brand reveal grid gap-6 lg:grid-cols-12">
          <span aria-hidden="true" className="font-display text-8xl leading-[0.7] text-sand lg:col-span-1">
            “
          </span>
          <div className="lg:col-span-10">
            <blockquote className="font-display text-[1.75rem] leading-[1.3] md:text-[2.5rem]">
              True healing begins when we return to the present moment — the only place where life truly unfolds.
            </blockquote>
            <figcaption className="mt-6 text-white/80">— Komang Sukerni</figcaption>
          </div>
        </figure>
      </section>

      <section className="bg-sand section-y">
        <div className="container-brand">
          <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="h-section text-brand-dark lg:col-span-5">Her teachings emphasize</h2>
            <p className="max-w-xl text-[1.05rem] text-brand-ink/80 lg:col-span-6 lg:col-start-7">
              At the core of Komang’s work is the belief that we are not separate from life’s energy — we are it.
            </p>
          </div>
          <ol className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEACHINGS.map((t, i) => (
              <li key={t} className="reveal border-t border-brand-ink/20 py-5">
                <span className="font-display text-base text-brand">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-display text-xl leading-snug text-brand-ink">{t}</p>
              </li>
            ))}
          </ol>
          <ButtonLink href="/services" className="mt-8">
            Explore services
          </ButtonLink>
        </div>
      </section>

      <CtaBand
        variant="immersive"
        eyebrow="Begin your journey"
        title="Practise with Komang."
        text="Private yoga, healing sessions and sacred water blessings across Bali."
        photo={img.flowerMandala}
        focus="50% 78%"
      />
    </>
  );
}
