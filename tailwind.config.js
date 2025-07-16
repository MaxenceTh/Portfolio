/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#fcee0a', // Une teinte personnalisée
        customBlue: '#00FFF7',
        customPink: '#FF00F7'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ccc',
            a: { color: '#00FFF7' },
          },
        },
      },
      boxShadow: {
        neon: '0 0 10px #00FFF7, 0 0 20px #FF00F7',
      },
    },
  },
  plugins: [],
}

