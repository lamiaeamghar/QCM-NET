<template>
	<div class="blog-page">
		<BreadcrumbStyleTwo
			url="/blog"
			url-text="Blog"
			:active-text="`${slug.split('-').join(' ')}`"
			:page-title="`Category: ${slug.split('-').join(' ')}`"
		/>

		<div class="blog-wrapper py-section">
			<div class="custom-container">
				<div class="grid grid-cols-12 gap-7.5">
					<div class="col-span-12 lg:col-span-8">
						<div class="grid md:grid-cols-2 gap-7.5">
							<BlogArticleGridStyle
								v-for="(post, i) in postsByCategory"
								:key="i"
								:post="post"
							/>
						</div>
					</div>
					<div class="col-span-12 lg:col-span-4 space-y-7.5">
						<BlogSidebar
							:posts="posts"
							class="lg:pl-7.5 mt-8 lg:mt-0"
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
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		BlogArticleGridStyle: () => import("~/components/blog/BlogArticleGridStyle"),
	},

	data() {
		return {
			posts,
			slug: this.$route.params.slug,
		};
	},

	head() {
		return {
			title: "Blog",
		};
	},

	computed: {
		postsByCategory() {
			return this.posts.filter((post) => post.categories.slug.includes(this.slug));
		},
	},
};
</script>