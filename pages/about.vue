<template>
	<div class="container">
		<div class="flex justify-center">
			<div class="w-full md:w-7/12 px-2">	
				<div class="mb-3 mt-2">
					<h3 class="text-3xl font-extrabold mb-3">About me</h3>
					<div>
						<p class="mb-3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						</p>

						<p class="mb-3">
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						</p>

						<p class="mb-3">
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
export default {
  components: {menuLinks},
  layout: 'app'
}
</script>