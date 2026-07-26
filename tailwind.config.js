/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lime: {
          50: "#f3ffe0",
          100: "#e4ffb0",
          200: "#d2ff7a",
          300: "#bdff42",
          400: "#a6ff00",
          500: "#8fe000",
          600: "#71b400",
          700: "#548600",
          800: "#3a5c00",
          900: "#233600",
        },
        ink: {
          950: "#080b09",
          900: "#0b0f0d",
          850: "#0f1512",
          800: "#131a16",
          700: "#1a221d",
          600: "#232d26",
          500: "#334038",
          400: "#54655a",
          300: "#7c8f82",
          200: "#aab8ad",
          100: "#d7e0da",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(166,255,0,0.15), 0 8px 24px -8px rgba(166,255,0,0.35)",
        node: "0 6px 0 0 rgba(0,0,0,0.35)",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(166,255,0,0.45)" },
          "50%": { boxShadow: "0 0 0 10px rgba(166,255,0,0)" },
        },
      },
      animation: {
        pop: "pop 0.25s ease-out",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
