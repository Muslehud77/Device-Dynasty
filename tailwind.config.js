/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/preline/dist/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("preline/plugin"),
    require("daisyui"),
    require("@sira-ui/tailwind"),
  ],
};
