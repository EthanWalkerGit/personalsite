/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '23vh': '20vh',
        '10vh': '10vh',
        '20vw': '20vw',
        '7vh': '7vh'
      },
      maxHeight: {
        'mainImage': '500px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
      },
      colors: {
        mainGreen: '#1aa31f',
        card: '#e3e3e3',
        main: '#f2f2f2',
        home: '#f4ffe8',
      },
    },
  },
  plugins: [],
}

