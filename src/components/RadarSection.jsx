import LiveRadar from "./LiveRadar.jsx";
import { CORRIDORS } from "../config/site.js";

const TICKER_ITEMS = [
  ...CORRIDORS.map(
    (c) =>
      `${c.from} → ${c.to} · ${c.trucks} trucks live · lowest reverse bid ₹${(c.km * c.ratePerKm).toLocaleString("en-IN")}`
  ),
  ...CORRIDORS.map((c) => `${c.to} → ${c.from} · return-load open · bid now, truck leaves in ${Math.max(2, Math.round(c.trucks / 10))} hr`),
  "Bus Express: Imphal → Guwahati parcel · picked up 09:40 · delivery in 11 hr 12 min",
  "Bus Express: Patna → Ranchi parcel · hub handover complete · same-day confirmed",
];

export default function RadarSection() {
  const tickerRows = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicated for a seamless -50% loop

  return (
    <section id="radar" className="relative scroll-mt-20 border-y border-charcoal-line bg-charcoal-deep/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Live Network Radar</p>
            <h2 className="section-title">
              Watch loads move <span className="text-truck">in real time.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
              Every sweep is a live lane. Orange blips are trucks currently carrying or bidding on loads; cyan nodes
              are parcel hubs on our Bus Express network. When a truck drops its load, its return trip appears here —
              and traders bid it down.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CORRIDORS.map((c) => (
                <div key={`${c.from}-${c.to}`} className="rounded-xl border border-charcoal-line bg-charcoal-panel/60 p-4 shadow-card">
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    <span>
                      {c.from} <span className="text-truck">→</span> {c.to}
                    </span>
                    <span className="rounded-full bg-truck/15 px-2 py-0.5 text-xs font-bold text-truck">{c.trucks} live</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-charcoal-deep">
                    <div className="h-full rounded-full bg-truck" style={{ width: `${Math.min(100, c.trucks * 1.5)}%` }} />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>{c.km.toLocaleString("en-IN")} km</span>
                    <span>{c.hubs} parcel hub{c.hubs === 1 ? "" : "s"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <LiveRadar />
        </div>
      </div>

      {/* live ticker */}
      <div className="mt-14 overflow-hidden border-y border-charcoal-line bg-charcoal-deep py-3" aria-hidden>
        <div className="animate-ticker flex w-max gap-10 whitespace-nowrap text-xs font-medium text-slate-400">
          {tickerRows.map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-truck" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
