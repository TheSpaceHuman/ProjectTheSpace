import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },

  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui.js',
    { src: '@/plugins/element-ui', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-svg-sprite-module', {
      directory: '~/assets/icons/sprites',
      options: {
        // Configuration options:
        // https://github.com/jkphl/svg-sprite#configuration-basics
      }
    }],
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'EN.js'
        },
        {
          code: 'ru',
          iso: 'ru-RU',
          file: 'RU.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'ru'
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
