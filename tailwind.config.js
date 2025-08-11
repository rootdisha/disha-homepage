/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED2E2D',
        secondary: '#EACF74'
      },
      fontFamily: {
        monument: ['"Monument Extended"', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

// Color accents
// Primary: #ED2E2D
// Secondary: #EACF74
// Neutral: black/white base.