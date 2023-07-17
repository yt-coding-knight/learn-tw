/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fill,minmax(300px,1fr))",
      },
    },
  },
  plugins: [],
}
