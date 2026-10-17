import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/lib/images";

type Props = {
  title: string;
  intro?: ReactNode;
  photo: Photo;
  /** CSS object-position, chosen per image to protect the subject. */
  focus?: string;
  /** Smaller title size for long titles (blog posts). */
  compact?: boolean;
  children?: ReactNode;
};

/** Image-led page opener for inner pages: compact (not full-screen), text anchored low-left. */
export function PageHero({ title, intro, photo, focus = "50% 50%", compact = false, children }: Props) {
  return (
    <section className="relative isolate flex min-h-[26rem] items-end overflow-hidden bg-brand-dark text-white md:min-h-[32rem] lg:min-h-[36rem]">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="hero-img -z-10 object-cover"
        style={{ objectPosition: focus }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(30,46,44,0.55)_0%,rgba(30,46,44,0.05)_35%,rgba(30,46,44,0.15)_55%,rgba(30,46,44,0.75)_100%)]"
      />
      <div className="container-brand pb-12 pt-32 md:pb-16">
        <h1 className={`${compact ? "h-section max-w-4xl" : "h-display max-w-3xl"} hero-in`}>{title}</h1>
        {intro && <div className="hero-in-delay mt-4 max-w-xl text-[1.05rem] text-white/90 md:text-lg">{intro}</div>}
        {children && <div className="hero-in-delay mt-7 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
