import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { YOGA_CLASSES } from "@/lib/content";
import { gallery, img } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yoga & Movement Sessions",
  description:
    "Hatha, Gentle, Vinyasa Flow, Power, Yin, Laughter, Private Couple and Chakra Healing Yoga in Bali — guided intuitively by Komang Sukerni.",
  openGraph: { images: [img.yogaGarden.src.src] },
};

// The gallery skips photos already shown on this page.
const USED = new Set([img.yogaGarden, img.yogaHandstand, img.yogaHeadstand].map((p) => p.src.src));
const GALLERY = gallery.yoga.filter((p) => !USED.has(p.src.src));

export default function YogaPage() {
  return (
    <>
      <PageHero
        title="Yoga & Movement Sessions"
        intro="Step onto the mat, breathe into presence, and allow your practice to become a journey of healing and self-discovery."
        photo={img.yogaGarden}
        focus="50% 45%"
      >
        <ButtonLink href={SITE.whatsappBookNow} variant="sand">
          Book now<span className="sr-only"> — Yoga &amp; Movement</span>
        </ButtonLink>
      </PageHero>

      <section className="bg-cream section-y">
        <div className="container-brand grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="font-display text-[1.6rem] leading-[1.35] text-brand-ink md:text-[1.9rem]">
              Our yoga classes are sacred spaces for self-connection, healing, and inner alignment.
            </p>
            <div className="mt-6 space-y-4 text-[1.05rem] text-brand-ink/80">
              <p>
                Rooted in mindful movement, breath awareness, and energetic presence, each session invites you to move
                with intention, release stored tension, and restore harmony within body, mind, and spirit.
              </p>
              <p>
                Every class is guided intuitively, honoring your personal rhythm — moving meditations that awaken your
                life force and deepen your connection to yourself.
              </p>
            </div>
            <Image
              src={img.yogaHandstand.src}
              alt={img.yogaHandstand.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="reveal-img mt-10 hidden aspect-[4/5] max-h-[calc(100svh-30rem)] min-h-64 w-full rounded-[3px] object-cover lg:block"
            />
          </div>

          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
            {YOGA_CLASSES.map((c, i) => (
              <li key={c.slug} id={c.slug} className="reveal border-t border-brand-ink/15 py-7">
                <span className="font-display text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="h-item mt-1 text-brand-dark">{c.title}</h2>
                <p className="mt-3 text-[0.98rem] text-brand-ink/80">{c.body}</p>
                <p className="mt-3 font-display text-[1.05rem] text-brand-ink">{c.invite}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Gallery photos={GALLERY} />
      <CtaBand
        title="Roll out your mat with Komang."
        text="Private sessions at your villa, hotel, or a space of your choice — for beginners and seasoned yogis alike."
        cta="Book a yoga session"
        photo={img.yogaHeadstand}
        focus="50% 60%"
      />
    </>
  );
}
