/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
        extend: {},
        screens: {
            sm: { max: "767px" },
            md: { min: "768px", max: "1023px" },
            lg: { min: "1024px", max: "1279px" },
            xl: { min: "1280px", max: "1535px" },
            "2xl": { min: "1536px" },
        },
    },
    plugins: [],
};
