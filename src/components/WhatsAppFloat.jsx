import { SITE } from "../config/site.js";

export function buildWhatsAppHref(number, message = "") {
  const digits = String(number || "").replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppHref(SITE.whatsappNumber, `Hi ${SITE.name}! I want to book a load / send a parcel.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book instantly on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] p-4 text-white shadow-card transition-all duration-300 hover:shadow-glow sm:bottom-6 sm:right-6"
    >
      <span aria-hidden className="animate-ping-ring absolute inset-0 rounded-full bg-[#25D366]/50" />
      <svg viewBox="0 0 32 32" className="relative h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.7 6L4 29l8.2-1.6c1.2.6 2.5.9 3.8.9 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-1.1 0-2.3-.3-3.3-.8l-.6-.3-4.9 1 1-4.7-.4-.6A9.2 9.2 0 016.8 15C6.8 9.9 11 5.8 16 5.8S25.2 9.9 25.2 15 21 25 16 25zm5.1-6.8c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
      </svg>
      <span className="relative max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[12rem] group-hover:opacity-100">
        Book on WhatsApp
      </span>
    </a>
  );
}
