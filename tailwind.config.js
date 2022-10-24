/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'] 
      },
    },
    colors: {
      primary: '#17181A',
      secondary: '#7FC5ED',
      light: '#FF5151',
      dark: '#1E1E26',
      ash: '#0F0D0D',
      white: '#fff'
    },
  },
  plugins: [],
}
