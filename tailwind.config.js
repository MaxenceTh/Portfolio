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
        customeBlue: '#00f0ff',
      },
    },
  },
  plugins: [],
}

