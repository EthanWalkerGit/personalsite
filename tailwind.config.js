/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '20vh': '20vh',
        '10vh': '10vh',
        '14vh': '14vh',
        '20vw': '20vw',
        '7vh': '7vh',
        'homePadding': '65vh;',
        'mobilePadding': '40vh',
      },
      margin: {
        '14vh': '14vh',
        'homeMargin': '65vh;',
        'mobileMargin': '40vh',
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
        card: '#ebebeb',
        main: '#f2f2f2',
        home: '#f4ffe8',
        lightText: '#696969',
      },
    },
  },
  plugins: [],
}

