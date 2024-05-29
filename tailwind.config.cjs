/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#00D8A5",
        secondary: "#7E43AD",
        "body-color": "#462C64",
        "gray-color": "",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        'sans-jp': ['Noto Sans JP', 'sans-serif'],
        sans: ['Hiragino Sans', 'ヒラギノ角ゴシック', 'Hiragino Kaku Gothic Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        hiragino: ['Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴシック', 'sans-serif']
      },
      skew: {
        '25': '25deg',
        '-25': '-25deg',
      },
    },
  },
};
