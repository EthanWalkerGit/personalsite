/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '2/3vh': '23vh',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
      },
      colors: {
        mainGreen: '#1aa31f',
      },
    },
  },
  plugins: [],
}

