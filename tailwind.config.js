/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkBlue': "#020C31",
        'lightBlue': "#001970",
        'lightGray': ' #C2C2C2',
        'solidBlue': '#001970',
        'solidRed' : '#BB0404',
        'xfixYellow': '#FFCE31',
      },
      backgroundImage: {
        'formBg' : "url('/src/components/Assets/image/delivery.jpg')",
      }
    },
  },
  plugins: [],
}
