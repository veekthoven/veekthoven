<template>
  <div>
  	<div class="flex justify-center py-2">
      <menu-links />
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
