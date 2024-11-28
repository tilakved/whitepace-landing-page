/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#043873'
      },
      fontFamily:{
        inter:"inter,'Courier New', Courier, monospace",
        DMSans:"DM Sans,'Courier New', Courier, monospace"
      },
      backgroundImage: {
        'hero-bg': "url('src/assets/hero_bg.png')",
      }
    },
  },
  plugins: [],
}