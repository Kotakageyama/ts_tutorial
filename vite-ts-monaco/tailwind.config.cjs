/** @type {import('tailwindcss').Config} */
const { join } = require('path')
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'index.html'),
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        kosugimaru: ['Kosugi Maru'],
        azeretmono: ['Azeret Mono'],
      },
    },
    daisyui: {
      themes: ['cupcake', 'dark', 'cmyk'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
