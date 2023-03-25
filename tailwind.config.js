/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        base: '1173px',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
      },
      fontSize: {
        22: '1.375rem',
        26: '1.625rem',
        28: '1.75rem',
        40: '2.5rem',
        50: '3.125rem',
      },
      colors: {
        brand: {
          weird: {
            100: '#C2B29F',
            200: '#A89176',
          },
          gray: {
            100: '#D4D4D4',
            200: '#BDBDBD',
            300: '#B1B1B1',
            400: '#939393',
            500: '#808080',
            600: '#6C6C6C',
            700: '#595959',
            800: '#505050',
            900: '#404040',
          },
          dark: '#262626',
        },
      },
      borderRadius: {
        15: '15px',
      },
      boxShadow: {
        base: '0px 4px 20px rgba(0, 0, 0, 0.06);',
        menu: '0px 0.5px 4px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
};
