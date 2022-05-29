module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./public/icons/*.svg",
  ],
  theme: {
    borderRadius:{
      'full': '50%',
      'half': '25%'
    },
    extend: {
      colors: {
        'tal-blue': '#0b79bf',
        'dark-gray': '#4d4d4f',
      }
    },
  },
  plugins: [],
}

  