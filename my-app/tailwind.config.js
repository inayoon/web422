/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#F96162",
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
