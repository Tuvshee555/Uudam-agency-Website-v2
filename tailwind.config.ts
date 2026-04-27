import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0a0d14",
        cream: "#f5f1ea",
        gold: "#c8a363",
        mist: "#dfe5ee",
      },
      letterSpacing: { tightest: "-0.04em" },
    },
  },
  plugins: [],
};
export default config;
