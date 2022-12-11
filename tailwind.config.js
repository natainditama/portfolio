const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Kanit", ...defaultTheme.fontFamily.sans],
      body: ["Lexend", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        light: colors.neutral[50],
        dark: colors.neutral[800],
        ...colors,
      },
    },
  },
  plugins: [],
};
