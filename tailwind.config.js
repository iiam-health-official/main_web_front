/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./website/src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "gray": "rgba(255, 255, 255, 0)",
        "white": "#fff",
        "darkslategray": "#174055",
        "whitesmoke": "#e8eaec"
      },
      "spacing": {},
      "fontFamily": {
        "montserrat": "Montserrat",
        "arial-black": "'Arial Black'",
        "arial": "Arial"
      }
    },
    "fontSize": {
      "base": "16px",
      "inherit": "inherit"
    }
  },
  "corePlugins": {
    "preflight": false
  }
}
