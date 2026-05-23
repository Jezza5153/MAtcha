"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ReduceMotionToggle } from "./ReduceMotionToggle";

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "/#producten", label: "Shop" },
  { href: "/producten/ceremoniele-matcha", label: "Onze matcha" },
  { href: "/#ritueel", label: "Het ritueel" },
  { href: "/#herkomst", label: "Herkomst" },
  { href: "mailto:hello@freddomatcha.nl", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const returnFocusTo = (document.activeElement as HTMLElement) ?? triggerRef.current;
    document.body.style.overflow = "hidden";
    document.documentElement.setAttribute("data-mobile-nav-open", "true");

    // Focus the first nav link after the drawer animates in
    const focusTimer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !drawerRef.current) return;

      const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.removeAttribute("data-mobile-nav-open");
      returnFocusTo?.focus?.();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        className="pointer-events-auto inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-cream-50/85 px-3 py-2 backdrop-blur-sm shadow-sm md:hidden"
      >
        <span aria-hidden className="flex flex-col gap-[5px]">
          <span className="block h-[1.5px] w-[18px] bg-matcha-950" />
          <span className="block h-[1.5px] w-[18px] bg-matcha-950" />
          <span className="block h-[1.5px] w-[12px] bg-matcha-950" />
        </span>
        <span className="sr-only">Menu</span>
      </button>

      {/* Scrim */}
      <div
        aria-hidden={!open}
        onClick={close}
        className={`fixed inset-0 z-50 bg-matcha-950/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Hoofdmenu"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`fixed inset-y-0 left-0 z-50 flex w-[88vw] max-w-sm flex-col bg-cream-50 shadow-2xl transition-transform duration-500 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          paddingTop: "calc(env(safe-area-inset-top) + 1.25rem)",
          paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)",
        }}
      >
        <header className="flex items-center justify-between px-6 pb-4">
          <p
            className="font-display text-base text-matcha-950"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
          >
            Freddo Matcha
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Sluit menu"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full font-body text-xs uppercase tracking-[0.2em] text-ink-soft hover:text-matcha-950"
          >
            Sluiten
          </button>
        </header>

        <nav aria-label="Hoofdnavigatie" className="flex-1 px-6 pt-4">
          <ul className="space-y-1">
            {links.map((link, i) => (
              <li key={link.href}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={close}
                  className="flex min-h-[52px] items-center font-display text-2xl leading-tight text-matcha-950 transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="border-t border-matcha-900/10 px-6 pt-5">
          <ReduceMotionToggle tone="light" />
          <p className="mt-4 font-body text-xs uppercase tracking-[0.22em] text-ink-soft">
            Pre-launch
          </p>
        </footer>
      </aside>
    </>
  );
}
