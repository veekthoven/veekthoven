<template>
	<div class="mb-3 mt-2">
		<h3 class="text-2xl font-extrabold mt-3">Articles</h3>
		<p class="text-gray-600 mb-4">These are my musings and opinions (Oh! and i can be opinionated) about various topics. Hopefully you will find them educating, entertaining, thought-provoking, or maybe even all.</p>
		<div v-if="!articles.length">
			<h3 class="font-medium text-gray-600">There are no articles</h3>
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
export default {
	components: {menuLinks},
	layout: 'app',
	data () {
		return {
			currentPage: 1,
			fetching: false
		}
	},
	async asyncData ({ $content, params }) {
		const articles = await $content().limit(10).sortBy('createdAt', 'desc').fetch()
		return {
			articles
		}
	},
	methods: {
		async loadMoreArticles() {
			this.fetching = true
			const moreArticles = await this.$content()
				.limit(10)
				.skip(10 * this.currentPage)
				.sortBy('createdAt', 'desc')
				.fetch();
			this.articles = this.articles.concat(moreArticles)
			this.currentPage++
			this.fetching = false;
		}
	},
	head () {
	    return {
	      title: 'Victor Abbah Nkoms - Articles',
	      meta: [
	        { name: 'description', content: "Hi, my name is Victor Abbah Nkoms. I\'m a full-stack developer based in Kaduna, Nigeria." },
	        { name: "twitter:card", content: "summary"},
	        { name: "twitter:site", content: "@veekthoven"},
	        { name: "twitter:creator", content: "@veekthoven"},
	        { name: "og:title", content: "Victor Abbah Nkoms - Articles"},
	        { name: "og:description", content: "Hi, my name is Victor Abbah Nkoms. I\'m a full-stack developer based in Kaduna, Nigeria."},
	        { name: "og:image", content: "https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=96"}
	      ]
	    }
	}  
}
</script>