/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkgray: "rgba(175, 175, 175, 0.5)",
        black: "#000",
        lightgray: "#d7d7d7",
        mediumaquamarine: "#30b795",
      },
      spacing: {},
      fontFamily: {
        "mona-sans": "Mona-Sans",
      },
    },
    fontSize: {
      "13xl": "2rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
