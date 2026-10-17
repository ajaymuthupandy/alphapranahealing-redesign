import { TESTIMONIALS } from "@/lib/content";

/**
 * Editorial wall instead of a carousel: the long-form review leads (shortened, with the full text one tap away),
 * the rest sit in an even grid of real reviews so every voice is visible at once.
 */
export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="bg-sand section-y" aria-labelledby="testimonials-title">
      <div className="container-brand">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-4">
            <h2 id="testimonials-title" className="h-section text-brand-dark">
              Testimonials
            </h2>
            <span aria-hidden="true" className="lotus mt-8 hidden w-44 text-brand/25 lg:block" />
          </div>
          <figure className="reveal relative lg:col-span-8">
            <span
              aria-hidden="true"
              className="absolute -left-1 -top-6 font-display text-7xl leading-none text-brand/50 md:-left-10 md:-top-3"
            >
              “
            </span>
            <blockquote className="font-sans text-[1.05rem] leading-[1.85] text-brand-ink/90 md:text-[1.15rem]">
              {featured.lead ?? featured.quote}
            </blockquote>
            {featured.lead && (
              <details className="group mt-3">
                <summary className="inline-flex min-h-11 cursor-pointer list-none items-center font-sans text-sm font-bold uppercase tracking-[1px] text-brand-dark [&::-webkit-details-marker]:hidden">
                  <span className="link-quiet group-open:hidden">Read the full review</span>
                  <span className="link-quiet hidden group-open:inline">Show less</span>
                </summary>
                <p className="mt-2 text-[0.98rem] leading-[1.8] text-brand-ink/85">{featured.quote}</p>
              </details>
            )}
            <figcaption className="mt-4 font-display text-xl text-brand-ink">— {featured.name}</figcaption>
          </figure>
        </div>

        {/* Swipeable row on phones; an even grid (2 then 4 columns, so rows always fill) from tablet up. */}
        <div
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-14 lg:grid-cols-4"
          aria-label="More reviews"
          role="region"
        >
          {rest.map((t) => (
            <figure
              key={t.name}
              className="flex w-[82%] shrink-0 snap-start flex-col rounded-[3px] bg-cream/70 p-6 ring-1 ring-brand-ink/5 sm:w-auto"
            >
              {/* Reviews written in Indonesian are shown in English, with the original one tap away. */}
              <blockquote className="font-sans text-[0.95rem] leading-[1.75] text-brand-ink/90">
                {t.translation ?? t.quote}
              </blockquote>
              {t.translation && (
                <details className="mt-2 text-sm text-brand-ink/70">
                  <summary className="cursor-pointer">Translated from Indonesian</summary>
                  <p lang="id" className="mt-1 italic">
                    {t.quote}
                  </p>
                </details>
              )}
              <figcaption className="mt-auto pt-4 font-display text-lg text-brand-dark">{t.name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-sm text-brand-ink/70 sm:hidden" aria-hidden="true">
          Swipe for more reviews →
        </p>
      </div>
    </section>
  );
}
