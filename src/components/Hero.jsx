const STATS = [
  { value: "40–50%", label: "return trips run empty today" },
  { value: "0%", label: "broker commission on Y2Wait" },
  { value: "≤ 12 hr", label: "bus parcel express delivery" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-truck/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <p className="section-kicker">Truck Freight · Bus Parcel Express</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Trucks shouldn&apos;t run back <span className="text-truck">empty.</span>
          <br />
          Parcels shouldn&apos;t <span className="text-truck">wait.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Y2Wait connects traders &amp; shippers directly with truck owners through{" "}
          <strong className="text-white">reverse bidding</strong> — killing the 15–20% broker cut and
          filling the 40–50% of return trips that run empty. Plus a 12-hour bus parcel express network riding the
          empty boot space of intercity buses.
        </p>

        {/* 3 main CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#booking" className="btn-primary sm:text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 16V6a1 1 0 011-1h9v11M13 9h4l4 4v3h-2" />
              <circle cx="7" cy="17.5" r="2" />
              <circle cx="17" cy="17.5" r="2" />
            </svg>
            Post Freight Load
          </a>
          <a href="#booking" className="btn-ghost sm:text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
              <path d="M3 8l9 5 9-5M12 13v8" />
            </svg>
            Send Bus Parcel
          </a>
          <a href="#booking" className="btn-ghost sm:text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
            </svg>
            Attach Vehicle / Partner With Us
          </a>
        </div>

        {/* proof stats */}
        <dl className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-charcoal-line bg-charcoal-panel/60 px-5 py-4 shadow-card"
            >
              <dt className="order-2 text-xs font-medium text-slate-400">{s.label}</dt>
              <dd className="order-1 text-2xl font-extrabold text-truck sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-xs font-medium text-slate-500">
          Incubated at IIIT Manipur · Govt. MSME Udyam Registered (UDYAM-MN-05-0040029)
        </p>
      </div>
    </section>
  );
}
