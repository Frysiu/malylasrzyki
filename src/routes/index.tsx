import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer, useReveal } from "@/components/layout";
import {
  BOOKING_URL,
  HERO_IMAGE,
  FEATURES,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  GALLERY,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mały Las w Rzykach – Domek w Beskidzie Małym | Noclegi Rzyki" },
      {
        name: "description",
        content:
          "Nowoczesny domek w stylu skandynawskim w Rzykach, Beskid Mały. Prywatny leśny azyl dla 6 osób z tarasem, pokojem kinowym i jacuzzi opalanym drewnem.",
      },
      { property: "og:title", content: "Mały Las w Rzykach – Domek w Beskidzie Małym" },
      {
        property: "og:description",
        content:
          "Nowoczesny domek w stylu skandynawskim w Rzykach, Beskid Mały. Prywatny leśny azyl dla 6 osób.",
      },
      { property: "og:image", content: GALLERY[0] },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Mały Las w Rzykach",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Młoki Górne 113",
            addressLocality: "Rzyki",
            addressRegion: "Beskid Mały",
            addressCountry: "PL",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center grain overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <p
          className="word-in text-amber tracking-[0.4em] text-xs uppercase mb-8"
          style={{ animationDelay: "0.1s" }}
        >
          Rzyki · Beskid Mały
        </p>
        <h1 className="font-serif leading-[0.95] text-cream">
          <span
            className="word-in block text-[clamp(3rem,9vw,8rem)] font-light tracking-tight"
            style={{ animationDelay: "0.3s" }}
          >
            Twój prywatny azyl
          </span>
          <span
            className="word-in block text-[clamp(2rem,6vw,5.5rem)] font-light italic text-cream/85 mt-2"
            style={{ animationDelay: "0.6s" }}
          >
            w sercu Beskidu Małego
          </span>
        </h1>
        <p
          className="word-in mt-10 text-cream/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
          style={{ animationDelay: "0.9s" }}
        >
          Nowoczesny domek w stylu skandynawskim — cisza, las i góry
        </p>
        <div className="word-in mt-12" style={{ animationDelay: "1.1s" }}>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="amber-pulse inline-block border border-amber text-amber px-10 py-4 text-sm tracking-[0.3em] uppercase transition-colors hover:bg-amber hover:text-background"
          >
            Sprawdź dostępność
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[0.65rem] uppercase tracking-[0.4em] text-cream/60">
          Przewiń
        </span>
        <div className="h-16 w-px bg-cream/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-amber scroll-line" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="o-miejscu"
      ref={ref}
      className="py-32 px-6 grain"
      style={{ background: "linear-gradient(180deg, #0c0905 0%, #14100a 100%)" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <p className="reveal text-amber tracking-[0.35em] text-xs uppercase mb-8">
            O miejscu
          </p>
          <blockquote
            className="reveal font-serif italic text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.2] font-light"
            style={{ animationDelay: "0.1s" }}
          >
            „Klimatyczny domek, panoramiczne okna i zapach lasu — Mały Las to
            miejsce, gdzie czas zwalnia."
          </blockquote>
          <p
            className="reveal mt-10 text-cream/70 leading-relaxed text-lg max-w-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Wnętrze utrzymane w ciepłych tonach naturalnego drewna, z pokojem
            kinowym, panoramicznym widokiem na las i tarasem stworzonym do
            wieczorów w jacuzzi. Miejsce dla tych, którzy szukają ciszy i pełni
            natury.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURES.map((f, i) => (
            <button
              type="button"
              key={f.label}
              onClick={() => setActive(i)}
              className="reveal text-left border border-amber/25 bg-wood-dark/50 p-7 hover:border-amber transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="text-3xl mb-4 text-amber/90 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <p className="font-serif text-xl text-cream tracking-wide">
                {f.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Zamknij"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 text-cream/80 hover:text-amber text-3xl leading-none w-12 h-12 flex items-center justify-center"
          >
            ×
          </button>
          <figure
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={FEATURES[active].image}
              alt={FEATURES[active].label}
              className="w-full max-h-[80vh] object-contain border border-amber/20"
            />
            <figcaption className="text-center mt-4 font-serif text-2xl text-cream italic">
              {FEATURES[active].icon} {FEATURES[active].label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="kontakt"
      ref={ref}
      className="py-32 px-6 grain relative"
      style={{
        background:
          "radial-gradient(ellipse at top, #1a1108 0%, #0c0905 60%, #050302 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="reveal text-amber tracking-[0.35em] text-xs uppercase mb-6">
          Rezerwacja
        </p>
        <h2 className="reveal font-serif text-5xl md:text-7xl text-cream font-light leading-[1]">
          Zarezerwuj swój pobyt
        </h2>
        <p
          className="reveal mt-8 text-cream/70 text-lg max-w-2xl mx-auto"
          style={{ animationDelay: "0.1s" }}
        >
          Skontaktuj się bezpośrednio lub zarezerwuj przez Booking.com.
        </p>

        <div className="reveal mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
          <div>
            <p className="text-cream/60 text-xs tracking-[0.3em] uppercase mb-3">
              Telefon
            </p>
            <a
              href={PHONE_HREF}
              className="font-serif text-3xl md:text-4xl text-cream block hover:text-amber transition-colors"
            >
              {PHONE}
            </a>
          </div>
          <div>
            <p className="text-cream/60 text-xs tracking-[0.3em] uppercase mb-3">
              E-mail
            </p>
            <a
              href={EMAIL_HREF}
              className="font-serif text-2xl md:text-3xl text-cream block hover:text-amber transition-colors break-all"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-3 mt-14">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="amber-glow bg-amber text-background px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-amber/90 transition-colors"
          >
            Rezerwuj na Booking
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-amber/40 text-amber px-6 py-4 text-xs tracking-[0.22em] uppercase hover:bg-amber hover:text-background transition-all"
          >
            Facebook
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-amber/40 text-amber px-6 py-4 text-xs tracking-[0.22em] uppercase hover:bg-amber hover:text-background transition-all"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
