/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "gray": "rgba(0, 0, 0, 0)",
        "cadetblue": "#19a8bd",
        "darkcyan": "#148ea1",
        "white": "#fff",
        "blue": "#174055",
        "darkslategray": "#174055",
        "whitesmoke": "#e8eaec"
      },
      "spacing": {},
      "fontFamily": {
        head: ["Inter", "sans-serif"],
        text: ["Source Sans 3", "sans-serif"]
      },
      "borderRadius": {
        "4xl": "23px"
      }
    },
    "fontSize": {
      "sm": "14px",
      "base": "16px",
      "inherit": "inherit"
    },
    "screens": {
      "md": {
        "max": "960px"
      },
      "sm": {
        "max": "420px"
      }
    }
  },
  "corePlugins": {
    "preflight": false
  }
}