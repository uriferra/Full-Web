/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css,html}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'purple-700': '#7b1fa2',
        'pink-200': '#FFB6C1',
        'white-200': '#FFF4D4',
        'black-gray-200': '#362F2B',
        'black-gray-800': '#141214',
        'deep-blue-800': '#0C0E21',
      },
      textColor:{
        'gold-200': '#FAEEDC',
        'gold-400': '#EBCB23',
      }
    },
  },
  plugins: [],
}
