// ─── Y2Wait site configuration ────────────────────────────────────────────────
// Everything a non-dev operator needs to touch lives in this one file.

export const SITE = {
  name: "Y2Wait",
  tagline: "No Empty Return Trips. No Brokers. No Waiting.",
  whatsappNumber: "+91XXXXXXXXXX", // ← paste your WhatsApp number with country code
  razorpayPaymentButtonId: "", // ← paste your Razorpay Payment Button ID here ("plink_…"/button id)

  // Reverse-bidding token advance (nominal, collected only to lock the booking)
  tokenAdvance: {
    amount: 499, // ₹ — nominal token amount
    note: "Token advance only — locks your truck/parcel slot. Balance is settled on confirmed assignment, never here.",
  },
};

export const CORRIDORS = [
  { from: "Patna", to: "Ranchi", trucks: 34, hubs: 2, km: 335, ratePerKm: 11 },
  { from: "Imphal", to: "Guwahati", trucks: 21, hubs: 2, km: 610, ratePerKm: 16 },
  { from: "Delhi", to: "Kolkata", trucks: 57, hubs: 3, km: 1540, ratePerKm: 13 },
  { from: "Silchar", to: "Agartala", trucks: 12, hubs: 1, km: 580, ratePerKm: 15 },
];

export const SERVICES = [
  {
    badge: "FTL",
    title: "Truck Freight & Return-Load Matching",
    points: [
      "40–50% of return trips run empty today — we fill them.",
      "Reverse bidding: carriers bid down, you pay the lowest rate.",
      "The 15–20% broker cut is eliminated, not squeezed.",
      "Token-advance booking locks your truck in minutes, not days.",
    ],
  },
  {
    badge: "EXPRESS",
    title: "Bus Parcel Express Network",
    points: [
      "Intercity parcels ride the empty boot space of passenger buses.",
      "12-hour / same-day delivery on active bus corridors.",
      "Cheapest per-kg express rates on tier-2 ↔ tier-2 routes.",
      "Hub pickup & drop at the bus stations you already know.",
    ],
  },
];

export const ROADMAP = [
  { title: "Yard Management", desc: "Slot-in, slot-out visibility for truck yards and transshipment points." },
  { title: "Cold Chain", desc: "Temperature-assured reefer matching for perishable freight." },
  { title: "Air Cargo", desc: "First-mile aggregation into scheduled belly and freighter capacity." },
];

export const TRUST = [
  {
    title: "Incubated at IIIT Manipur",
    subtitle: "Student Tech Venture",
    desc: "Built and incubated on campus at the Indian Institute of Information Technology, Manipur.",
  },
  {
    title: "Govt. MSME Udyam Registered",
    subtitle: "Reg No: UDYAM-MN-05-0040029",
    desc: "Recognised under the Government of India MSME Udyam registration regime.",
  },
];
