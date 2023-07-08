/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#696969",
        "light-grey": "#696969",
        yellow: "#FFD200",
        gold: "#FFD300",
        corduroy: "#5F7465",
        tapa: "#727270",
      },
    },
  },
  plugins: [],
};
