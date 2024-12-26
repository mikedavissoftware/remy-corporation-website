/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: {
        banner: "url('/src/assets/images/backdrop.png')"
      },
      dropShadow: {
        light1: '1px 1px 1px rgb(0 0 0 / 0.40)',
        light2: '2px 2px 2px rgb(0 0 0 / 0.40)',
        light3: '3px 3px 3px rgb(0 0 0 / 0.40)',
        light4: '4px 4px 4px rgb(0 0 0 / 0.40)',
        light5: '5px 5px 5px rgb(0 0 0 / 0.40)',
        medium1: '1px 1px 1px rgb(0 0 0 / 0.60)',
        medium2: '2px 2px 2px rgb(0 0 0 / 0.60)',
        medium3: '3px 3px 3px rgb(0 0 0 / 0.60)',
        medium4: '4px 4px 4px rgb(0 0 0 / 0.60)',
        medium5: '5px 5px 5px rgb(0 0 0 / 0.60)',
        dark1: '1px 1px 1px rgb(0 0 0 / 0.80)',
        dark2: '2px 2px 2px rgb(0 0 0 / 0.80)',
        dark3: '3px 3px 3px rgb(0 0 0 / 0.80)',
        dark4: '4px 4px 4px rgb(0 0 0 / 0.80)',
        dark5: '5px 5px 5px rgb(0 0 0 / 0.80)'
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1E191A",  
          "secondary": "#BABD9C",    
          "accent": "#ACB28E",               
          "neutral": "#E8E9DE",                
          "base-100": "#f4f4f4",                
          "info": "#2E75B6",                
          "success": "#84cc16",                
          "warning": "#ef4444",                
          "error": "#ffffff",
          ".btn-contact": {
            "height": "2.2rem",
            "min-height": "2.2rem",
          },
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}