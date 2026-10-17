import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-brand pb-16 pt-32 text-white">
      <div className="container-brand">
        <h1 className="h-display">This path has wandered off.</h1>
        <p className="mt-4 max-w-md text-lg text-white/85">The page you’re looking for isn’t here.</p>
        <ButtonLink href="/" variant="sand" className="mt-8">
          Return home
        </ButtonLink>
      </div>
    </section>
  );
}
