/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'card': '63 / 88',
      }
    },
    fontFamily: {
      'Forbidden-Stars': ['ForbiddenStars','sans-serif'],
      'Friz-Quadrata': ['FrizQuadrata','sans-serif'],
      'headliner': ['HeadlinerNo45','sans-serif'],
    },
    fontSize: {
      clamp: ['clamp(1rem, 2.75cqh, 1.45rem)', '1.45rem'],
      'clamp-xl': ['clamp(2rem, 2cqw, 3cqh)', 'clamp(2.5rem, 2.5cqw, 3rem)'],
    }
  },
  plugins: [],
}

