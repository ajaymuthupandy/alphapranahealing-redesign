import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { POSTS } from "@/lib/content";
import { fmt, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt.replace(/…$/, ""),
    openGraph: { type: "article", publishedTime: post.date, images: [post.photo.src.src] },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        intro={<time dateTime={post.date}>{fmt.format(new Date(post.date))}</time>}
        photo={post.photo}
        focus="50% 50%"
        compact
      />

      <article className="bg-cream section-y">
        <div className="container-brand">
          <div className="mx-auto max-w-2xl text-[1.05rem] text-brand-ink/85">
            {post.blocks.map((b, i) =>
              b.type === "h2" ? (
                <h2 key={i} className="h-item mt-10 text-brand-dark first:mt-0">
                  {b.text}
                </h2>
              ) : b.type === "ul" ? (
                <ul key={i} className="mt-5 space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.75em] size-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={i} className="mt-5 first:mt-0">
                  {b.text}
                </p>
              ),
            )}
            <ArrowLink href="/blog" className="mt-10 text-brand-dark">
              All articles
            </ArrowLink>
          </div>
        </div>
      </article>

      <CtaBand
        variant="banner"
        eyebrow="From reading to feeling"
        title="Ready to experience it for yourself?"
        text="Book a private session with Komang and bring these practices from the page into your body."
        cta="Book a session"
        photo={post.photo}
      />
    </>
  );
}
