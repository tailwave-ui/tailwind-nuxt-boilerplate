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
  modules: [
    '@nuxtjs/color-mode',
    [
      '@nuxtjs/i18n',
      {
        /* module options */
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        vueI18n: './i18n.config.ts'
      }
    ]
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  devtools: { enabled: true },
})
