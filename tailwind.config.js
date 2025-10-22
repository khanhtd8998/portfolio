/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"], // bật dark mode theo class .dark
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.5" }],
        md: ["16px", { lineHeight: "1.6" }],
        lg: ["18px", { lineHeight: "1.6" }],
        xl: ["20px", { lineHeight: "1.6" }],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #6366F1, #A855F7)",
        "gradient-secondary": "linear-gradient(to right, #3B82F6, #06B6D4)",
        "gradient-accent": "linear-gradient(to right, #F97316, #EC4899)",
      },
      colors: {
        nimevoli: "var(--nimevoli)",
        "text-1": "var(--text-1)",
        "text-title": "var(--text-title)",
        "bg-primary": "var(--bg-primary)",
      },
      boxShadow: {
        custom:
          "inset 0px -1px 1px hsla(0, 0%, 100%, 0.5), 0 4px 6px -1px hsla(0, 0%, 0%, 0.2), 0 2px 4px -2px hsla(0, 0%, 0%, 0.2), inset 0px 1px 3px hsla(0, 0%, 0%, 0.1)",
        elevated:
          "inset 0px -1px 1px hsla(0, 0%, 100%, 0.5), 0 4px 6px -1px hsla(0, 0%, 0%, 0.2), 0 2px 4px -2px hsla(0, 0%, 0%, 0.2), inset 0px 1px 3px hsla(0, 0%, 0%, 0.1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        heartbeatline: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        heartbeatline: "heartbeatline 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
