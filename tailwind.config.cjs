/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      primary: 'League Spartan'
    },
    extend: {
      colors: {
        primary: {
          dark: '#521e4f',
          light: '#925082'
        },
        secondary: '#f8f2f9'
      }
    }
  },
  plugins: []
}
