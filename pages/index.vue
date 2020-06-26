<template>
  <div class="h-screen flex justify-center items-center text-center">
    <div class="flex justify-center py-2 absolute top-0 left-0 right-0">
      <menu-links />
    </div>
    <div class="container mx-3">
      <div class="w-40 h-40 rounded-full mx-auto shadow mb-3">
        <img class="w-40 h-40 rounded-full shadow" src="https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=500">
      </div>
      <h3 class="text-3xl font-extrabold">Hi, my name is Victor Abbah Nkoms.</h3>
      <p class="text-xl text-gray-600">I'm a full-stack developer based in Kaduna, Nigeria.</p>
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
  components: {menuLinks, footerLinks}
}
</script>
