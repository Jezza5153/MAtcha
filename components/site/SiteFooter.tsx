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
              Single-origin Japanse matchapoeder. Italiaanse rust, Japanse
              herkomst. Pre-orders openen zodra leverancier en lot zijn
              vastgelegd.
            </p>
            <div className="mt-6 max-w-sm">
              <EmailCapture source="footer" variant="dark" />
            </div>
            <address className="mt-8 max-w-sm not-italic">
              <p className="font-display text-lg text-cream-50">
                Freddo Matcha
              </p>
              <p className="mt-1 font-body text-sm text-cream-100/75">
                Amersfoort, Nederland
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-cream-100/75">
                Premium Japanse matcha voor thuis.
                <br />
                Ontstaan in Amersfoort, met Japanse herkomst en Italiaanse rust.
              </p>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 font-body text-xs text-cream-100/65">
                <dt className="uppercase tracking-[0.18em]">KvK</dt>
                <dd>binnenkort</dd>
                <dt className="uppercase tracking-[0.18em]">BTW</dt>
                <dd>binnenkort</dd>
                <dt className="uppercase tracking-[0.18em]">Contact</dt>
                <dd>
                  <a
                    href="mailto:hello@freddomatcha.nl"
                    className="hover:text-cream-50"
                  >
                    hello@freddomatcha.nl
                  </a>
                </dd>
              </dl>
            </address>
          </div>

          <FooterColumn title="Shop">
            <FooterLink href="#producten">Alle matcha</FooterLink>
            <FooterLink href="/producten/ceremoniele-matcha">
              Freddo Ceremoniale
            </FooterLink>
            <FooterLink href="/producten/dagelijkse-matcha">
              Freddo Quotidiano
            </FooterLink>
            <FooterLink href="/producten/starterkit">Il Rito Kit</FooterLink>
          </FooterColumn>

          <FooterColumn title="Merk">
            <FooterLink href="/verhaal">Ons verhaal</FooterLink>
            <FooterLink href="/verhaal/amersfoort">Vanuit Amersfoort</FooterLink>
            <FooterLink href="/#herkomst">Herkomst</FooterLink>
            <FooterLink href="/gidsen">Gidsen</FooterLink>
          </FooterColumn>

          <FooterColumn title="Hulp">
            <FooterLink href="/verzending">Verzending</FooterLink>
            <FooterLink href="/retour">Retour</FooterLink>
            <FooterLink href="mailto:hello@freddomatcha.nl">
              Contact
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-cream-50/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-cream-100">
              Betaalmethoden · placeholder
            </p>
            <ul className="flex items-center gap-2">
              {["Visa", "MC", "iDEAL", "Bcnct", "PayPal"].map((p) => (
                <li
                  key={p}
                  aria-label={`${p} geaccepteerd bij afrekenen (placeholder)`}
                  className="rounded border border-cream-50/30 bg-matcha-900 px-2 py-1 font-body text-[0.7rem] uppercase tracking-[0.18em] text-cream-50"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <ReduceMotionToggle />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-cream-50/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-[0.7rem] text-cream-100/70">
            © {year} Freddo Matcha. Alle rechten voorbehouden. Pre-launch site —
            inhoud kan nog veranderen.
          </p>
          <ul className="flex flex-wrap gap-5 font-body text-[0.7rem] text-cream-100/70">
            <li>
              <Link href="/privacy" className="hover:text-cream-50">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/voorwaarden" className="hover:text-cream-50">
                Voorwaarden
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
      <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-cream-100/75">
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-cream-50">
        {children}
      </Link>
    </li>
  );
}
