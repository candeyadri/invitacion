/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'fondo': '#F9F6ED',
      'rojo':'#C14F4D',
      'verde':'#AABE99',
      'naranja':'#EB882A'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'serif': ['DM Serif Display', 'serif'],
      'cormorant': ['Cormorant', 'serif']
    },
    extend: {
      backgroundImage: {
        'fondoVerde': 'url(./images/fondoV.svg)',
      }

    },
  },
  plugins: [],
}

