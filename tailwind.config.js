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
      'half': '25%',
      'md': '3px',
    },
    extend: {
      colors: {
        'tal-blue': '#0b79bf',
        'dark-gray': '#4d4d4f',
        'dark-gray-extra': 'rgb(64, 64, 66)',
        'light-gray': 'rgb(213, 213, 213)',
        'gray-rgba': 'rgba(255,255,255,0.6)'
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

  