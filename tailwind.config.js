/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ask-nicely-purple': '#6b097a',
        'ask-nicely-blue': '#274bdb',
        'ask-nicely-light-gray': 'rgba(255, 255, 255, 0.6)',
        'ask-nicely-gray-dark': '#2f384c',
        'ask-nicely-header-purple': '#5C1F94'
      }
    },
  },
  plugins: [],
}

