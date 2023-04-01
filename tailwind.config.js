/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],

  theme: {
    colors: {
      gray: {
        50: '#D5D3D8',
        100: '#B9B6BD',
        200: '#908A8F',
        300: '#817E8C',
        400: '#38363E',
        500: '#24222C',
        600: '#1B1923',
      },
      white: '#FFFFFF',
      yellow: '#F8BA1A',
      transparent: 'transparent',
    },

    boxShadow: {
      card: '-2px 2px 0px rgba(0, 0, 0, 0.1)',
    },

    extend: {
      height: {
        cover: '75px',
      },
      width: {
        cover: '50px',
      },
      maxWidth: {
        'content-container': '820px',
      },
      gridTemplateColumns: {
        main: 'calc(68% - 20px) calc(32% - 20px)',
      },
    },
  },

  plugins: [],
}
