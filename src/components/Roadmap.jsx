import { ROADMAP } from "../config/site.js";

const ICONS = {
  "Yard Management": (
    <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6M9 11h.01M15 11h.01" />
  ),
  "Cold Chain": (
    <path d="M10 2v20M10 2l-3 3m3-3l3 3M10 22l-3-3m3 3l3-3M2 10h20M2 10l3-3m-3 3l3 3M22 10l-3-3m3 3l-3 3" />
  ),
  "Air Cargo": (
    <path d="M17.8 19.2L16 11l3.5-3.5a2.1 2.1 0 00-3-3L13 8 4.8 6.2a.5.5 0 00-.5.8L8 11l-3 3H2.5a.5.5 0 00-.35.85l2.85 2.65L7.65 20.2a.5.5 0 00.85-.35V17l3-3 3.95 3.7a.5.5 0 00.85-.5z" />
  ),
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="section-kicker">Future Roadmap</p>
          <h2 className="section-title">
            What&apos;s shipping <span className="text-truck">next.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ROADMAP.map((r) => (
            <article
              key={r.title}
              className="relative rounded-3xl border border-dashed border-charcoal-line bg-charcoal-panel/40 p-8 transition-colors hover:border-truck/40"
            >
              <span className="absolute right-5 top-5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Coming Soon
              </span>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-charcoal-deep text-truck shadow-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {ICONS[r.title]}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
