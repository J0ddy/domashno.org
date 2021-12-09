module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': "#48a923"
      },
      backgroundImage: {
        'hero': "url('/src/img/bg.jpeg')",
        'hero2': "url('/src/img/hero2.jpeg')",
       },
       stroke: {
        current: 'currentColor',
      },
      stroke: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
        'black': theme('colors.black'),
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
