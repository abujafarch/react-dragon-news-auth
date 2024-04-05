
import learnMoreBg from '/src/assets/1.png'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ' "Poppins", sans-serif'
      },
      backgroundImage:{
        // 'learnMoreBg': `url(${learnMoreBg})`,
        'learn-more-bg':"url('/src/assets/bg.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

