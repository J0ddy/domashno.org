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
       }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
