/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        react: '#61dafb',
        node: '#43853d',
        tailwind: '#0ea5e9',
        psql: '#336791',
        js: '#f7df1e'
      },
      fontFamily: {
        'sans': "Outfit"
      }
    },
  },
  plugins: [],
}
