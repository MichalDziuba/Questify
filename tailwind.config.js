/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: "#00D7FF",
        orange: "#FF851C",
        navyblue: "#242A37",
        navy: "#3E4E6C",
        black: "#282828",
        gray: "#B9C3C8",
        darkwhite: "#F2F3F7",
        deepblue: "#15395A",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        questShadows:
          "3px 4px 4px 0px rgba(21, 57, 90, 0.03), -3px -4px 4px 0px rgba(21, 57, 90, 0.03)",
      },
    },
  },
  plugins: [],
};
