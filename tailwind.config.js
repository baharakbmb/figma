/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./features.html"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        yellow: "#FCD980",
        "dark-blue": "#282938",
        Grey: "#F4F6FC",
        "royal-Blue":"#2405F2"
      },
    },
  },
  plugins: [require("daisyui")],
};
