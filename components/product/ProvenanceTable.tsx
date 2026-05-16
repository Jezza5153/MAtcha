import type { Provenance } from "@/lib/products";

type Row = { label: string; value: string | null; pending: boolean };

function rows(p: Provenance): Row[] {
  return [
    {
      label: "Country",
      value: p.country,
      pending: false,
    },
    {
      label: "Origin region",
      value: p.originRegion,
      pending: p.originRegion === null,
    },
    {
      label: "Supplier",
      value: p.supplierName,
      pending: p.supplierName === null,
    },
    {
      label: "Cultivar",
      value: p.cultivar,
      pending: p.cultivar === null,
    },
    {
      label: "Harvest",
      value:
        p.harvestSeason && p.harvestYear
          ? `${p.harvestSeason} ${p.harvestYear}`
          : null,
      pending: !p.harvestSeason || !p.harvestYear,
    },
    {
      label: "Grinding",
      value: p.grindingMethod === "stone_ground" ? "Stone-ground" : null,
      pending: p.grindingMethod !== "stone_ground",
    },
    {
      label: "Organic certified",
      value: p.organicCertified === true ? "Yes" : p.organicCertified === false ? "No" : null,
      pending: p.organicCertified === null,
    },
    {
      label: "Lab tested",
      value: p.labTested === true ? "Yes" : p.labTested === false ? "No" : null,
      pending: p.labTested === null,
    },
    {
      label: "Lot number",
      value: p.lotNumber,
      pending: p.lotNumber === null,
    },
  ];
}

export function ProvenanceTable({ provenance }: { provenance: Provenance }) {
  const data = rows(provenance);
  return (
    <section
      aria-label="Provenance"
      className="bg-cream-100 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Provenance
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-matcha-950 md:text-4xl">
          What we know. What we&rsquo;ll prove.
        </h2>
        <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-ink-soft">
          Fields marked &ldquo;Locking before launch&rdquo; will carry verified
          values from the supplier paper trail and lab certificates. Every tin
          will show its lot number.
        </p>

        <dl className="mt-10 divide-y divide-matcha-900/10 border-y border-matcha-900/10">
          {data.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-3 gap-4 py-4 font-body text-sm md:grid-cols-4"
            >
              <dt className="col-span-1 uppercase tracking-[0.2em] text-[0.7rem] text-matcha-700">
                {row.label}
              </dt>
              <dd
                className={`col-span-2 md:col-span-3 ${row.pending ? "italic text-ink-soft/70" : "text-matcha-950"}`}
              >
                {row.pending ? "Locking before launch" : row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
