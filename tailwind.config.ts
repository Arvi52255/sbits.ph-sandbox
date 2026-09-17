import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          soft: "#131C31",
        },
        slate: {
          950: "#0B1220",
          900: "#131C31",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E6EA",
          100: "#EEF1F4",
          50: "#F5F7F9",
        },
        paper: "#F3F5F7",
        signal: {
          DEFAULT: "#4A4CE8",
          light: "#6C6EF0",
          dark: "#3634C2",
        },
        circuit: {
          DEFAULT: "#17C3A2",
          dark: "#0EA085",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(11,18,32,0.04)",
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-dots": "22px 22px",
      },
      keyframes: {
        pulseline: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulseline: "pulseline 3.2s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
