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
      aria-label="Pre-launch email signup"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@somewhere"
          disabled={status === "loading" || status === "ok"}
          aria-label="Email address"
          className={
            dark
              ? "flex-1 rounded-full border border-cream-50/20 bg-matcha-900/50 px-4 py-2.5 font-body text-sm text-cream-50 placeholder:text-cream-100/40 focus:outline-2 focus:outline-offset-2 focus:outline-cream-50 disabled:opacity-60"
              : "flex-1 rounded-full border border-matcha-900/15 bg-cream-100 px-4 py-2.5 font-body text-sm text-matcha-950 placeholder:text-ink-soft/60 focus:outline-2 focus:outline-offset-2 focus:outline-matcha-700 disabled:opacity-60"
          }
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "ok"}
          className={
            dark
              ? "rounded-full bg-cream-50 px-5 py-2.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950 hover:bg-cream-100 disabled:opacity-60"
              : "rounded-full bg-matcha-950 px-5 py-2.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 hover:bg-matcha-900 disabled:opacity-60"
          }
        >
          {status === "loading" ? "Sending..." : status === "ok" ? "Thanks" : "Notify me"}
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 font-body text-xs ${dark ? "text-cream-100/70" : "text-ink-soft"}`}
      >
        {status === "ok" &&
          "You're on the list. We'll send one notification when pre-orders open."}
        {status === "error" &&
          reason === "invalid_email" &&
          "That doesn't look like a valid email. Try again."}
        {status === "error" &&
          reason !== "invalid_email" &&
          "Something went wrong. Try again in a moment."}
        {status === "idle" &&
          "One notification, no spam. We'll send the launch announcement and nothing else until then."}
      </p>
    </form>
  );
}
