import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BOOKING_URL,
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE,
  PHONE_HREF,
} from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const transparent = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { to: "/", label: "Start" },
    { to: "/galeria", label: "Galeria" },
    { to: "/cennik", label: "Cennik" },
    { to: "/lokalizacja", label: "Lokalizacja" },
  ] as const;

  const solid = scrolled || !transparent || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/90 backdrop-blur-md border-b border-amber/15 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif italic text-2xl text-cream tracking-wide">
          Mały&nbsp;Las
        </Link>
        <nav className="hidden md:flex gap-10 text-sm tracking-[0.18em] uppercase text-cream/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="hover:text-amber transition-colors"
              activeProps={{ className: "text-amber" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="amber-glow hidden md:inline-block border border-amber text-amber px-5 py-2.5 text-xs tracking-[0.22em] uppercase transition-all hover:bg-amber hover:text-background"
        >
          Zarezerwuj
        </a>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`block h-px w-6 bg-cream transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-amber/15">
          <nav className="flex flex-col px-6 py-6 gap-5 text-sm tracking-[0.2em] uppercase text-cream/85">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="hover:text-amber transition-colors"
                activeProps={{ className: "text-amber" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 border border-amber text-amber px-5 py-3 text-xs tracking-[0.22em] uppercase text-center hover:bg-amber hover:text-background transition-all"
            >
              Zarezerwuj
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-amber/15 bg-background text-center">
      <p className="font-serif italic text-3xl text-cream">Mały Las</p>
      <p className="text-cream/50 text-xs tracking-[0.35em] uppercase mt-3">
        Mały Las · Rzyki · Beskid Mały
      </p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-6 text-cream/70 text-sm">
        <a href={PHONE_HREF} className="hover:text-amber transition-colors">
          {PHONE}
        </a>
        <a href={EMAIL_HREF} className="hover:text-amber transition-colors">
          {EMAIL}
        </a>
      </div>
      <div className="flex justify-center gap-6 mt-6 text-cream/70 text-sm tracking-[0.22em] uppercase">
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber transition-colors"
        >
          Facebook
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber transition-colors"
        >
          Instagram
        </a>
      </div>
      <p className="text-cream/30 text-xs mt-10">© 2025 Mały Las w Rzykach</p>
    </footer>
  );
}

export function useReveal<T extends HTMLElement>() {
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
