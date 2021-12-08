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
       }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
