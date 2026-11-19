const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2563eb",
          secondary: "#3b82f6",
          accent: "#93c5fd",
          neutral: "#111827",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#93c5fd",
          secondary: "#60a5fa",
          accent: "#2563eb",
          neutral: "#f9fafb",
          "base-100": "#1f2937",
        },
      },
      {
        highcontrast: {
          primary: "#ffff00",
          secondary: "#000000",
          accent: "#ffff00",
          neutral: "#000000",
          "base-100": "#000000",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
};