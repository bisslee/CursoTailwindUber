/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],   
  theme: {
    extend: {
      backgroundImage:{
        'uber': "url('/public/img/bguber.png')",
        'city': "url('/public/img/bg-city.png')",
      },
    },
  },
  plugins: [],
}

