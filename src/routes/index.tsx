import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mały Las w Rzykach – Domek w Beskidzie Małym | Noclegi Rzyki" },
      {
        name: "description",
        content:
          "Nowoczesny domek w stylu skandynawskim w Rzykach, Beskid Mały. Prywatny leśny azyl dla 6 osób z tarasem, pokojem kinowym i miejscem na ognisko.",
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

const BOOKING_URL = "https://www.booking.com/hotel/pl/domek-maly-las.pl.html";

const GALLERY = [
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320064/IMG_1764_evmc4h.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320064/IMG_1762_optkam.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320063/IMG_1755_wtrdbn.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320063/IMG_1758_biq3qx.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320062/IMG_1749_vi2hfe.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320062/IMG_1744_g4mkql.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320062/IMG_1740_bkfkeh.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320062/IMG_1743_lnfjno.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320061/IMG_1738_wjeewd.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320061/IMG_1739_r886do.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320061/IMG_1734_ferfwb.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320061/IMG_1729_tj4s0p.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320061/IMG_1727_pcze51.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320060/IMG_1737_vfnuzz.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320060/IMG_1732_iuec6d.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320059/IMG_1725_h436ql.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320059/IMG_1722_oyuigp.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320059/IMG_1724_gyb61z.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320057/IMG_1717_odz982.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320058/IMG_1720_xtwvma.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320058/IMG_1721_xj3seb.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320058/IMG_1719_ade8jj.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320058/IMG_1709_sumvml.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320057/IMG_1715_guwwxz.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320057/IMG_1713_u2kwv5.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320057/IMG_1711_bbycbe.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320056/IMG_1701_qgd4kp.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320056/IMG_1706_e9m1d2.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320056/IMG_1704_vdc8xf.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320056/IMG_1703_cfqm5s.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320056/IMG_1710_mmtjz5.jpg",
  "https://res.cloudinary.com/davhhstdw/image/upload/v1780320056/IMG_1708_t4ykig.jpg",
];


const FEATURES = [
  { label: "Prywatny las", icon: "🌲" },
  { label: "Beskid Mały", icon: "⛰" },
  { label: "Miejsce na ognisko", icon: "🔥" },
  { label: "Naturalne drewno", icon: "🪵" },
  { label: "Pokój kinowy", icon: "🎬" },
  { label: "Do 6 osób", icon: "👥" },
];

const DISTANCES = [
  { icon: "⛷", text: "Resort Czarny Groń", time: "2 min jazdy (1,5 km)" },
  { icon: "🏘", text: "Andrychów (centrum)", time: "10 min jazdy (8 km)" },
  { icon: "⛪", text: "Wadowice (miasto Jana Pawła II)", time: "20 min jazdy (18 km)" },
  { icon: "🌊", text: "Jezioro Międzybrodzkie", time: "25 min jazdy (22 km)" },
  { icon: "🚡", text: "Góra Żar (kolejka na szczyt)", time: "28 min jazdy (25 km)" },
  { icon: "🏛", text: "Kraków", time: "1 godz. jazdy (70 km)" },
];

function Index() {
  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Location />
      <Booking />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#o-miejscu", label: "O miejscu" },
    { href: "#galeria", label: "Galeria" },
    { href: "#lokalizacja", label: "Lokalizacja" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-amber/15 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <a href="#top" className="font-serif italic text-2xl text-cream tracking-wide">
          Mały&nbsp;Las
        </a>
        <nav className="hidden md:flex gap-10 text-sm tracking-[0.18em] uppercase text-cream/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="amber-glow border border-amber text-amber px-5 py-2.5 text-xs tracking-[0.22em] uppercase transition-all hover:bg-amber hover:text-background"
        >
          Zarezerwuj
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center grain overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 80%, #1a1108 0%, #0c0905 55%, #050302 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/davhhstdw/image/upload/v1780320056/IMG_1704_vdc8xf.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35) saturate(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

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
          className="word-in mt-10 text-cream/70 text-lg md:text-xl max-w-2xl mx-auto font-light"
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
        <span className="text-[0.65rem] uppercase tracking-[0.4em] text-cream/40">
          Przewiń
        </span>
        <div className="h-16 w-px bg-cream/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-amber scroll-line" />
        </div>
      </div>
    </section>
  );
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function About() {
  const ref = useReveal<HTMLDivElement>();
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
            „Ciemna drewniana bryła, panoramiczne okna i zapach lasu — Mały Las to
            miejsce, gdzie czas zwalnia."
          </blockquote>
          <p
            className="reveal mt-10 text-cream/70 leading-relaxed text-lg max-w-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Dramatyczna czarna bryła w kształcie litery A, otoczona wysokimi
            świerkami. Wnętrze utrzymane w ciepłych tonach naturalnego drewna,
            z pokojem kinowym, panoramicznym widokiem na las i tarasem
            stworzonym do wieczorów przy ogniu. Miejsce dla tych, którzy
            szukają ciszy i pełni natury.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.label}
              className="reveal border border-amber/25 bg-wood-dark/50 p-7 hover:border-amber transition-all duration-500 group"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="text-3xl mb-4 text-amber/90 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <p className="font-serif text-xl text-cream tracking-wide">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const items = GALLERY.map((src, i) => ({ src, i }));

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
    <section id="galeria" ref={ref} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="reveal text-amber tracking-[0.35em] text-xs uppercase mb-6">
          Galeria
        </p>
        <h2 className="reveal font-serif text-5xl md:text-6xl text-cream font-light">
          Spojrzenie do środka
        </h2>
      </div>

      <div className="px-4 md:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
          {items.map((it) => (
            <button
              key={it.i}
              onClick={() => setOpen(it.i)}
              className="reveal mb-3 block w-full break-inside-avoid overflow-hidden group relative border border-transparent hover:border-amber transition-all"
            >
              <img
                src={it.src}
                alt={`Mały Las — zdjęcie ${it.i + 1}`}
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
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(((open - 1 + GALLERY.length) % GALLERY.length));
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
  );
}

function Location() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="lokalizacja"
      ref={ref}
      className="py-32 px-6"
      style={{ background: "linear-gradient(180deg, #14100a 0%, #0c0905 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-amber tracking-[0.35em] text-xs uppercase mb-6">
            Lokalizacja
          </p>
          <h2 className="reveal font-serif text-5xl md:text-6xl text-cream font-light">
            Młoki Górne 113, Rzyki
          </h2>
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
  );
}

function Booking() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="reveal text-amber tracking-[0.35em] text-xs uppercase mb-6">
            Rezerwacja
          </p>
          <h2 className="reveal font-serif text-5xl md:text-7xl text-cream font-light leading-[1]">
            Zarezerwuj swój pobyt
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <p className="text-cream/60 text-xs tracking-[0.3em] uppercase mb-4">
              Telefon
            </p>
            <a
              href="tel:+48000000000"
              className="font-serif text-4xl md:text-5xl text-cream block hover:text-amber transition-colors"
            >
              +48 000 000 000
            </a>

            <p className="text-cream/60 text-xs tracking-[0.3em] uppercase mt-10 mb-4">
              E-mail
            </p>
            <a
              href="mailto:kontakt@malylas.pl"
              className="font-serif text-2xl md:text-3xl text-cream italic hover:text-amber transition-colors"
            >
              kontakt@malylas.pl
            </a>

            <div className="flex gap-3 mt-12">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="amber-glow border border-amber/40 text-amber px-6 py-3 text-xs tracking-[0.22em] uppercase hover:bg-amber hover:text-background transition-all"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/48000000000"
                target="_blank"
                rel="noreferrer"
                className="amber-glow border border-amber/40 text-amber px-6 py-3 text-xs tracking-[0.22em] uppercase hover:bg-amber hover:text-background transition-all"
              >
                WhatsApp
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="amber-glow border border-amber/40 text-amber px-6 py-3 text-xs tracking-[0.22em] uppercase hover:bg-amber hover:text-background transition-all"
              >
                Booking
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal space-y-5 border border-amber/20 bg-wood-dark/40 p-8 md:p-10"
          >
            <Field label="Imię i nazwisko" name="name" />
            <Field label="E-mail" name="email" type="email" />
            <Field label="Telefon" name="phone" type="tel" />
            <div className="grid grid-cols-2 gap-5">
              <Field label="Data przyjazdu" name="from" type="date" />
              <Field label="Data wyjazdu" name="to" type="date" />
            </div>
            <div>
              <label className="block text-cream/60 text-[0.65rem] tracking-[0.3em] uppercase mb-2">
                Wiadomość
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-transparent border border-amber/25 px-4 py-3 text-cream focus:border-amber outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="amber-glow w-full bg-amber text-background py-4 text-xs tracking-[0.3em] uppercase hover:bg-amber/90 transition-colors"
            >
              {sent ? "Dziękujemy — odezwiemy się" : "Wyślij zapytanie"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-cream/60 text-[0.65rem] tracking-[0.3em] uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full bg-transparent border border-amber/25 px-4 py-3 text-cream focus:border-amber outline-none transition-colors [color-scheme:dark]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-amber/15 bg-background text-center">
      <p className="font-serif italic text-3xl text-cream">Mały Las</p>
      <p className="text-cream/50 text-xs tracking-[0.35em] uppercase mt-3">
        Mały Las · Rzyki · Beskid Mały
      </p>
      <div className="flex justify-center gap-6 mt-8 text-cream/70 text-sm tracking-[0.22em] uppercase">
        <a href="https://facebook.com" className="hover:text-amber transition-colors">
          Facebook
        </a>
        <a href="https://instagram.com" className="hover:text-amber transition-colors">
          Instagram
        </a>
      </div>
      <p className="text-cream/30 text-xs mt-10">© 2025 Mały Las w Rzykach</p>
    </footer>
  );
}
