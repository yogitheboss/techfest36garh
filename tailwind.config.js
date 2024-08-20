/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/assets/2151487268.jpg')",  
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scroll-snap-type-y-mandatory': {
          'scroll-snap-type': 'y mandatory',
        },
        '.scroll-snap-align-start': {
          'scroll-snap-align': 'start',
        },
      });
    },
  ],
}