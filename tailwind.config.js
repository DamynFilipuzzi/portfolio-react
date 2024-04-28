/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontsize: {
      "2sm": "0.5rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },

      custom: "640px",
      custom2: "840px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      listStyleImage: {
        cross: 'url("/src/assets/cross.svg")',
      },
      colors: {
        "back-primary": "#31313c",
        footer: "#0f0f14",
        laravel: "#F9322C",
        php: "#4F5B93",
        mysql: "#00758f",
        js: "#f48131",
        jquery: "#78cff5",
        html: "#d35c3b",
        css: "#2f54e5",
        ajax: "#3b89bf",
        bootstrap: "#702cf5",
        docker: "#1d63ed",
        postgresql: "#336791",
        react: "#149eca",
        aws: "#ec912d",
        tailwind: "#38bdf8",
        firebase: "#ffcc30",
        nodejs: "#4d9942",
        vercel: "#0a0a0a",
        nextjs: "#4d9942",
        python: "#f7ce43",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    backgroundImage: {},
  },
  plugins: [require("tailwindcss-animate")],
};
