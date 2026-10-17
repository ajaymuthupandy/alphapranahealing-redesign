import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { POSTS } from "@/lib/content";
import { img } from "@/lib/images";
import { fmt, postPhoto } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on sound healing, chakras, meditation and Balinese healing rituals from Alpha Prana Healing.",
  openGraph: { images: [img.blessingJunglePath.src.src] },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        intro="Reflections on sound healing, chakras, meditation, and Balinese ritual."
        photo={img.blessingJunglePath}
        focus="50% 45%"
      />

      <section className="bg-cream section-y">
        <div className="container-brand">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => {
              const photo = postPhoto(p.slug);
              return (
                <article key={p.slug} className="reveal group flex flex-col">
                  <Link href={`/blog/${p.slug}`} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-[3px] bg-sand">
                    <Image
                      src={photo.src}
                      alt=""
                      placeholder="blur"
                      sizes="(min-width: 1024px) 26rem, (min-width: 640px) 46vw, 100vw"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-(--ease-calm) group-hover:scale-[1.03]"
                    />
                  </Link>
                  <time dateTime={p.date} className="mt-5 text-sm text-brand-dark">
                    {fmt.format(new Date(p.date))}
                  </time>
                  <h2 className="h-item mt-2 text-brand-ink">
                    <Link href={`/blog/${p.slug}`} className="transition-colors hover:text-brand-dark">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[0.98rem] text-brand-ink/80">{p.excerpt}</p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="mt-auto inline-flex min-h-11 items-center self-start pt-3 font-sans text-sm font-bold uppercase tracking-[1px] text-brand-dark"
                  >
                    <span className="link-quiet">Read more</span>
                    <span className="sr-only">: {p.title}</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        variant="banner"
        eyebrow="From reading to feeling"
        title="Ready to experience it for yourself?"
        text="Book a private session with Komang and bring these practices from the page into your body."
        cta="Book a session"
        photo={img.partnerYogaBeach}
        focus="18% 30%"
      />
    </>
  );
}
