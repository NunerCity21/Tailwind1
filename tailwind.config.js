/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'class': "url('backgroundImage.jpeg')", // Use 'class' as the key
      }
    },
  },
  plugins: [],
}
