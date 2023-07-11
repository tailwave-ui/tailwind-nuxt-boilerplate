// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', "@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  modules: [],
  devtools: { enabled: true }
})
