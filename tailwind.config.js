/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6838DC",
        darkBg: "#0A0425",
        lightBg: "#F7F6FE"
      }
    },
  },
  plugins: [],
}

