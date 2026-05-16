/**
 * Analytics taxonomy + provider fan-out.
 *
 * Loads PostHog, GA4, and Meta Pixel only when NEXT_PUBLIC_*_KEY/ID env vars
 * are set. Without those, `track()` is a no-op so dev never breaks.
 *
 * Klaviyo email capture: POSTs to the Klaviyo subscribe endpoint when
 * NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY + NEXT_PUBLIC_KLAVIYO_LIST_ID are set.
 * Falls back to localStorage so we can collect signups during pre-launch
 * without a vendor account.
 */

export const EVENTS = {
  PageView: "page_view",
  ViewedProduct: "viewed_product",
  ViewedCart: "viewed_cart",
  AddedToCart: "added_to_cart",
  StartedCheckout: "started_checkout",
  Purchased: "purchased",
  EmailCaptured: "email_captured",
  ToggledReduceMotion: "toggled_reduce_motion",
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

type AnalyticsProps = Record<string, string | number | boolean | undefined>;

type GlobalsWithAnalytics = typeof globalThis & {
  posthog?: { capture: (e: string, p?: AnalyticsProps) => void };
  gtag?: (cmd: string, e: string, p?: AnalyticsProps) => void;
  fbq?: (cmd: string, e: string, p?: AnalyticsProps) => void;
};

export function track(event: EventName, props: AnalyticsProps = {}): void {
  if (typeof window === "undefined") return;
  const g = window as GlobalsWithAnalytics;
  try {
    g.posthog?.capture(event, props);
    g.gtag?.("event", event, props);
    g.fbq?.("track", event, props);
  } catch {
    // never let analytics crash the page
  }
}

const SUBSCRIBE_STORAGE_KEY = "freddo:pre-launch-subscribers";

export async function subscribeEmail(
  email: string,
  source: string,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, reason: "invalid_email" };
  }

  const klaviyoKey = process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY;
  const klaviyoList = process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID;

  if (klaviyoKey && klaviyoList) {
    try {
      const res = await fetch(
        `https://a.klaviyo.com/api/v2/list/${klaviyoList}/subscribe?api_key=${klaviyoKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ profiles: [{ email, $source: source }] }),
        },
      );
      if (!res.ok) {
        return { ok: false, reason: `klaviyo_${res.status}` };
      }
      track(EVENTS.EmailCaptured, { source });
      return { ok: true };
    } catch {
      return { ok: false, reason: "network" };
    }
  }

  // Pre-launch fallback: stash locally so we don't lose interested visitors
  try {
    const raw = window.localStorage.getItem(SUBSCRIBE_STORAGE_KEY);
    const list: { email: string; source: string; at: string }[] = raw
      ? JSON.parse(raw)
      : [];
    if (!list.some((e) => e.email === email)) {
      list.push({ email, source, at: new Date().toISOString() });
      window.localStorage.setItem(SUBSCRIBE_STORAGE_KEY, JSON.stringify(list));
    }
    track(EVENTS.EmailCaptured, { source });
    return { ok: true };
  } catch {
    return { ok: false, reason: "storage" };
  }
}
