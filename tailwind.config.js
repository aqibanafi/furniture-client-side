/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#062037",
        
"secondary": "#202020",
        
"accent": "#f927b0",
        
"neutral": "#272A35",
        
"base-100": "#E6E5EB",
        
"info": "#3967DB",
        
"success": "#1E9956",
        
"warning": "#DE9012",
        
"error": "#ED5250",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
