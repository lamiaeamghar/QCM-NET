<template>
	<div class="blog-area py-section">
		<div class="container">
			<div class="grid grid-cols-12 lg:gap-10">
				<div class="col-span-12 lg:col-span-3">
					<div class="section-title mb-10 xl:pr-10">
						<h6 class="text-base text-primary uppercase mb-5">blog update</h6>
						<h2 class="-mt-2.5 text-2xl md:text-3xl">Edumall's News and <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:-z-10">Blogs</mark> </h2>
					</div>
					<ul class="list space-y-5">
						<li
							v-for="(post, i) in posts.slice(3, 7)"
							:key="i"
						>
							<h6 class="text-sm font-semibold hover:text-primary leading-[1.8]">
								<n-link
									:to="`/blog/${post.slug}`"
									class="relative pl-7.5 block before:content-['\f30b'] before:font-fontAwesome before:absolute before:left-0 before:top-0 before:text-sm before:font-bold"
								> {{ post.title }}
								</n-link>
							</h6>
						</li>
					</ul>
				</div>
				<div class="col-span-12 lg:col-span-9 mt-10 lg:mt-0">
					<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
						<BlogArticleGridStyleTwo
							v-for="(post, i) in posts.slice(0, 3)"
							:key="i"
							:post="post"
						/>
					</div>
				</div>
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
