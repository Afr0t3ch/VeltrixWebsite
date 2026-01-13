import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        veltrix: {
          red: "#E53935",
          green: "#00E676",
          yellow: "#FFD600",
          dark: "#0B0F14"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,230,118,0.35)"
      },
      backdropBlur: {
        glass: "12px"
      }
    }
  },
  plugins: []
};
export default config;
