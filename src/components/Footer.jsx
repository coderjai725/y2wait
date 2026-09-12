import { SITE } from "../config/site.js";
import { buildWhatsAppHref } from "./WhatsAppFloat.jsx";

const QUICK_LINKS = [
  { href: "#radar", label: "Live Radar" },
  { href: "#booking", label: "Post a Load" },
  { href: "#services", label: "Services" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#trust", label: "Trust & Credibility" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-line bg-charcoal-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-truck font-extrabold text-charcoal-deep">
              Y2
            </span>
            <span className="text-lg font-extrabold text-white">
              Y2<span className="text-truck">Wait</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{SITE.tagline}</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-300 transition-colors hover:text-truck">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal &amp; Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            <li>
              Govt. MSME Udyam Reg. No: <span className="font-semibold text-slate-100">UDYAM-MN-05-0040029</span>
            </li>
            <li>Incubated at IIIT Manipur</li>
            <li>
              <a
                href={buildWhatsAppHref(SITE.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-truck"
              >
                WhatsApp: {SITE.whatsappNumber}
              </a>
            </li>
            <li>
              <a href={`mailto:hello@y2wait.in`} className="transition-colors hover:text-truck">
                hello@y2wait.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-line py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. Student tech venture, incubated at IIIT Manipur.
      </div>
    </footer>
  );
}
