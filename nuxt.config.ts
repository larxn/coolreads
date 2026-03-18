// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components', // will auto import any component within /components
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: ['lib/composables'],
  },

  modules: ['@vueuse/nuxt'],

  css: ['@/assets/css/main.css'],

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@': ['.'],
          '@/*': ['./*'],
        },
      },
    },
  },
})
