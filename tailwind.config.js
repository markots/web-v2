/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Outfit:['Outfit', 'sans-serif']
    },
    backgroundImage:{
      'vision-bg-mobile': "url('../public/images/vision_bg_mobile.svg')",
      'vision-bg': "url('../public/images/vision_bgimg.svg')",
       'vision-bg-tablet': "url('../public/images/vision_bg_tablet.svg')",
      
    }
  },
  plugins: [],
}

