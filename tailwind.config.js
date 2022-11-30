/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem"
    },
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
    }
  },
  plugins: [],
}
