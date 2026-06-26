import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, useReveal } from "@/components/layout";
import { BOOKING_URL } from "@/lib/site";

export const Route = createFileRoute("/cennik")({
  head: () => ({
    meta: [
      { title: "Cennik – Mały Las w Rzykach" },
      {
        name: "description",
        content:
          "Cennik pobytu w domku Mały Las w Rzykach. Od 450 zł za noc dla 2 osób, do 650 zł dla 6 osób.",
      },
      { property: "og:title", content: "Cennik – Mały Las w Rzykach" },
      {
        property: "og:description",
        content: "Przejrzyste ceny pobytu w domku Mały Las – od 2 do 6 osób.",
      },
    ],
  }),
  component: CennikPage,
});

const PRICES = [
  { people: 2, price: 450 },
  { people: 3, price: 500 },
  { people: 4, price: 550 },
  { people: 5, price: 600 },
  { people: 6, price: 650 },
];

function CennikPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden min-h-screen">
      <Nav />
      <section
        ref={ref}
        className="pt-40 pb-24 px-6"
        style={{ background: "linear-gradient(180deg, #0c0905 0%, #14100a 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="reveal text-amber tracking-[0.35em] text-xs uppercase mb-6">
              Cennik
            </p>
            <h1 className="reveal font-serif text-5xl md:text-7xl text-cream font-light italic">
              Ceny pobytu
            </h1>
            <p className="reveal mt-6 text-cream/60 max-w-xl mx-auto leading-relaxed">
              Cena dotyczy całego domku za jedną noc. Bez ukrytych opłat – jacuzzi opalane drewnem,
              pokój kinowy i miejsce na ognisko w cenie.
            </p>
          </div>

          <div className="grid gap-4 md:gap-5">
            {PRICES.map((p, i) => (
              <div
                key={p.people}
                className="reveal group flex items-center justify-between gap-6 px-6 md:px-10 py-6 md:py-7 border border-amber/15 bg-wood-dark/40 hover:border-amber/50 hover:bg-wood-dark/70 transition-all"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-5 md:gap-7">
                  <span className="font-serif italic text-4xl md:text-5xl text-amber w-12 text-center">
                    {p.people}
                  </span>
                  <div>
                    <p className="text-cream text-base md:text-lg tracking-wide">
                      {p.people === 1 ? "osoba" : p.people < 5 ? "osoby" : "osób"}
                    </p>
                    <p className="text-cream/50 text-xs tracking-[0.22em] uppercase mt-1">
                      cena za noc
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-serif text-3xl md:text-4xl text-cream">
                    {p.price} <span className="text-amber text-2xl md:text-3xl">zł</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-16 text-center">
            <p className="text-cream/60 text-sm leading-relaxed max-w-2xl mx-auto">
              Minimalny pobyt oraz dostępność terminów sprawdzisz w systemie rezerwacji.
              Zapraszamy do kontaktu przy dłuższych pobytach lub pytaniach indywidualnych.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="amber-glow inline-block mt-10 border border-amber text-amber px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-amber hover:text-background transition-all"
            >
              Sprawdź dostępność
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
