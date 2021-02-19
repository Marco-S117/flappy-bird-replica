export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Live server config
  server: {
    port: 8080,
    host: '0.0.0.0'
  },

  // Netlify
  generate: {
    fallback: true
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'flappy-bird-replica',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      /* icon options */
      source: 'static/icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons',
      purpose: ['any', 'maskable']
    },
    manifest: {
      name: 'Flappy Bird - Made with Nuxt Js',
      short_name: 'Flappy Bird - Replica',
      description: '',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#333333',
      lang: 'en',
      useWebmanifestExtension: false,
    },
    meta: {
      /* meta options */
      nativeUI: true,
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
      favicon: 'https://nuxt-flappy-bird.netlify.app/favicon.ico',
      name: 'Flappy Bird - Made with Nuxt Js',
      author: 'Marco Polino',
      description: '',
      lang: 'en',
      ogType: 'website',
      ogSiteName: 'Flappy Bird - Replica',
      ogTitle: 'Flappy Bird - Made with Nuxt Js',
      ogDescription: '',
      ogHost: 'https://nuxt-flappy-bird.netlify.app/',
      ogImage: 'https://nuxt-flappy-bird.netlify.app/og-image.png',
      ogUrl: 'https://nuxt-flappy-bird.netlify.app/'
    },
    workbox: {
      // /* workbox options */
      // enabled: true // enable to test PWA on localhost, disable for prod
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
