<template>
	<div class="mb-3 mt-2">
		<h3 class="text-2xl font-extrabold mb-3">A little more about me</h3>
		<div>
			<p class="mb-3">
				I am a software developer with major focus on web development which i've been doing since 2013. I am based in Kaduna state, Nigeria.
			</p>

			<p class="mb-3">
				I <span class="italic font-bold">mostly</span> use HTML, CSS, JavaScript and PHP. Though constantly switching between different languages, frameworks and libraries, my focus right now is Laravel, Vue js, Tailwind CSS, Bootstrap and Nuxt Js.
			</p>
			<p class="mb-3">
				I have a BSc. in Computer Sciences but about 90% of everything I know about software development today is self-taught. I've always been passionate about learning, so I’m grateful that I ended up in a fast-paced industry where one of the major requirements for being and staying relevant is continuous learning and improving.
			</p>
			<p class="mb-3">
				I work <span class="font-bold">remotely</span> from my office in Kaduna, with teams located anywhere and sometimes distributed across the world.
			</p>
			<h3 class="text-2xl font-extrabold mt-5 mb-3">My tools</h3>
			<div class="block md:flex">
				<div class="w-full md:w-6/12 mb-5 md:pr-3">
					<h3 class="text-xl font-bold text-gray-800">Languages</h3>
					<hr class="text-gray-500">
					<ul>
						<li class="font-medium text-gray-700">PHP</li>
						<li class="font-medium text-gray-700">Javascript</li>
						<li class="font-medium text-gray-700">Node <span class="text-gray-600 font-bold">*</span></li>
					</ul>
				</div>
				<div class="w-full md:w-6/12 mb-5 md:pl-3">
					<h3 class="text-xl font-bold text-gray-800">Frameworks and Libraries</h3>
					<hr class="text-gray-500">
					<ul>
						<li class="font-medium text-gray-700">Laravel</li>
						<li class="font-medium text-gray-700">Code Igniter</li>
						<li class="font-medium text-gray-700">Symphony</li>
						<li class="font-medium text-gray-700">Vue Js</li>
						<li class="font-medium text-gray-700">Nuxt Js</li>
						<li class="font-medium text-gray-700">Express <span class="text-gray-600 font-bold">*</span></li>
						<li class="font-medium text-gray-700">Adonis Js <span class="text-gray-600 font-bold">*</span></li>
						<li class="font-medium text-gray-700">React Js <span class="text-gray-600 font-bold">*</span></li>
					</ul>
				</div>	
			</div>
			<div class="block md:flex">
				<div class="w-full md:w-6/12 mb-5 md:pr-3">
					<h3 class="text-xl font-bold text-gray-800">API Specs</h3>
					<hr class="text-gray-500">
					<ul>
						<li class="font-medium text-gray-700">REST</li>
						<li class="font-medium text-gray-700">GraphQL <span class="text-gray-600 font-bold">*</span></li>
					</ul>
				</div>
				<div class="w-full md:w-6/12 mb-5 md:pl-3">
					<h3 class="text-xl font-bold text-gray-800">Databases</h3>
					<hr class="text-gray-500">
					<ul>
						<li class="font-medium text-gray-700">MySQL</li>
						<li class="font-medium text-gray-700">SQLite</li>
						<li class="font-medium text-gray-700">MongoDB <span class="text-gray-600 font-bold">*</span></li>
					</ul>
				</div>	
			</div>
			<div class="block md:flex">
				<div class="w-full md:w-6/12 mb-5 md:pr-3">
					<h3 class="text-xl font-bold text-gray-800">UI Design</h3>
					<hr class="text-gray-500">
					<ul>
						<li class="font-medium text-gray-700">Figma</li>
					</ul>
				</div>
				<div class="w-full md:w-6/12 mb-5 md:pl-3">
					<h3 class="text-xl font-bold text-gray-800">Infrastructure</h3>
					<hr class="text-gray-500">
					<ul>
						<li class="font-medium text-gray-700">AWS</li>
						<li class="font-medium text-gray-700">Heroku</li>
						<li class="font-medium text-gray-700">Digital Ocean</li>
					</ul>
				</div>	
			</div>
			<p class="text-sm font-medium text-gray-600 pb-5">
				Items marked <span class="text-gray-600 font-bold">*</span> are tools i've played around and built stuff with but that never made it to production for <span class="text-gray-600 font-bold italic">actual people</span> to use. However, i am totally comfortable working with them.
			</p>
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