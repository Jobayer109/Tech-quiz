/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ead69f",

          secondary: "#d1a9e8",

          accent: "#a7b52d",

          neutral: "#19191F",

          "base-100": "#FDFCFD",

          info: "#3088D5",

          success: "#49DACB",

          warning: "#F6A655",

          error: "#E75F6F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
