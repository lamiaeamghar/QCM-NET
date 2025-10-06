<template>
	<article class="blog-article rounded overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,.05)] group">
		<div class="overflow-hidden">
			<n-link :to="`/blog/${post.slug}`">
				<img
					:src="post.thumbnail"
					:alt="post.title"
					class="group-hover:scale-110 transition-all duration-500"
				>
			</n-link>
		</div>
		<div class="px-5 xs:px-7.5 pt-4 pb-5 xs:pb-7.5">
			<div class="space-x-8 sm:space-x-10 mb-3 flex items-center">
				<div class="text-light">
					<span class="mr-1"><i class="far fa-calendar"></i></span>
					{{ post.date }}
				</div>
				<div class="text-light">
					<span class="mr-1"><i class="far fa-eye"></i></span>
					{{ post.views }} views
				</div>
			</div>
			<h6 class="hover:text-primary leading-7">
				<n-link :to="`/blog/${post.slug}`">{{ post.title }}</n-link>
			</h6>
			<p class="mt-2.5 mb-5">{{ post.excerpt }}</p>
			<n-link
				:to="`/blog/${post.slug}`"
				class="bg-white-500 font-semibold rounded-[4px] px-5 py-2.5 inline-block text-primary hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,.1)]"
			>Read More
				<span class="ml-1 align-middle"><i class="fal fa-long-arrow-right"></i></span>
			</n-link>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			default: () => {},
		},
	},
};
</script>