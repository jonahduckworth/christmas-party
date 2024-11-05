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
        "party-green": "#006400",
        "party-gold": "#ffd700",
      },
      fontFamily: {
        comic: ['"Comic Sans MS"', "cursive"],
      },
      animation: {
        "snowfall-1": "snowfall-1 30s linear infinite",
        "snowfall-2": "snowfall-2 20s linear infinite",
        "snowfall-3": "snowfall-3 15s linear infinite",
      },
      keyframes: {
        "snowfall-1": {
          from: { backgroundPosition: "0 0, 0 0, 0 0" },
          to: {
            backgroundPosition: "100px 1000px, 150px 1000px, -100px 1000px",
          },
        },
        "snowfall-2": {
          from: { backgroundPosition: "0 0, 0 0, 0 0" },
          to: {
            backgroundPosition: "-150px 1000px, 100px 1000px, 200px 1000px",
          },
        },
        "snowfall-3": {
          from: { backgroundPosition: "0 0, 0 0, 0 0" },
          to: {
            backgroundPosition: "-100px 1000px, 200px 1000px, -150px 1000px",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
