/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
<<<<<<< HEAD
        'primary' : "#5f6FFF"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill , minmax(200px , 1fr))'
=======
        'primary':'#5F6FFF'
>>>>>>> 66cd174411b056e40124bd25c8db42fc65194bfb
      }
    },
  },
  plugins: [],
}