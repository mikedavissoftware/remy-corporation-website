/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}