import { useMemo } from "react";
import { CORRIDORS } from "../config/site.js";

/** Deterministic 0..1 hash so the radar looks identical on every render. */
function hash01(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967296;
}

function polar(r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
}

function arcPath(r, a1, a2) {
  const p1 = polar(r, a1);
  const p2 = polar(r, a2);
  const large = a2 - a1 > 180 ? 1 : 0;
  return `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${large} 1 ${p2.x} ${p2.y}`;
}

export default function LiveRadar() {
  const { blips, hubs } = useMemo(() => {
    const blips = [];
    const hubs = [];
    CORRIDORS.forEach((c, ci) => {
      const start = ci * (360 / CORRIDORS.length);
      const spread = 360 / CORRIDORS.length - 18;
      const count = Math.max(2, Math.round(c.trucks / 14));
      for (let i = 0; i < count; i++) {
        const angle = start + hash01(`${c.from}${i}`) * spread;
        const radius = 40 + hash01(`${c.to}${i}`) * 90;
        const p = polar(radius, angle);
        blips.push({
          id: `${c.from}-${c.to}-${i}`,
          x: +p.x.toFixed(1),
          y: +p.y.toFixed(1),
          delay: (hash01(`${c.from}-${i}`) * 4).toFixed(2) + "s",
        });
      }
      const hubAngle = start + spread / 2;
      const HUB_RADII = [150, 178, 122]; // endpoint hubs near the rim, intermediate hub further in
      const hubNames = [c.from, c.to]; // intermediate hubs render unlabeled
      HUB_RADII.forEach((r, ri) => {
        if (ri < c.hubs) {
          const p = polar(r, hubAngle);
          hubs.push({
            id: `${c.from}-${c.to}-hub-${ri}`,
            x: +p.x.toFixed(1),
            y: +p.y.toFixed(1),
            name: hubNames[ri] ?? null,
          });
        }
      });
    });
    return { blips, hubs };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md" role="img" aria-label="Live radar of active Y2Wait freight corridors and parcel hubs">
      <div className="relative aspect-square overflow-hidden rounded-full border border-charcoal-line bg-charcoal-deep shadow-glow">
        {/* range rings */}
        <div aria-hidden className="absolute inset-0 rounded-full">
          <div className="absolute inset-[6%] rounded-full border border-charcoal-line/70" />
          <div className="absolute inset-[22%] rounded-full border border-charcoal-line/70" />
          <div className="absolute inset-[38%] rounded-full border border-charcoal-line/70" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-charcoal-line/50" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-charcoal-line/50" />
        </div>

        {/* sweeping beam */}
        <div
          aria-hidden
          className="animate-radar-sweep absolute inset-[6%] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(249,115,22,0.45) 0deg, rgba(249,115,22,0.08) 55deg, transparent 90deg, transparent 360deg)",
          }}
        />
        {/* leading edge */}
        <div aria-hidden className="animate-radar-sweep absolute inset-0">
          <div className="absolute left-1/2 top-[3%] h-[10%] w-[2px] -translate-x-1/2 rounded bg-truck shadow-glow" />
        </div>

        {/* corridor arcs */}
        <svg aria-hidden viewBox="-200 -200 400 400" className="absolute inset-0 h-full w-full">
          {CORRIDORS.map((c, i) => {
            const start = i * (360 / CORRIDORS.length) + 4;
            const end = (i + 1) * (360 / CORRIDORS.length) - 22;
            return (
              <path
                key={c.from + c.to}
                d={arcPath(115, start, end)}
                fill="none"
                stroke="rgba(249,115,22,0.55)"
                strokeWidth="1.5"
                strokeDasharray="4 7"
              />
            );
          })}
          {/* truck load blips */}
          {blips.map((b) => (
            <g key={b.id} className="animate-blip" style={{ animationDelay: b.delay, transformOrigin: `${b.x}px ${b.y}px` }}>
              <circle cx={b.x} cy={b.y} r="4.5" fill="#f97316" />
              <circle cx={b.x} cy={b.y} r="8" fill="none" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
            </g>
          ))}
          {/* parcel hubs */}
          {hubs.map((h) => (
            <g key={h.id}>
              <circle cx={h.x} cy={h.y} r="5" fill="#22d3ee" />
              <circle cx={h.x} cy={h.y} r="9" fill="none" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
              {h.name && (
                <text x={h.x} y={h.y - 14} textAnchor="middle" fontSize="11" fill="#a5f3fc" fontWeight="600">
                  {h.name}
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* center readout */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-extrabold text-truck">{blips.length}</div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">active loads</div>
        </div>
      </div>

      {/* legend */}
      <div className="mt-4 flex items-center justify-center gap-5 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-truck" /> Active truck loads
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" /> Parcel hubs
        </span>
        <span className="hidden items-center gap-1.5 sm:flex">
          <span className="h-0.5 w-5 rounded bg-truck/60" /> Corridors
        </span>
      </div>
    </div>
  );
}
