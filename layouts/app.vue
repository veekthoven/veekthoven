<template>
  <div>
    <div class="container">
      <div class="flex justify-center">
        <div class="w-full md:w-9/12 lg:w-7/12 px-1">
          <div class="flex justify-center sm:justify-start pb-2 pt-4">
           <menu-links />
          </div>  
        </div>
      </div>
    </div>
    <div class="container">
      <div class="flex justify-center">
        <div class="w-full md:w-9/12 lg:w-7/12 px-3"> 
          <nuxt />
        </div>
      </div>
    </div>

    <!-- <div class="container my-5 pb-5">
      <div class="flex justify-center">
        <div class="w-full md:w-9/12 lg:w-7/12 px-1">
          <div class="text-center">
            <footer-links />
          </div>  
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
	import menuLinks from '~/components/menuLinks.vue'
  import footerLinks from '~/components/footerLinks.vue'
	export default {
		components: {menuLinks, footerLinks}
	}
</script>
