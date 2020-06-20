
export default {
  mode: 'universal',
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=32' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=16' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=96' }
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
    '@nuxtjs/axios',
  ],
  axios: {
  },
  build: {
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}
