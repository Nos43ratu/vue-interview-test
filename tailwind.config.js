module.exports = {
  purge: ["./src/**/*.{vue,js}"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
