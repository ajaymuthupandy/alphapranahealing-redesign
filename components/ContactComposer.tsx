"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const INTERESTS = [
  "Private yoga session",
  "Sound & energy healing",
  "Balinese blessing",
  "Healing retreat",
  "Something else",
];

/**
 * The original page offered "Or fill this form" but rendered no working form.
 * Rather than inventing a backend, this composes the enquiry and hands it to WhatsApp —
 * the booking channel the business already uses.
 */
export function ContactComposer() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Hello Sis, my name is ${String(data.get("name")).trim()}.`,
      `I'm interested in: ${data.get("interest")}.`,
      String(data.get("dates") || "").trim() && `Dates / stay: ${String(data.get("dates")).trim()}`,
      String(data.get("message") || "").trim(),
    ].filter(Boolean);
    window.open(`${SITE.whatsappBookNow}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-[3px] border border-brand-ink/20 bg-white/70 px-4 py-3 text-[1rem] text-brand-ink placeholder:text-brand-ink/40 transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="block text-[0.95rem] font-bold text-brand-ink">
        Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block text-[0.95rem] font-bold text-brand-ink">
        I’m interested in
        <select name="interest" className={field} defaultValue={INTERESTS[0]}>
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label className="block text-[0.95rem] font-bold text-brand-ink sm:col-span-2">
        Preferred dates or where you’re staying <span className="font-normal text-brand-ink/60">(optional)</span>
        <input name="dates" className={field} />
      </label>
      <label className="block text-[0.95rem] font-bold text-brand-ink sm:col-span-2">
        Message <span className="font-normal text-brand-ink/60">(optional)</span>
        <textarea name="message" rows={4} className={`${field} resize-y lg:h-28`} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center gap-2.5 rounded-[3px] bg-brand px-7 py-3.5 font-sans text-[0.9rem] font-bold uppercase leading-none tracking-[1px] text-white transition-colors hover:bg-brand-dark"
        >
          <WhatsAppIcon className="size-5" />
          Send via WhatsApp
        </button>
        <p className="text-sm text-brand-ink/70" role="status">
          {sent ? "WhatsApp opened in a new tab with your message ready to send." : "Opens WhatsApp with your message ready to send."}
        </p>
      </div>
    </form>
  );
}
