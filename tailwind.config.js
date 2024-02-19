/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background':"url('../public/subtle-prism.svg')",
        'stairs':"url('../public/cornered-stairs.svg')",
      }
    },
  },
  plugins: [],
}

