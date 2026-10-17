// Full article text imported from the original WordPress posts (wp-json), stored as plain blocks.
// Thumbnails reuse photos already in the library, so the blog adds no extra image weight.

import type { Photo } from "@/lib/images";
import { img } from "@/lib/images";
import { POSTS, type Post } from "@/lib/content";
import bodies from "./posts.json";

export type Block = { type: "p" | "h2"; text: string } | { type: "ul"; items: string[] };

const BODIES = bodies as { slug: string; blocks: Block[] }[];

const THUMBS: Record<string, Photo> = {
  "handpan-sound-healing-in-bali": img.bowlChest,
  "sound-healing-in-bali": img.circleGroup2,
  "the-importance-of-waking-up-early-and-starting-the-day-with-meditation": img.yogaBrightStudio,
  "svadhisthana-chakra": img.flowerMandala,
  "muladhara-chakra-the-foundation-of-body-and-daily-life": img.blessingFeet,
  "full-moon-sound-healing-ritual": img.fullMoon,
};

export const fmt = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export type FullPost = Post & { photo: Photo; blocks: Block[] };

export function postPhoto(slug: string): Photo {
  return THUMBS[slug] ?? img.bowlsCloseup;
}

export function getPost(slug: string): FullPost | undefined {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return undefined;
  return { ...post, photo: postPhoto(slug), blocks: BODIES.find((b) => b.slug === slug)?.blocks ?? [] };
}
