/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": ".65rem",
        "3xs": ".55rem",
      },
      backgroundOpacity: {
        1: "0.01",
        2: "0.02",
        3: "0.03",
      },
    },
  },
  plugins: [],
};
