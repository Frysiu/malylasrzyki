import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, useReveal } from "@/components/layout";
import { DISTANCES } from "@/lib/site";

export const Route = createFileRoute("/lokalizacja")({
  head: () => ({
    meta: [
      { title: "Lokalizacja – Mały Las w Rzykach, Beskid Mały" },
      {
        name: "description",
        content:
          "Młoki Górne 113, Rzyki. Domek w sercu Beskidu Małego, 2 minuty od Czarnego Gronia, godzina od Krakowa.",
      },
      { property: "og:title", content: "Lokalizacja – Mały Las w Rzykach" },
      {
        property: "og:description",
        content: "Młoki Górne 113, Rzyki – Beskid Mały. Szlaki, narty, jeziora w pobliżu.",
      },
    ],
  }),
  component: LokalizacjaPage,
});

function LokalizacjaPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden min-h-screen">
      <Nav />
      <section
        ref={ref}
        className="pt-40 pb-32 px-6"
        style={{ background: "linear-gradient(180deg, #0c0905 0%, #14100a 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="reveal text-amber tracking-[0.35em] text-xs uppercase mb-6">
              Lokalizacja
            </p>
            <h1 className="reveal font-serif text-5xl md:text-7xl text-cream font-light">
              Młoki Górne 113, Rzyki
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal aspect-[4/3] border border-amber/25 overflow-hidden">
              <iframe
                title="Mapa — Mały Las w Rzykach"
                src="https://www.google.com/maps?q=Młoki+Górne+113,+Rzyki,+Polska&output=embed"
                className="w-full h-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div>
              <div className="reveal border-l-2 border-amber pl-6 mb-10">
                <p className="font-serif text-2xl text-cream italic">Mały Las</p>
                <p className="text-cream/70 mt-1">Młoki Górne 113</p>
                <p className="text-cream/70">34-125 Rzyki, Beskid Mały</p>
              </div>

              <ul className="space-y-5">
                {DISTANCES.map((d, i) => (
                  <li
                    key={d.text}
                    className="reveal flex items-start gap-5 border-b border-amber/10 pb-5"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <span className="text-2xl mt-1 text-amber/90">{d.icon}</span>
                    <div className="flex-1">
                      <p className="font-serif text-xl text-cream">{d.text}</p>
                      <p className="text-cream/60 text-sm mt-1">{d.time}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="reveal mt-10 text-cream/70 leading-relaxed">
                Prosto z progu domku rozpoczynają się szlaki turystyczne Beskidu
                Małego — Leskowiec, Potrójna, Łamana Skała. Latem — wędrówki i
                rowery, zimą — narty na Czarnym Groniu w kilka minut.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
