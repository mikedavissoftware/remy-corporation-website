/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

const colors = require('tailwindcss/colors')

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "litegold": "#DCDECD",
        "wdblue": "#005CB8",
        "wdbluepastel": "#0A55B6",
        "primarylite": "#2090ff",
        "wdorange": "#F08A21",
        "secondarylite": "#ffb870",
        "orred": "#F80000",
        ...colors
      },
      backgroundImage: {
        banner: "url('/src/assets/images/backdrop.png')"
      },
      dropShadow: {
        "light1": '1px 1px 1px rgb(0 0 0 / 0.40)',
        "light2": '2px 2px 2px rgb(0 0 0 / 0.40)',
        "light3": '3px 3px 3px rgb(0 0 0 / 0.40)',
        "light4": '4px 4px 4px rgb(0 0 0 / 0.40)',
        "light5": '5px 5px 5px rgb(0 0 0 / 0.40)',
        "medium1": '1px 1px 1px rgb(0 0 0 / 0.60)',
        "medium2": '2px 2px 2px rgb(0 0 0 / 0.60)',
        "medium3": '3px 3px 3px rgb(0 0 0 / 0.60)',
        "medium4": '4px 4px 4px rgb(0 0 0 / 0.60)',
        "medium5": '5px 5px 5px rgb(0 0 0 / 0.60)',
        "dark1": '1px 1px 1px rgb(0 0 0 / 0.80)',
        "dark2": '2px 2px 2px rgb(0 0 0 / 0.80)',
        "dark3": '3px 3px 3px rgb(0 0 0 / 0.80)',
        "dark4": '4px 4px 4px rgb(0 0 0 / 0.80)',
        "dark5": '5px 5px 5px rgb(0 0 0 / 0.80)',
        "glow1": '0px 0px 1px rgb(255 255 255 / 1)',
        "glow2": '0px 0px 2px rgb(255 255 255 / 1)',
        "glow3": '0px 0px 3px rgb(255 255 255 / 1)',
        "glow4": '0px 0px 4px rgb(255 255 255 / 1)',
        "glow5": '0px 0px 5px rgb(255 255 255 / 1)',
      },
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#005CB8",
          "secondary": "#F08A21",
          "accent": "#ACB28E",               
          "neutral": "#E8E9DE",                
          "base-100": "#f4f4f4",                
          "info": "#2E75B6",                
          "success": "#84cc16",                
          "warning": "#ef4444",                
          "error": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
})