import { SERVICES } from "../config/site.js";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-charcoal-line bg-charcoal-deep/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="section-kicker">Active Services</p>
          <h2 className="section-title">
            Two networks, <span className="text-truck">one platform.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.badge}
              className="group rounded-3xl border border-charcoal-line bg-charcoal-panel/70 p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-truck/40"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-truck/15 px-3 py-1 text-xs font-extrabold tracking-widest text-truck">
                  {s.badge}
                </span>
                <span className="h-px flex-1 bg-charcoal-line" />
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
                  LIVE
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">{s.title}</h3>
              <ul className="mt-5 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-truck" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="btn-primary mt-7 w-full">
                Book on this service
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
