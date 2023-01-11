/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "print": { "raw": "print" },
      },
      colors: {
        primary: "#312e81",
        secondary: "#ecc94b",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        profile: ["Oswald"],
      },
    },
  },
  plugins: [],
};
