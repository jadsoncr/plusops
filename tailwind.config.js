/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      fontSize: {
        'hero-lg': ['4rem', { lineHeight: '1.03' }],
        'hero-xl': ['4.5rem', { lineHeight: '1.02' }],
      },
      colors: {
        'plus-indigo': '#4f46e5',
      }
    },
  },
  plugins: [],
}