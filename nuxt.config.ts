// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css:[
    '~/assets/css/global.css'
  ],
  modules: [
    'nuxt-svgo',
    '@nuxt/ui',
    '@nuxt/fonts',
  ],
  svgo:{
    defaultImport: 'component',
  },
  colorMode:{
    preference:'dark'
  },
  runtimeConfig:{
    public: {
      baseApiGateway: process.env.API_GATEWAY ?? 'http://localhost:8080',
    }
  }
})
