import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream-50 px-6 pt-40 pb-24 md:px-10 md:pt-48">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Not in the range
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-matcha-950 md:text-6xl">
          That tin doesn&rsquo;t exist.
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-ink-soft">
          The product you tried to reach isn&rsquo;t in the Freddo Matcha
          lineup yet — three tins at launch, more after that.
        </p>
        <Link
          href="/#products"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50"
        >
          See the lineup
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
