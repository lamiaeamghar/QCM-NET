<template>
	<div class="blog-area py-section">
		<div class="container">
			<div class="section-title mb-13 text-center">
				<h2 class="-mt-2.5 mb-3 text-2xl md:text-3xl lg:text-[40px]">QCM-NET <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">News</mark> </h2>
				<p>From QCM-NET to the world</p>
			</div>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-7.5">
				<BlogArticleGridStyleTwo
					v-for="(post, i) in posts.slice(0, 4)"
					:key="i"
					:post="post"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import posts from "~/data/blogs.json";

export default {
	components: {
		BlogArticleGridStyleTwo: () => import("~/components/blog/BlogArticleGridStyleTwo"),
	},

	data() {
		return {
			posts,
		};
	},
};
</script>
