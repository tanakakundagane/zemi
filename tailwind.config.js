/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        green:'#00a497',
        blue:'#00a3af',
        heading:'#302833',
        body:'#2b2b2b',
        light:'#e7e7eb',
        pinkLight:'#fdeff2',
        yellowLight:'#f4dda5',
        purpleLight:'#dbd0e6',
        redLight:'#e597b2',
      }
    },
  },
  plugins: [],
}
