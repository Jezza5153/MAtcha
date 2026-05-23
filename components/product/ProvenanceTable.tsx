import type { Provenance } from "@/lib/products";

type Row = { label: string; value: string | null; pending: boolean };

function rows(p: Provenance): Row[] {
  return [
    {
      label: "Land",
      value: p.country === "Japan" ? "Japan" : p.country,
      pending: false,
    },
    {
      label: "Regio van herkomst",
      value: p.originRegion,
      pending: p.originRegion === null,
    },
    {
      label: "Leverancier",
      value: p.supplierName,
      pending: p.supplierName === null,
    },
    {
      label: "Cultivar",
      value: p.cultivar,
      pending: p.cultivar === null,
    },
    {
      label: "Oogst",
      value:
        p.harvestSeason && p.harvestYear
          ? `${p.harvestSeason} ${p.harvestYear}`
          : null,
      pending: !p.harvestSeason || !p.harvestYear,
    },
    {
      label: "Maling",
      value: p.grindingMethod === "stone_ground" ? "Tussen steen gemalen" : null,
      pending: p.grindingMethod !== "stone_ground",
    },
    {
      label: "Biologisch gecertificeerd",
      value:
        p.organicCertified === true
          ? "Ja"
          : p.organicCertified === false
            ? "Nee"
            : null,
      pending: p.organicCertified === null,
    },
    {
      label: "Laboratorium getest",
      value:
        p.labTested === true ? "Ja" : p.labTested === false ? "Nee" : null,
      pending: p.labTested === null,
    },
    {
      label: "Lotnummer",
      value: p.lotNumber,
      pending: p.lotNumber === null,
    },
  ];
}

export function ProvenanceTable({ provenance }: { provenance: Provenance }) {
  const data = rows(provenance);
  return (
    <section
      aria-label="Herkomst en certificering"
      className="bg-cream-100 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Herkomst
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-matcha-950 md:text-4xl">
          Wat we weten. Wat we gaan bewijzen.
        </h2>
        <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-ink-soft">
          Velden met &ldquo;Wordt vastgelegd vóór de launch&rdquo; krijgen
          geverifieerde waarden uit het papieren spoor van de leverancier en uit
          labcertificaten. Op elk blik komt het lotnummer te staan.
        </p>

        <dl className="mt-10 divide-y divide-matcha-900/10 border-y border-matcha-900/10">
          {data.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 py-4 font-body text-sm sm:grid sm:grid-cols-3 sm:gap-4 md:grid-cols-4"
            >
              <dt className="uppercase tracking-[0.2em] text-[0.7rem] text-matcha-700 sm:col-span-1">
                {row.label}
              </dt>
              <dd
                className={`sm:col-span-2 md:col-span-3 ${row.pending ? "italic text-ink-soft/70" : "text-matcha-950"}`}
              >
                {row.pending ? "Wordt vastgelegd vóór de launch" : row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
