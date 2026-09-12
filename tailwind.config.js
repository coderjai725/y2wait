/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1a1a1f",
          deep: "#121215",
          panel: "#222228",
          line: "#33333c",
        },
        truck: {
          DEFAULT: "#f97316",
          dark: "#ea580c",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0,0,0,0.6)",
        glow: "0 0 24px -4px rgba(249,115,22,0.45)",
      },
    },
  },
  plugins: [],
};
