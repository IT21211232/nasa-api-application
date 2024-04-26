/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'bp1130': '1130px', // Custom breakpoint at 1130px
      },
    },
  },
  plugins: [],
}

