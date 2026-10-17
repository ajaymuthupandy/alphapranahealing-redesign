import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink, ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SESSIONS, YOGA_STYLES } from "@/lib/content";
import type { Photo } from "@/lib/images";
import { img } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Private yoga and movement sessions, sound and energy healing, and Balinese water blessings with Alpha Prana Healing in Bali.",
  openGraph: { images: [img.bowlBlessing.src.src] },
};

type Row = {
  id: string;
  label: string;
  title: string;
  text: string[];
  listTitle?: string;
  list: string[];
  href: string;
  photos: [Photo, Photo];
  tone: string;
};

const ROWS: Row[] = [
  {
    id: "yoga",
    label: "Yoga & Movement",
    title: "Yoga & Movement Sessions",
    text: [
      "Private yoga classes tailored to your needs — whether you’re a beginner or seeking deeper practice. Held at your accommodation or a space of your choice, they help you connect with breath, alignment, and presence.",
    ],
    listTitle: "Included yoga styles",
    list: YOGA_STYLES,
    href: "/yoga-movement-sessions",
    photos: [img.yogaAdjust, img.yogaAssist],
    tone: "bg-cream",
  },
  {
    id: "energy",
    label: "Sound & Energy Healing",
    title: "Sound & Energy Healing",
    text: [
      "A sacred journey to reconnect with your life force and restore inner harmony. Through breathwork, sound healing, chakra balancing, Reiki, and subtle energy work, each session gently clears energetic blockages.",
      "Step into stillness, release what no longer serves you, and allow your energy to flow freely once again.",
    ],
    list: SESSIONS.map((s) => s.title),
    href: "/sound-healing",
    photos: [img.singingBowlsMat, img.circleGroup2],
    tone: "bg-sand",
  },
  {
    id: "blessing",
    label: "Balinese Blessing",
    title: "Balinese Blessing",
    text: ["Explore the spiritual vibration of Bali — sacred Balinese traditions designed to nurture your spirit."],
    list: [
      "Water Blessing Ceremonies — a purification ritual at holy water temples to cleanse energy and renew intention (including transportation, sarong, and guided support).",
      "Chakra Balancing & Sacred Rituals — cultivate inner harmony, peace, and emotional openness through guided energy work.",
    ],
    href: "/blessing",
    photos: [img.blessingWhitePrayer, img.blessingLaughing],
    tone: "bg-cream",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        intro="Private yoga, sound and energy healing, and sacred Balinese blessings — guided by Komang Sukerni."
        photo={img.bowlBlessing}
        focus="50% 35%"
      >
        {ROWS.map((r) => (
          <a
            key={r.id}
            href={`#${r.id}`}
            className="inline-flex min-h-11 items-center rounded-full border border-white/50 px-4 text-sm text-white transition-colors hover:bg-white hover:text-brand-dark"
          >
            {r.label}
          </a>
        ))}
      </PageHero>

      {ROWS.map((r, i) => (
        <ServiceRow key={r.id} row={r} flip={i % 2 === 1} />
      ))}

      <CtaBand
        variant="arch"
        eyebrow="Not sure where to begin?"
        title="Let Komang guide you to the right session."
        text="Tell us how you’re feeling and what you hope for — we’ll suggest the practice that suits you best."
        cta="Ask us on WhatsApp"
        photo={img.blessingSpring}
        focus="50% 40%"
      />
    </>
  );
}

function ServiceRow({ row, flip }: { row: Row; flip: boolean }) {
  const [main, second] = row.photos;
  return (
    <section id={row.id} className={`${row.tone} section-y`} aria-labelledby={`${row.id}-title`}>
      <div className="container-brand grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className={`relative grid grid-cols-5 gap-4 md:gap-5 lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}>
          <div className="reveal-img col-span-3 overflow-hidden rounded-[3px]">
            <Image
              src={main.src}
              alt={main.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 34vw, 60vw"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-end">
            <div className="reveal-img overflow-hidden rounded-[3px]">
              <Image
                src={second.src}
                alt={second.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 23vw, 40vw"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className={`reveal lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}>
          <h2 id={`${row.id}-title`} className="h-section text-brand-dark">
            {row.title}
          </h2>
          <div className="mt-5 space-y-4 text-[1.05rem] text-brand-ink/80">
            {row.text.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          {row.listTitle && <h3 className="mt-7 font-display text-xl text-brand-ink">{row.listTitle}</h3>}
          <ul
            className={`mt-3 text-[0.98rem] ${row.list.length > 4 ? "grid gap-x-6 sm:grid-cols-2" : "space-y-1"}`}
          >
            {row.list.map((l) => (
              <li key={l} className="border-b border-brand-ink/10 py-2.5">
                {l}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href={row.href}>
              Learn more<span className="sr-only"> about {row.label}</span>
            </ButtonLink>
            <ArrowLink href={SITE.whatsappBookNow} className="text-brand-dark">
              Book now<span className="sr-only"> — {row.label}</span>
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
