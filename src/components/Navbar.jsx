import { useState } from "react";

const LINKS = [
  { href: "#radar", label: "Live Radar" },
  { href: "#booking", label: "Book a Load" },
  { href: "#services", label: "Services" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#trust", label: "Why Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-line bg-charcoal-deep/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-truck font-extrabold text-charcoal-deep shadow-glow">
            Y2
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">
            Y2<span className="text-truck">Wait</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-truck"
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" className="btn-primary !px-5 !py-2.5">
            Post Load
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-charcoal-line text-slate-200 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-charcoal-line bg-charcoal-deep px-4 pb-4 pt-2 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-truck"
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={close} className="btn-primary mt-2 w-full">
            Post Load
          </a>
        </div>
      )}
    </header>
  );
}
