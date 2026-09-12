import { TRUST } from "../config/site.js";

const SHIELD = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4.5" />
  </svg>
);

export default function Trust() {
  return (
    <section id="trust" className="scroll-mt-20 border-t border-charcoal-line bg-charcoal-deep/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="section-kicker">Trust &amp; Credibility</p>
          <h2 className="section-title">
            Backed by institutions, <span className="text-truck">not just promises.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {TRUST.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl border border-charcoal-line bg-charcoal-panel/70 p-8 text-center shadow-card"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-truck/15 text-truck">
                {SHIELD}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{t.title}</h3>
              <p className="mt-1 text-sm font-semibold text-truck">{t.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.desc}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-400">
          Freight rates move with live reverse bids — the number you accept is the number you pay. Token advances are
          collected only to lock bookings and are never the freight value.
        </p>
      </div>
    </section>
  );
}
