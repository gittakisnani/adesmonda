/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textBlack: "var(--text-black)",
        textGold: "var(--text-gold)",
        textRed: "var(--text-red)",
      },
      borderRadius: {
        radius: "24px"
      }
    },
  },
  plugins: [],
}