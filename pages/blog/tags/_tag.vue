<template>
	<div class="mb-3 mt-2">
		<h3 class="text-2xl font-extrabold mt-3 mb-3">Articles tagged "{{ $route.params.tag }}"</h3>
		<div v-if="!articles.length">
			<h3 class="font-medium text-gray-600">There are no articles tagged "{{ $route.params.tag }}"</h3>
		</div>
		<div class="mb-5" v-for="(article, index) in articles" :key="index" v-else>
			<h3 class="text-xl font-bold">
				<nuxt-link class="text-gray-900 hover:underline" :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{ article.title }}</nuxt-link>
			</h3>
			<p class="text-gray-700 text-sm">{{ article.description }}</p>
			<nuxt-link class="text-xs font-medium inline-flex items-center" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
				Read this article
				<svg class="h-4 w-4 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
			</nuxt-link>
		</div>
		<button 
			class="border py-1 rounded-lg focus:outline-none font-medium text-xs px-3"
			@click="loadMoreArticles"
			:class="{'loader': fetching}"
			v-if="articles.length > 9"
		>
		More articles</button>
	</div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
import moment from 'moment'
export default {
	components: {
		menuLinks
	},
	layout: 'app',
	data () {
		return {
			currentPage: 1,
			fetching: false
		}
	},
	async asyncData ({ error, $content, params }) {
		if (!params.tag) {
			return error({ statusCode: 404, message: 'This page could not be found' });
		}
		const articles = await $content().where({ 'tags': { $contains: params.tag } }).limit(10).sortBy('createdAt', 'desc').fetch()
		return {
			articles
		}
	},
	methods: {
		async loadMoreArticles() {
			this.fetching = true
			const moreArticles = await this.$content()
				.where({ 'tags': { $contains: this.$route.params.tag } })
				.limit(10)
				.skip(10 * this.currentPage)
				.sortBy('createdAt', 'desc')
				.fetch();
			this.articles = this.articles.concat(moreArticles)
			this.currentPage++
			this.fetching = false;
		}
	}
}
</script>