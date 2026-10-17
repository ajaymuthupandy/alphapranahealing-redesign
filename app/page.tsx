import Image from "next/image";
import Link from "next/link";
import { ArrowLink, ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { HeroVideo } from "@/components/HeroVideo";
import { Testimonials } from "@/components/Testimonials";
import { SESSIONS, YOGA_STYLES } from "@/lib/content";
import { img } from "@/lib/images";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Founder />
      <YogaFeature />
      <EnergyFeature />
      <BlessingFeature />
      <Testimonials />
      <CtaBand photo={img.heartMandala} focus="50% 38%" cta="Book on WhatsApp" />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-white">
      {/* Media: top band on small screens (so the headline never covers Komang), right-hand 7/12 on desktop. Photo first, background video fades in over it on desktop. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[58svh] overflow-hidden lg:inset-y-0 lg:h-auto lg:left-[calc(max(0px,(100vw-78rem)/2)+2.5rem+(min(100vw,78rem)-5rem)*5/12+2rem)]">
        <Image
          src={img.heroBalanceSea.src}
          alt={img.heroBalanceSea.alt}
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="hero-img object-cover object-[55%_50%] lg:object-[62%_50%]"
        />
        <HeroVideo src={SITE.heroVideoSrc} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(30,46,44,0.5)_0%,rgba(30,46,44,0)_28%,rgba(70,109,104,0)_62%,#466d68_100%)] lg:bg-[linear-gradient(180deg,rgba(30,46,44,0.45)_0%,rgba(30,46,44,0)_24%,rgba(30,46,44,0)_75%,rgba(30,46,44,0.3)_100%)]"
        />
      </div>

      {/* Lotus from the logo, filling the open lower corner of the text panel. */}
      <span aria-hidden="true" className="lotus absolute -bottom-24 -left-28 -z-10 hidden w-[34rem] text-white/[0.06] lg:block" />

      <div className="container-brand pointer-events-none grid min-h-[100svh] items-end pb-12 pt-[50svh] lg:max-h-[60rem] lg:min-h-[min(100svh,56rem)] lg:grid-cols-12 lg:items-center lg:pb-16 lg:pt-32">
        <div className="pointer-events-auto [text-shadow:0_1px_18px_rgba(0,0,0,0.25)] lg:col-span-5 lg:pr-2 lg:[text-shadow:none]">
          <h1 className="h-display hero-in">Return to Balance. Heal From Within.</h1>
          <p className="hero-in-delay mt-5 max-w-md text-[1.05rem] text-white/90 md:text-lg">
            A soulful yoga healing retreat designed to restore your body, calm your mind, and reconnect you with nature.
          </p>
          <div className="hero-in-delay mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink href={SITE.whatsappBooking} variant="sand">
              Reserve your spot
            </ButtonLink>
            <ButtonLink href="/services" variant="outline-light">
              Explore the retreat
            </ButtonLink>
          </div>

          <dl className="hero-in-delay mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-white/20 pt-6">
            <div>
              <dt className="font-display text-xl">Open Online Class</dt>
              <dd className="mt-1 text-sm text-white/75">
                <a
                  href={`https://www.youtube.com/watch?v=${SITE.onlineClassVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet"
                >
                  15 min gentle yoga on YouTube
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-xl">RYT since 2004</dt>
              <dd className="mt-1 text-sm text-white/75">Born and raised in Bali</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="bg-cream section-y" aria-label="Meet Komang Sukerni">
      <div className="container-brand grid items-center gap-10 md:grid-cols-12 md:gap-8">
        <div className="reveal-img relative md:col-span-5 lg:col-span-4">
          <Image
            src={img.komangPrayer.src}
            alt={img.komangPrayer.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 100vw"
            className="aspect-[4/5] w-full rounded-[3px] object-cover object-[50%_30%]"
          />
        </div>
        <div className="reveal relative md:col-span-7 lg:col-span-7 lg:col-start-5 lg:pl-8">
          <h2 className="sr-only">Meet Komang Sukerni</h2>
          <span aria-hidden="true" className="lotus mb-6 w-20 text-brand/70" />
          <p className="font-display text-[1.6rem] leading-[1.35] text-brand-ink md:text-[2rem]">
            Komang Sukerni is the founder of Prana Healing Yoga and a Registered Yoga Teacher (RYT) since 2004.
          </p>
          <p className="mt-5 max-w-xl text-[1.05rem] text-brand-ink/80">
            Born and raised in Bali, her path is guided by devotion, breath, and sacred movement. Through yoga,
            meditation, and traditional healing wisdom, she gently holds space for inner awakening, balance, and deep
            remembrance of the self.
          </p>
          <ArrowLink href="/about" className="mt-7 text-brand-dark">
            About Komang
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

function YogaFeature() {
  return (
    <section className="bg-cream section-b" aria-labelledby="yoga-title">
      <div className="container-brand grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="relative pb-16 lg:col-span-7 lg:pb-20">
          <div className="reveal-img overflow-hidden rounded-[3px]">
            <Image
              src={img.yogaShala.src}
              alt={img.yogaShala.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[6/5] w-full object-cover"
            />
          </div>
          <div className="reveal-img absolute bottom-0 right-0 w-[48%] overflow-hidden rounded-[3px] border-[6px] border-cream md:w-[42%]">
            <Image
              src={img.yogaBrightStudio.src}
              alt={img.yogaBrightStudio.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 22vw, 48vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div className="reveal lg:col-span-5 lg:pl-8">
          <h2 id="yoga-title" className="h-section text-brand-dark">
            Yoga &amp; Movement Sessions
          </h2>
          <p className="mt-5 text-[1.05rem] text-brand-ink/80">
            Private yoga classes tailored to your needs — whether you’re a beginner or seeking deeper practice. Held at
            your accommodation or a space of your choice, they help you connect with breath, alignment, and presence.
          </p>
          <h3 className="mt-8 font-display text-xl text-brand-ink">Included yoga styles</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 text-[0.98rem]">
            {YOGA_STYLES.map((s) => (
              <li key={s} className="border-b border-brand-ink/10 py-2.5">
                {s}
              </li>
            ))}
          </ul>
          <ArrowLink href="/yoga-movement-sessions" className="mt-8 text-brand-dark">
            Learn more<span className="sr-only"> about Yoga &amp; Movement</span>
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

function EnergyFeature() {
  return (
    <section className="overflow-hidden bg-brand-dark section-y text-white" aria-labelledby="energy-title">
      <div className="container-brand grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-5">
          <h2 id="energy-title" className="h-section">
            Sound &amp; Energy Healing
          </h2>
          <p className="mt-5 text-[1.05rem] text-white/75">
            A sacred journey to reconnect with your life force and restore inner harmony. Through breathwork, sound
            healing, chakra balancing, Reiki, and subtle energy work, each session gently clears energetic blockages and
            invites deep relaxation, clarity, and alignment.
          </p>
          <ol className="mt-8 border-t border-white/12">
            {SESSIONS.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/sound-healing#${s.slug}`}
                  className="group flex items-baseline gap-5 border-b border-white/12 py-3 transition-colors hover:text-sand"
                >
                  <span className="w-6 shrink-0 font-display text-sm text-sand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[1rem]">{s.title}</span>
                  <span
                    aria-hidden="true"
                    className="-translate-x-2 text-sand opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <ArrowLink href="/sound-healing" className="mt-8 text-sand">
            Learn more<span className="sr-only"> about Sound &amp; Energy Healing</span>
          </ArrowLink>
        </div>

        {/* Two equal portraits that stretch to the height of the list on desktop, tops and bottoms aligned. */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:col-span-7 lg:grid-rows-[1fr_auto] lg:pl-6">
          {[
            { p: img.komangBowlsPavilion, focus: "object-[50%_55%]" },
            { p: img.bowlsGong, focus: "object-[40%_60%]" },
          ].map(({ p, focus }) => (
            <div key={p.alt} className="reveal-img relative aspect-[3/4] overflow-hidden rounded-[3px] lg:aspect-auto lg:min-h-[24rem]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 28vw, 50vw"
                className={`object-cover ${focus}`}
              />
            </div>
          ))}
          <p className="col-span-2 max-w-md text-white/60">
            Step into stillness, release what no longer serves you, and allow your energy to flow freely once again.
          </p>
        </div>
      </div>
    </section>
  );
}

