/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#96b713",
        oceanicblue:"#96b7c0",
        carrot:"#f49684",
        firered:"#eb6547",
        golden:"#dec7ac",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        charcoal:"#252429",
        gray:"#efefef"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1140px'
    },
  },
  plugins: [],
};