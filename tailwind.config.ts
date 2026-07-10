import type { Config } from "tailwindcss";

/**
 * JLS Tecnologia — Design System
 * Direction: "Blueprint / Engineered Depth" (dark technical)
 * Dominant: deep petroleum/teal-navy · Accent: luminous aqua/cyan · CTA: warm amber/gold
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dominant petroleum/teal canvas (from the JLS cloud logo)
        petrol: {
          950: "#06141a",
          900: "#0a1f24",
          850: "#0d262c",
          800: "#0f2d34",
          700: "#123b42",
          600: "#1a4a52",
          500: "#2f7d89",
          400: "#4a8a96",
        },
        // Luminous accent — product glow, links, highlights
        aqua: {
          DEFAULT: "#3fe0cf",
          soft: "#7ff0e3",
          deep: "#1fb9a8",
        },
        // Warm contrast — CTAs only (WhatsApp, "Conhecer o sistema")
        gold: {
          DEFAULT: "#f4b23e",
          deep: "#e0991f",
        },
        // Text
        cream: "#e9f5f3",
        mist: "#9fc2c0",
        dim: "#6b8d8c",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "76rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 48px" },
        },
        "caret-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.4,0,0.2,1) both",
        "fade-in": "fade-in 0.8s ease both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        "caret-blink": "caret-blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