function BlessingFeature() {
  return (
    <section className="bg-cream section-b" aria-labelledby="blessing-title">
      <div className="relative h-[62vw] max-h-[44rem] min-h-80 overflow-hidden">
        <Image
          src={img.templeWater.src}
          alt={img.templeWater.alt}
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[60%_45%]"
        />
      </div>
      <div className="container-brand grid gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="reveal-img relative -mt-28 hidden lg:col-span-4 lg:block">
          <Image
            src={img.blessingWaterPour.src}
            alt={img.blessingWaterPour.alt}
            placeholder="blur"
            sizes="30vw"
            className="aspect-[3/4] w-full rounded-[3px] border-[6px] border-cream object-cover object-[50%_60%]"
          />
        </div>
        <div className="reveal relative pt-10 md:pt-12 lg:col-span-7 lg:col-start-6 lg:pt-14">
          <h2 id="blessing-title" className="h-section text-brand-dark">
            Balinese Blessing
          </h2>
          <p className="mt-4 text-[1.05rem] text-brand-ink/80">
            Explore the spiritual vibration of Bali — sacred Balinese traditions designed to nurture your spirit.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-t border-brand/40 pt-4">
              <dt className="font-display text-xl text-brand-ink">Water Blessing Ceremonies</dt>
              <dd className="mt-2 text-[0.98rem] text-brand-ink/80">
                A purification ritual held at holy water temples to cleanse energy and renew intention — including
                transportation, sarong, and guided support.
              </dd>
            </div>
            <div className="border-t border-brand/40 pt-4">
              <dt className="font-display text-xl text-brand-ink">Chakra Balancing &amp; Sacred Rituals</dt>
              <dd className="mt-2 text-[0.98rem] text-brand-ink/80">
                Cultivate inner harmony, peace, and emotional openness through guided energy work.
              </dd>
            </div>
          </dl>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <ButtonLink href="/blessing">
              Learn more<span className="sr-only"> about Balinese Blessing</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
