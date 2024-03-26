/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "rgba(0, 0, 0, 0)",
        cadetblue: "#19a8bd",
        darkcyan: "#148ea1",
        white: "#fff",
        blue: "#174055",
        darkslategray: "#174055",
        whitesmoke: "#e8eaec",
        dimgray: "#52525b",
        gray: {
          100: "#01252a",
          200: "rgba(0, 0, 0, 0)",
          400: "rgba(255, 255, 255, 0.4)",
          500: "rgba(0, 0, 0, 0.4)",
          600: "#18181b",
          700: "rgba(255, 255, 255, 0.89)",
        },
        white: "#fff",
        cadetblue: "#19a8bd",
        darkcyan: {
          100: "#168fa1",
          200: "#148ea1",
        },
        aliceblue: "#eafaff",
        black: "#000",
        darkslategray: {
          100: "#174055",
          200: "#033c4e",
          300: "#33475b",
        },
        darkslateblue: "#154d8e",
        slategray: "#3d667a",
        whitesmoke: {
          100: "#f5f8fa",
          200: "#e8eaec",
        },
        lightgray: "#cbd6e2",
        silver: "#bfbfbf",
        red: "#ff0000",
      },
      spacing: {},
      fontFamily: {
        head: ["Inter", "sans-serif"],
        text: ["Source Sans 3", "sans-serif"],
      },
      borderRadius: {
        "4xl": "23px",
      },
    },
    fontSize: {
      base: "16px",
      "2xl": "21px",
      mid: "17px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "17xl": "36px",
      sm: "14px",
      xs: "12px",
      smi: "13px",
      "3xl": "22px",
      "10xl": "29px",
      "19xl": "38px",
      "6xl-4": "25.4px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      md: {
        max: "960px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};