"use client";

import { useState } from "react";
import { subscribeEmail } from "@/lib/analytics";

type Status = "idle" | "loading" | "ok" | "error";

export function EmailCapture({
  source,
  variant = "dark",
}: {
  source: string;
  variant?: "dark" | "light";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [reason, setReason] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length === 0) {
      setStatus("error");
      setReason("empty_email");
      return;
    }
    setStatus("loading");
    const result = await subscribeEmail(email, source);
    if (result.ok) {
      setStatus("ok");
      setEmail("");
    } else {
      setStatus("error");
      setReason(result.reason);
    }
  };

  const dark = variant === "dark";

  return (
    <form
      onSubmit={onSubmit}
      className="w-full"
      aria-label="Pre-launch aanmelding"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jij@email.nl"
          disabled={status === "loading" || status === "ok"}
          aria-label="E-mailadres"
          className={
            dark
              ? "min-h-[44px] flex-1 rounded-full border border-cream-50/20 bg-matcha-900/50 px-5 py-3 font-body text-base text-cream-50 placeholder:text-cream-100/40 focus:outline-2 focus:outline-offset-2 focus:outline-cream-50 disabled:opacity-60"
              : "min-h-[44px] flex-1 rounded-full border border-matcha-900/15 bg-cream-100 px-5 py-3 font-body text-base text-matcha-950 placeholder:text-ink-soft/60 focus:outline-2 focus:outline-offset-2 focus:outline-matcha-700 disabled:opacity-60"
          }
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "ok"}
          className={
            dark
              ? "min-h-[44px] rounded-full bg-cream-50 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950 hover:bg-cream-100 disabled:opacity-60"
              : "min-h-[44px] rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 hover:bg-matcha-900 disabled:opacity-60"
          }
        >
          {status === "loading"
            ? "Aanmelden..."
            : status === "ok"
              ? "Aangemeld"
              : "Houd me op de hoogte"}
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 font-body text-xs ${dark ? "text-cream-100/70" : "text-ink-soft"}`}
      >
        {status === "ok" &&
          "Je staat op de lijst. We sturen je alleen iets als er echt nieuws is."}
        {status === "error" &&
          reason === "empty_email" &&
          "Vul je e-mailadres in om je aan te melden."}
        {status === "error" &&
          reason === "invalid_email" &&
          "Vul een geldig e-mailadres in."}
        {status === "error" &&
          reason !== "invalid_email" &&
          reason !== "empty_email" &&
          "Er ging iets mis. Probeer het zo nog een keer."}
        {status === "idle" &&
          "Eén bericht, geen spam. We sturen alleen de launchaankondiging en daarna niets meer tot die tijd."}
      </p>
    </form>
  );
}
