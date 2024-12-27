/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // این مسیرها باید درست باشند
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#ec4899",
      },
    },
  },
  plugins: [],
};
