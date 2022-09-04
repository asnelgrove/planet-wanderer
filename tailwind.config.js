/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBlue: '0f1983',
        lightBlue: '#87e6fa',
        black: '#000',
        white: '#fff'
      }
    },
  },
  plugins: [],
}
