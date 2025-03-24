/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // If you need aspect ratio support for YouTube embeds:
    // require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    // You can list multiple themes or just one:
    themes: ["light"],
  },
};
