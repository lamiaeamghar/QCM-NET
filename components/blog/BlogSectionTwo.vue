<template>
	<div class="bg-white-800 py-section">
		<div class="custom-container">
			<div class="section-title mb-10 text-center">
				<h2 class="-mt-2.5 mb-3 text-2xl md:text-3xl lg:text-[40px]">EduMall <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Today</mark></h2>
				<p>The latest news from EduMall</p>
			</div>

			<div class="grid grid-cols-12 gap-7.5">
				<div class="col-span-12 lg:col-span-6">
					<article
						v-for="(post, i) in posts.slice(0, 1)"
						:key="i"
						class="group rounded overflow-hidden relative after:absolute after:block after:contents-[] after:inset-0 bg-gradient after:opacity-70"
					>
						<img
							:src="post.thumbnail"
							:alt="post.title"
							class="w-full group-hover:scale-110 transition-all duration-700"
						>
						<div class="absolute left-0 bottom-0 p-5 sm:p-7.5 z-10">
							<h6 class="text-base text-white capitalize mb-2">
								<n-link :to="`/blog/category/${post.categories.slug}`">{{ post.categories.name }}</n-link>
							</h6>
							<h2 class="text-lg sm:text-3xl text-white">
								<n-link :to="`/blog/${post.slug}`">{{ post.title }}</n-link>
							</h2>
						</div>
					</article>
				</div>
				<div class="col-span-12 lg:col-span-6">
					<div class="grid sm:grid-cols-2 gap-7.5">
						<article
							v-for="(post, i) in posts.slice(1, 3)"
							:key="i"
							class="group rounded overflow-hidden sm:h-[310px] bg-white shadow-[0_0_40px_rgba(0,0,0,15%)]"
						>
							<div class="overflow-hidden">
								<n-link :to="`/blog/${post.slug}`">
									<img
										:src="post.thumbnail"
										:alt="post.title"
										class="w-full group-hover:scale-110 transition-all duration-700"
									>
								</n-link>
							</div>
							<div class="px-6 py-5">
								<h6 class="mb-2 text-sm capitalize text-primary hover:text-secondary">
									<n-link :to="`/blog/category/${post.categories.slug}`">{{ post.categories.name }}</n-link>
								</h6>
								<h6 class=" leading-relaxed hover:text-primary">
									<n-link :to="`/blog/${post.slug}`">{{ post.title }}</n-link>
								</h6>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import posts from "~/data/blogs.json";

export default {
	data() {
		return {
			posts,
		};
	},
};
</script>

<style lang="scss" scoped>
.bg-gradient {
	&::after {
		background-image: linear-gradient(180deg, transparent 50%, #000);
	}
}
</style>
