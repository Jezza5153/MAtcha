import Link from "next/link";
import { ReduceMotionToggle } from "./ReduceMotionToggle";
import { EmailCapture } from "./EmailCapture";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-matcha-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p
              className="inline-flex items-baseline gap-2 font-display text-3xl text-cream-50"
              style={{ letterSpacing: "-0.015em", fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              <span>Freddo Matcha</span>
              <span
                aria-hidden
                className="h-2 w-2 rounded-full bg-matcha-400"
              />
            </p>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream-100/75">
              Single-origin Japanese matcha powder. Italian restraint, Japanese
              sourcing. Pre-orders opening when supplier and lot are locked.
            </p>
            <div className="mt-6 max-w-sm">
              <EmailCapture source="footer" variant="dark" />
            </div>
          </div>

          <FooterColumn title="Shop">
            <FooterLink href="#products">All matcha</FooterLink>
            <FooterLink href="/products/ceremonial-matcha">
              Freddo Ceremoniale
            </FooterLink>
            <FooterLink href="/products/everyday-matcha">
              Freddo Quotidiano
            </FooterLink>
            <FooterLink href="/products/starter-kit">Il Rito Kit</FooterLink>
          </FooterColumn>

          <FooterColumn title="Brand">
            <FooterLink href="/story">Our story</FooterLink>
            <FooterLink href="/#sourcing">Sourcing</FooterLink>
            <FooterLink href="#buy">Ritual</FooterLink>
            <FooterLink href="/journal" disabled>
              Journal · soon
            </FooterLink>
          </FooterColumn>

          <FooterColumn title="Help">
            <FooterLink href="/shipping" disabled>
              Shipping · soon
            </FooterLink>
            <FooterLink href="/returns" disabled>
              Returns · soon
            </FooterLink>
            <FooterLink href="mailto:hello@freddomatcha.com">
              Contact us
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-cream-50/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-cream-100/55">
              Payments · placeholder
            </p>
            <ul className="flex items-center gap-2">
              {["Visa", "MC", "iDEAL", "Bcnct", "PayPal"].map((p) => (
                <li
                  key={p}
                  aria-label={`${p} accepted at checkout (placeholder)`}
                  className="rounded border border-cream-50/15 px-2 py-1 font-body text-[0.6rem] uppercase tracking-[0.18em] text-cream-100/60"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <ReduceMotionToggle />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-cream-50/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-[0.7rem] text-cream-100/50">
            © {year} Freddo Matcha. All rights reserved. Pre-launch site —
            content subject to change.
          </p>
          <ul className="flex flex-wrap gap-5 font-body text-[0.7rem] text-cream-100/50">
            <li>
              <Link href="/privacy" className="hover:text-cream-50">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-cream-50">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-cream-50">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-2">
      <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-cream-100/55">
        {title}
      </p>
      <ul className="mt-4 space-y-3 font-body text-sm text-cream-100/85">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  disabled,
}: {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <li className="text-cream-100/40" aria-disabled="true">
        {children}
      </li>
    );
  }
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-cream-50">
        {children}
      </Link>
    </li>
  );
}
