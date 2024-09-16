/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/apps/everstake-eth-staking/**/**/*.{js,ts,jsx,tsx,html,mdx}', './src/apps/everstake-eth-staking/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: 'class',
  theme: {
   
    extend: {
      colors: {
        white: '#ffffff',
        black: '#111111',
        yellow: '#f5be37',
        'yellow-selection': 'rgba(245, 190, 55, 0.2)',
        gray: 'rgba(33, 33, 33, 0.4)',
        'gray-border': '#404040',
        'gray-light': '#5b5b5b',
        'gray-1': '#828282',
        'gray-2': '#b2b2b2',
        dark: '#171717',
        'gray-dark': '#565656',
        'gray-dark-1': '#212121',
        'gray-light-1': '#b2b2b2',
        'gray-light-2': '#b1b1b1',
        'gray-light-3': 'rgba(255, 255, 255, 0.3)',
        'red-input': '#c70000',
        green: '#bbff9b',
        red: '#ff5353',
        'gray-gradient': 'linear-gradient(186.33deg, rgba(64, 64, 64, 0.4) 4.99%, rgba(64, 64, 64, 0.2) 94.95%)',
      },
      fontFamily: {
        custom: ['Formular'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};