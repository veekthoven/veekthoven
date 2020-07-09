<template>
  <div class="h-screen flex justify-center items-center text-center">
    <div class="flex justify-center py-2 absolute top-0 left-0 right-0">
      <menu-links />
    </div>
    <div class="container mx-3">
      <div class="w-40 h-40 rounded-full mx-auto shadow mb-3 overflow-hidden">
        <!-- <img class="w-40 h-40 rounded-full shadow" src="https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=500"> -->
        <img class="object-cover object-center w-full h-48 rounded-full shadow" src="/image.jpg" alt="Victor Abbah Nkoms">
      </div>
      <h3 class="text-3xl font-extrabold">Hi, my name is Victor Abbah Nkoms.</h3>
      <p class="text-xl text-gray-600">I'm a full-stack developer based in Kaduna, Nigeria.</p>
      <nuxt-link class="text-xs font-medium inline-flex items-center text-gray-500" :to="{ name: 'about'}">
        Read more about me
        <svg class="h-4 w-4 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </nuxt-link>
    </div>
    <div class="flex justify-center py-2 absolute bottom-0 left-0 right-0">
      <ul>
        <footer-links />
      </ul>
    </div>
  </div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
import footerLinks from '~/components/footerLinks.vue'
export default {
  components: {menuLinks, footerLinks},
  head () {
      return {
        title: 'Victor Abbah Nkoms - Software Developer based in Kaduna, Nigeria',
        meta: [
          { name: 'description', content: "Hi, my name is Victor Abbah Nkoms. I\'m a full-stack developer based in Kaduna, Nigeria." },
          { name: "twitter:card", content: "summary"},
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: "twitter:site", content: "@veekthoven"},
          { name: "twitter:creator", content: "@veekthoven"},
          { name: "og:title", content: "Victor Abbah Nkoms - Software Developer based in Kaduna, Nigeria"},
          { name: "og:description", content: "Hi, my name is Victor Abbah Nkoms. I\'m a full-stack developer based in Kaduna, Nigeria."},
          { name: "og:image", content: "https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=1200"}
        ]
      }
  }  
}
</script>
