/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbc500",
        transparentblack : "rgba(0,0,0,0.35)",
        darkgray: "#10161D",
        iconcolor: "#666666",
        iconcolorsecundary: "#4c5a67",
        descriptioncolor: "#8a8d98",
        linkcolor : "#999c9f",
        linkhover: "#d5d5d5",
        buttonnavigation: "#1c252f",
        buttonnavigationhover : "#383d47",
        reservationbutton: "rgba(255,255,255,0.3)",
        reservationbuttonhover: "rgba(255,255,255,0.8)",
        accent: "#78a6b8",
        accentlighter: "#d9e8ed"
      }
    },
  },
  plugins: [],
}
