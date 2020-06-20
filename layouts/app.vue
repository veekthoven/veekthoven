<template>
  <div>
    <div class="container">
      <div class="flex justify-center">
        <div class="w-full md:w-7/12">
          <div class="flex justify-center sm:justify-start pb-2 pt-4">
           <menu-links />
          </div>  
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
<script>
	import menuLinks from '~/components/menuLinks.vue'
	export default {
		components: {menuLinks}
	}
</script>
