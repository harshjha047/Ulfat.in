/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1026px', // changed from 1024px to 1026px
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}