/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: "#00D7FF",
        orange: "#FF851C",
        navyblue: "#242A37",
        navy:"#3E4E6C",
        black: "#282828",
        gray: "#B9C3C8",
        dirtywhite:"F2F3F7",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
