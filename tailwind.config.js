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
        secondary: '#EACF74',
        tbd: '#aaaaaa',
        black2: '#2D2C2E',
        black4: '1a1a1a',
        white2: '#FAF5E6',
      },
      fontFamily: {
        monument: ['"Monument Extended"', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        hypesunset: ['Hyperion Sunset','sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

// Color accents
// Primary: #ED2E2D
// Secondary: #EACF74
// Neutral: black/white base.