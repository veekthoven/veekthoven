<template>
	<div class="mb-3 mt-2">
		<h3 class="text-2xl font-extrabold mt-3 mb-0">{{ article.title }}</h3>
		<p class="text-xs text-gray-600 font-bold mb-3">
			{{ createdAt }}
			<span class="text-xs mx-1">•</span>
			{{ article.readingTime }}
		</p>
		<div class="tags mb-3 mt-2" v-if="article.tags">
			<nuxt-link
				:to="{ name: 'blog-tags-tag', params: { tag: tag } }"
				v-for="(tag, index) in article.tags"
				:key="index"
				class="px-3 py-1 mr-2 rounded-full bg-gray-300 text-gray-500 text-xs font-medium hover:bg-gray-400 hover:text-gray-600">
				{{ tag }}
			</nuxt-link>
		</div>

		<div class="mb-3 mt-5">
			<img :src="article.image.url" class="w-full rounded-lg shadow" :alt="article.title">
			<p class="text-xs text-gray-600 mt-1" v-if="article.image.caption">{{ article.image.caption }}</p>
		</div>

		<div class="mb-3 text-gray-800">	
			<nuxt-content :document="article" />
		</div>
		
		<hr class="text-gray-600 mt-5 mb-3">
		
		<p class="text-xl font-bold">Subscribe to my newsletter</p>
		<p class="text-gray-700 mb-3">
			I send out emails periodically about stuff i find interesting. If you'd love that, subscribe below.
		</p>
		<newsletter class="px-1 my-5 pb-5"/>
	</div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
import newsletter from '~/components/newsletter.vue'
import moment from 'moment'
export default {
	components: {menuLinks, newsletter},
	layout: 'app',
	async asyncData ({ $content, params, error, redirect }) {
		const article = await $content(params.slug).fetch()
		return { article }
	},
	computed: {
		createdAt () {
			return moment(this.article.postedAt).format('MMMM D, YYYY');
		}
	},
	head () {
	    return {
	      title: `${this.article.title} - Victor Abbah Nkoms`,
	      meta: [
	        { name: 'description', content: this.article.description },
	        { name: "twitter:card", content: "summary"},
	        { name: "twitter:site", content: "@veekthoven"},
	        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	        { name: "twitter:creator", content: "@veekthoven"},
	        { name: "og:title", content: `${this.article.title} - Victor Abbah Nkoms`},
	        { name: "og:description", content: this.article.description},
	        { name: "og:image", content: this.article.image.url}
	      ]
	    }
	}  
}
</script>