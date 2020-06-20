<template>
	<ul>
	  <li class="inline-block mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800">
	  	<nuxt-link :to="{'name': 'index'}">
	  		Home
	  	</nuxt-link>
	  </li>
	  <li class="inline-block mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800">
	  	<nuxt-link :to="{'name': 'about'}">
	  		About
	  	</nuxt-link>
	  </li>
	  <li class="inline-block mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800">
	  	<nuxt-link :to="{'name': 'work'}">
	  		Work
	  	</nuxt-link>
	  </li>
	  <li class="inline-block mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800">
	  	<nuxt-link :to="{'name': 'articles'}">
	  		Articles
	  	</nuxt-link>
	  </li>
	  <li class="inline-block mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800">
	  	<nuxt-link :to="{'name': 'contact'}">
	  		Contact
	  	</nuxt-link>
	  </li>
	</ul>
</template>