import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { SESSIONS } from "@/lib/content";
import type { Photo } from "@/lib/images";
import { gallery, img } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sound & Energy Healing",
  description:
    "Sound & energy healing in Bali: Reiki, chakra balancing, breathwork, aura cleansing, Qi Gong and Tai Chi with singing bowls, and Full Moon sound cleansing.",
  openGraph: { images: [img.bowlSession.src.src] },
};

// Photo pairs placed after specific sessions, mirroring where they sat on the original page.
const INTERLUDES: Record<string, Photo[]> = {
  reiki: [img.bowlSession, img.reikiLying],
  breathwork: [img.breathwork1, img.breathwork2],
  "trauma-release": [img.circleGroup, img.trauma],
  "qi-gong": [img.circleGroup3, img.bowlsCloseup],
};

const HERO = img.pavilionMats;

// The gallery skips photos already shown on this page.
const USED = new Set([HERO, ...Object.values(INTERLUDES).flat()].map((p) => p.src.src));
const GALLERY = gallery.healing.filter((p) => !USED.has(p.src.src));

export default function SoundHealingPage() {
  return (
    <>
      <PageHero
        title="Sound & Energy Healing"
        intro="Breathwork, sound, Reiki, and subtle prana energy work to clear blockages and invite deep relaxation, clarity, and alignment."
        photo={HERO}
        focus="50% 65%"
      >
        <ButtonLink href={SITE.whatsappBookNow} variant="sand">
          Book now<span className="sr-only"> — Sound &amp; Energy Healing</span>
        </ButtonLink>
      </PageHero>

      <section className="bg-cream section-y">
        <div className="container-brand grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-12 lg:gap-10">
          <nav aria-label="Sessions" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="font-display text-lg text-brand-ink">Sessions</p>
              <ol className="mt-4 space-y-1 border-l border-brand-ink/15">
                {SESSIONS.map((s, i) => (
                  <li key={s.slug}>
                    <a
                      href={`#${s.slug}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[0.92rem] leading-snug text-brand-ink/70 transition-colors hover:border-brand hover:text-brand-dark"
                    >
                      <span className="mr-2 text-brand">{i + 1}.</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* Phones: a swipeable index of the nine sessions, so nobody has to scroll the whole page to find one. */}
          <nav aria-label="Sessions" className="-mx-5 -mb-4 min-w-0 lg:hidden">
            <ol className="flex snap-x gap-2 overflow-x-auto px-5 pb-2">
              {SESSIONS.map((s, i) => (
                <li key={s.slug} className="shrink-0 snap-start">
                  <a
                    href={`#${s.slug}`}
                    className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border border-brand-ink/20 px-4 text-sm text-brand-dark"
                  >
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg:col-span-9 [&>*:last-child]:pb-0">
            {SESSIONS.map((s, i) => (
              <Fragment key={s.slug}>
                <article
                  id={s.slug}
                  className={`reveal grid gap-6 border-brand-ink/15 py-10 md:grid-cols-9 md:gap-8 ${i === 0 ? "pt-0" : "border-t"}`}
                >
                  <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
                    <span className="font-display text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="h-item mt-1 text-brand-dark">{s.title}</h2>
                    <p className="mt-3 text-[1.05rem] leading-relaxed text-brand-ink">{s.lead}</p>
                    <div className="mt-6 hidden md:block">
                      <ButtonLink href={SITE.whatsappBookNow}>
                        Book now<span className="sr-only"> — {s.title}</span>
                      </ButtonLink>
                    </div>
                  </div>
                  <div className="space-y-4 text-[1.05rem] text-brand-ink/85 md:col-span-5">
                    {s.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {s.benefits && (
                      <>
                        <p className="pt-1 font-bold text-brand-ink">{s.benefitsIntro}:</p>
                        <ul className="space-y-1.5">
                          {s.benefits.map((b) => (
                            <li key={b} className="flex gap-3">
                              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <p className="font-display text-lg text-brand-dark">{s.closing}</p>
                    <ButtonLink href={SITE.whatsappBookNow} className="md:hidden">
                      Book now<span className="sr-only"> — {s.title}</span>
                    </ButtonLink>
                  </div>
                </article>
                {INTERLUDES[s.slug] && (
                  <div className="grid grid-cols-5 gap-4 pb-10">
                    {INTERLUDES[s.slug].map((p, j) => (
                      <div
                        key={p.alt}
                        className={`reveal-img relative overflow-hidden rounded-[3px] ${j === 0 ? "col-span-3 aspect-[4/3]" : "col-span-2"}`}
                      >
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          placeholder="blur"
                          sizes="(min-width: 1024px) 35vw, 60vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <Gallery photos={GALLERY} />
      <CtaBand
        title="Ready to feel lighter?"
        text="Tell us which session calls to you, and we’ll find a time that suits your stay in Bali."
        cta="Book a session"
        photo={img.fullMoon}
        focus="50% 55%"
      />
    </>
  );
}
