
export default {
  mode: 'universal',
  target: 'static',
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=32' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=16' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=96' }
    ],
    script:[
      {
        type: 'text/javascript',
        src: 'https://platform-api.sharethis.com/js/sharethis.js#property=5ef61ec032ef500012dcd85e&product=inline-share-buttons',
        async: 'async'
      }
    ]
  },
  loading: { color: '#0083FF' },
  css: [
    '@/assets/css/tailwind.css',
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/content'
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)
        document.readingTime = text
      }
    }
  },
  content: {
    markdown: {
        prism: {
          theme: '@/assets/prism-themes/prism-material-oceanic.css'
        }
      }
  },
  build: {
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}
