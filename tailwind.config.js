/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#78BBFA",

          secondary: "#E7F4FF",

          accent: "#275077",

          neutral: "#051321",

          "base-100": "#fff",

          info: "#7D858D",

          success: "#F5F5F5",

          warning: "#F39112",

          error: "#F2182A",
        },
      },
    ],
  },
};
