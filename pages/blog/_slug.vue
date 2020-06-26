<template>
	<div class="mb-3 mt-2">
		<h3 class="text-2xl font-extrabold mt-3 mb-0">{{ article.title }}</h3>
		<p class="text-xs text-gray-600 font-bold mb-3">{{ createdAt }}</p>
		<div class="tags mb-3 mt-2" v-if="article.tags">
			<a 
				href="" 
				v-for="tag in article.tags" 
				class="px-3 py-1 mr-2 rounded-full bg-gray-300 text-gray-500 text-xs font-medium hover:bg-gray-400 hover:text-gray-600">
				{{ tag }}
			</a>
		</div>
		<div class="mb-3 text-gray-800">	
			<nuxt-content :document="article" />
		</div>

		<p class="text-xs text-gray-700 mb-1">Sharing is love ❤️</p>
		<div class="sharethis-inline-share-buttons mb-5"></div>
		<hr class="text-gray-600 mt-5 mb-3">
		<p class="text-xl font-bold">Subscribe to my newsletter</p>
		<p class="text-gray-700 mb-3">
			I love sharing about things i find interesting. That could be new technology, movie, music, my faith, etc. If that sounds interesting to you, drop your email below and i will periodically send you interesting stuff. No spam, i promise.
		</p>
		<newsletter class="mb-5 pb-5 px-1"/>
	</div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
import newsletter from '~/components/newsletter.vue'
import moment from 'moment'
export default {
	components: {menuLinks, newsletter},
	layout: 'app',
	async asyncData ({ $content, params }) {
		const article = await $content(params.slug || 'index').fetch()
		return {
			article
		}
	},
	computed: {
		createdAt () {
			return moment(this.article.createdAt).format('MMMM D, YYYY');
		}
	}
}
</script>