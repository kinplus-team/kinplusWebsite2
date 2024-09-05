/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    
  },
  variants: {
    fill: ["hover", "focus"], // for svg hover
  },
  plugins: [],
};