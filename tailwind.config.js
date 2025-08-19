/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  // rest of the config
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      //bg-gradient colors
      backgroundImage: {
        "gradient-orange": "linear-gradient(to bottom right,#f97316, #fb923c )", //orange-500 ke orange-400
        "gradient-orange-hover": "linear-gradient(to right,#ea580c, #f97316 )", //blue-500 ke sky-600
      },
    },
  },
  plugins: [],
};
