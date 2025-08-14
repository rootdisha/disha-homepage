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
        primarytwo: '#D51312',
        secondary: '#EACF74',
        secondarytwo: '#E3C048',
        tbd: '#aaaaaa', // parts marked as TBD
        bgmain: '#2D2C2E', // main background
        bgother: '#464548',  // nav bar
        whitetwo: '#FAF5E6',
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