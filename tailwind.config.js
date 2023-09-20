/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [],
  purge: [
    './index.html',
    './src/**/*.vue', // Add Vue files
    './src/**/*.js', // Add JavaScript files
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans:['inter var', ... defaultTheme.fontFamily.sans]
      },
      colors:{
        'blue': '#1DA1F2',
        'darkblue': '#2795D9',
        'lightblue':'#EFF9FF',
        'dark': '#657786',
        'light': '#AAbbc2',
        'lighter':'#E1EBED',
        'lightest': '#F5F8FA'
      }
    },
  },
  plugins: [],
}

