/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily : {
        montserrat : "'Montserrat', sans-serif",
        oswald : "'Oswald', sans-serif",
        alegreya : "'Alegreya', serif",
      }
    },
  },
  plugins: [],
}

