/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px'
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

