module.exports = {
  purge: [
    // Paths to your HTML/JS files that are using Tailwind classes
    "./src/**/*.html",
    "./src/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light","dark",],
  },
};
