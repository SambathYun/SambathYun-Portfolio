/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gap: {
        2: "8px", //gap item
        4: "16px", //gap card
      },
    },
  },
  plugins: [],
};
