import filters from "tailwindcss-filters";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
        mono: ["var(--font-roboto-mono)"],
        general: ['"Lato"', "serif"],
        firstLetter: ['"Playwrite"', "serif"],
        heading: ['"CloisterBlack"', "serif"],

      },
      colors: {
        dark: "#111827",
        extraLight:"#9ca3af",
        light: "#6b7280",
        primary: "#D2CAC2",
        hoveredCard:'#b6ada1',
        secondary: "#d6d6d6",
        accent: "#ff5c5c",
        text: "#3d4340",
        background: "#f5f5f5",
        userMgtBg: "#FFECEC",
        primaryDark: "#58E6D9",
        secondaryDark: "#58E6D9",
        inputOnFocus: "#c7c6eb",
      },
      backgroundImage: {
        'BG': "url('/src/assets/images/Free-Textured-Paper-Background.jpg')",
        'burnt-bg': "url('src/assets/images/transparent-realistic-style-old-paper-old-parchment-paper-grim-old-dirty-parchment-with-worn-rough-1710924527082.webp')",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        xs: { max: "479px" },
      },
    },
  },
  plugins: [],
};
