module.exports = {
  content: [
    // Paths to your HTML/JS files that are using Tailwind classes
    "./src/**/*.html",
    "./src/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      Family: {
        roboto: ['Roboto', 'sans'],
      },
      backgroundColor: {
        'hb': 'rgba(244, 204, 204, 0.85)',
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light","dark",],
  },
};
