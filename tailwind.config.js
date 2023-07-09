/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textcolor:"#FFFFFF "
      }
    },
    fontFamily: {
      Outfit:['Outfit', 'sans-serif']
    }
  },
  plugins: [],
}

