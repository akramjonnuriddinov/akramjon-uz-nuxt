/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#00dc82",
          blue: "#0072bc",
          dark: "#18181b",
          purple: "#ff6bed",
          red: "#d23669",
          gray: "eaedf3",
          light: "#fafcfc",
        },
        secondary: {
          dark: "#212737",
        },
      },
    },
  },
  plugins: [],
}
