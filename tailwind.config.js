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
      primary: '#312e81',
      secondary: '#ecc94b',
    },
    fontFamily: {
      profile: ['Oswald']
    }
  },
  plugins: [],
}
