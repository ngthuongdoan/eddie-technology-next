const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: '#9D9D9D',
        primary: '#1E3163',
        accent: '#F8F0DF',
        background: '#E8F6EF',
      },
    },
  },
  variants: {
    extend: {
      shadow: {
        inner: ['focus'],
      },
    },
  },
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
