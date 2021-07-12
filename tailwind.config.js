const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Arial', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#202526',
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      primary: {
        100: '#C8FADF',
        200: '#93F5CA',
        300: '#5BE3B4',
        400: '#32C8A2',
        500: '#00A48A',
        600: '#008D83',
        700: '#007276',
        800: '#00535F',
        900: '#003D4E',
      },
      secondary: {
        100: '#DEE3FD',
        200: '#BFC8FB',
        300: '#9CA9F5',
        400: '#818EEB',
        500: '#5968DE',
        600: '#414DBE',
        700: '#2C379F',
        800: '#1C2480',
        900: '#11166A',
      },
      tertiary: {
        100: '#FCF8E8',
        200: '#F9F1D2',
        300: '#EDE1B6',
        400: '#DCCC9C',
        500: '#C5B079',
        600: '#A99058',
        700: '#8D723C',
        800: '#725626',
        900: '#5E4217',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
