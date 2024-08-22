module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
