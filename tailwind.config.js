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
        "darkslategray": "#174055",
        "whitesmoke": "#e8eaec"
      },
      "spacing": {},
      "fontFamily": {
        "montserrat": "Montserrat",
        "arial": "Arial",
        "arial-black": "'Arial Black'"
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