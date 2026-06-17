// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'nuxt-auth-utils',
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-mongoose',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],
  css: ['~/assets/css/main.css'],
  mongoose: {
    options: {
      dbName: 'blackjack',
    },
  },
  runtimeConfig: {
    session: {
      cookie: {
        secure: false,
        sameSite: 'lax',
      },
    },
  },
})
