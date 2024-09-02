/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor':'#28A745', 
        'primaryButton':'#1F4B43',
        'primaryButton2':'#E7C873',
        'textColor':'#1A1A1A',
      }
    },
  },
  plugins: [],
}