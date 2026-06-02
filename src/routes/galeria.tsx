import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer, useReveal } from "@/components/layout";
import { GALLERY } from "@/lib/site";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria – Mały Las w Rzykach" },
      {
        name: "description",
        content:
          "Zdjęcia domku Mały Las w Rzykach – wnętrza, taras, las i okolica Beskidu Małego.",
      },
      { property: "og:title", content: "Galeria – Mały Las w Rzykach" },
      {
        property: "og:description",
        content: "Zdjęcia domku, wnętrz i okolicy w Beskidzie Małym.",
      },
      { property: "og:image", content: GALLERY[0] },
    ],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((p) => (p === null ? p : (p + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setOpen((p) => (p === null ? p : (p - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden min-h-screen">
      <Nav />
      <section ref={ref} className="pt-40 pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <p className="reveal text-amber tracking-[0.35em] text-xs uppercase mb-6">
            Galeria
          </p>
          <h1 className="reveal font-serif text-5xl md:text-7xl text-cream font-light">
            Spojrzenie do środka
          </h1>
        </div>

        <div className="px-4 md:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
            {GALLERY.map((src, i) => (
              <button
                key={src}
                onClick={() => setOpen(i)}
                className="reveal mb-3 block w-full break-inside-avoid overflow-hidden group relative border border-transparent hover:border-amber transition-all"
              >
                <img
                  src={src}
                  alt={`Mały Las — zdjęcie ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {open !== null && (
          <div
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((open - 1 + GALLERY.length) % GALLERY.length);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-cream text-3xl w-12 h-12 border border-amber/40 hover:bg-amber hover:text-background transition-all"
              aria-label="Poprzednie"
            >
              ‹
            </button>
            <img
              src={GALLERY[open]}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((open + 1) % GALLERY.length);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-cream text-3xl w-12 h-12 border border-amber/40 hover:bg-amber hover:text-background transition-all"
              aria-label="Następne"
            >
              ›
            </button>
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 text-cream text-sm tracking-[0.3em] uppercase hover:text-amber"
            >
              Zamknij
            </button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
