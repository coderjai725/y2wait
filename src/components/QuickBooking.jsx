import { useState } from "react";
import { SITE } from "../config/site.js";
import { buildWhatsAppHref } from "./WhatsAppFloat.jsx";

const SERVICES = ["Truck FTL Freight", "Bus Parcel Express"];
const VEHICLES = ["Open Body", "Container", "Flatbed / Trailer", "Reefer"];

const fmtINR = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function QuickBooking() {
  const [values, setValues] = useState({
    service: SERVICES[0],
    pickup: "",
    drop: "",
    vehicle: VEHICLES[0],
    weight: "",
  });
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [k]: value }));
    // Clear the field's error on edit so a message never outlives the value it was raised for.
    setErrors((prev) => {
      if (!(k in prev)) return prev;
      const next = { ...prev };
      delete next[k];
      return next;
    });
  };

  const validate = () => {
    const errs = {};
    if (!values.pickup.trim()) errs.pickup = "Pickup city is required.";
    if (!values.drop.trim()) errs.drop = "Drop city is required.";
    const w = Number(values.weight);
    if (!values.weight.trim() || !Number.isFinite(w) || w <= 0) errs.weight = "Enter a valid weight in kg.";
    return errs;
  };

  const detailsOk = Object.keys(validate()).length === 0;

  const openLead = () =>
    window.open(
      buildWhatsAppHref(
        SITE.whatsappNumber,
        `Hi ${SITE.name}! Quick booking request:\n• Service: ${values.service}\n• Route: ${values.pickup || "—"} → ${values.drop || "—"}\n• Vehicle: ${values.vehicle}\n• Weight: ${values.weight || "—"} kg\nPlease confirm availability and freight rate.`
      ),
      "_blank",
      "noopener,noreferrer"
    );

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) openLead();
  };

  return (
    <section id="booking" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="section-kicker">Quick Booking</p>
            <h2 className="section-title">
              Lock your load with a <span className="text-truck">token advance.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Enter route details, pay a nominal {fmtINR(SITE.tokenAdvance.amount)} token via Razorpay — the booking
              is locked and carriers start reverse-bidding instantly. Full freight is settled only on confirmed
              assignment.
            </p>
          </div>

          <form
            id="y2wait-booking-form"
            onSubmit={onSubmit}
            noValidate
            className="mt-10 rounded-3xl border border-charcoal-line bg-charcoal-panel/70 p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="bk-service" className="field-label">Service</label>
                <select id="bk-service" className="field" value={values.service} onChange={set("service")}>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="bk-pickup" className="field-label">Pickup city</label>
                <input
                  id="bk-pickup"
                  className="field"
                  placeholder="e.g. Imphal"
                  value={values.pickup}
                  onChange={set("pickup")}
                  aria-invalid={!!errors.pickup}
                />
                {errors.pickup && <p className="mt-1.5 text-xs font-medium text-red-400">{errors.pickup}</p>}
              </div>

              <div>
                <label htmlFor="bk-drop" className="field-label">Drop city</label>
                <input
                  id="bk-drop"
                  className="field"
                  placeholder="e.g. Guwahati"
                  value={values.drop}
                  onChange={set("drop")}
                  aria-invalid={!!errors.drop}
                />
                {errors.drop && <p className="mt-1.5 text-xs font-medium text-red-400">{errors.drop}</p>}
              </div>

              <div>
                <label htmlFor="bk-vehicle" className="field-label">Vehicle type</label>
                <select id="bk-vehicle" className="field" value={values.vehicle} onChange={set("vehicle")}>
                  {VEHICLES.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="bk-weight" className="field-label">Approx. weight (kg)</label>
                <input
                  id="bk-weight"
                  className="field"
                  inputMode="numeric"
                  placeholder="e.g. 5000"
                  value={values.weight}
                  onChange={set("weight")}
                  aria-invalid={!!errors.weight}
                />
                {errors.weight && <p className="mt-1.5 text-xs font-medium text-red-400">{errors.weight}</p>}
              </div>
            </div>
          </form>

          {/* Razorpay form stays a sibling of the booking form — the parser drops nested <form> tags. */}
          <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-charcoal-line bg-charcoal-panel/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="text-xs leading-relaxed text-slate-400">{SITE.tokenAdvance.note}</p>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
              <button type="submit" form="y2wait-booking-form" className="btn-ghost">
                Send details on WhatsApp
              </button>
              {SITE.razorpayPaymentButtonId ? (
                <form action="https://payments.razorpay.com/embedded" method="POST" target="_blank">
                  <input type="hidden" name="button_id" value={SITE.razorpayPaymentButtonId} />
                  <button type="submit" className="btn-primary">
                    Pay {fmtINR(SITE.tokenAdvance.amount)} token advance
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  disabled={!detailsOk}
                  title={detailsOk ? undefined : "Fill route details first"}
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => openLead()}
                >
                  Pay {fmtINR(SITE.tokenAdvance.amount)} token advance
                </button>
              )}
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] text-slate-500">
            Demo mode: Razorpay Payment Button ID not configured yet — add it in <code className="rounded bg-charcoal-deep px-1 py-0.5 text-slate-300">src/config/site.js</code> to take live token payments.
          </p>
        </div>
      </div>
    </section>
  );
}
