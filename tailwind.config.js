/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
     require('flowbite/plugin')({
      charts: true,
  }),
     require("daisyui"),
     require("tw-elements/dist/plugin.cjs")
  ],
  darkMode: "class"
}