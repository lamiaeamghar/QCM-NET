<template>
	<div class="blog-page">
		<BreadcrumbStyleTwo
			url="/blog"
			url-text="blog"
			:active-text="`${post.title}`"
			page-title="Blog"
		/>

		<div class="blog-wrapper py-section">
			<div class="custom-container">
				<div class="grid grid-cols-12 gap-7.5">
					<div class="col-span-12 lg:col-span-8">
						<article class="blog-details border-b pb-7">
							<div class="rounded overflow-hidden">
								<img
									:src="post.thumbnail"
									:alt="post.title"
								>
							</div>
							<div class="mt-6 mb-4 flex flex-wrap items-center">
								<div class="flex items-center text-light mr-5 sm:mr-8 last:mr-0">
									<div class="w-7.5 h-7.5 overflow-hidden rounded-full mr-2">
										<img
											:src="post.author.thumb"
											:alt="post.author.name"
										>
									</div>
									{{ post.author.name }}
								</div>
								<div class="text-light mr-5 sm:mr-8 last:mr-0">
									<span class="mr-1"><i class="far fa-calendar"></i></span>
									{{ post.date }}
								</div>
								<div class="text-light mr-5 sm:mr-8 last:mr-0">
									<span class="mr-1"><i class="far fa-eye"></i></span>
									{{ post.views }} views
								</div>
								<div class="text-light mr-5 sm:mr-8 last:mr-0">
									<span class="mr-1"><i class="far fa-comment"></i></span>
									{{ post.comment }} comments
								</div>
							</div>
							<h2 class="text-xl sm:text-[28px]">{{ post.title }}</h2>
							<div
								class="content mt-5"
								v-html="post.content"
							></div>
							<div class="sm:flex justify-between items-center mt-7">
								<div class="flex">
									<span class="pr-2">
										<i class="fas fa-tags"></i>
									</span>
									<div class="space-x-1.5">
										<n-link
											v-for="(tag, i) in post.tags"
											:key="i"
											:to="`tag/${slugify(tag)}`"
											class="font-semibold text-light hover:text-primary"
										>{{ tag }},</n-link>
									</div>
								</div>
								<SocialShareButtonGroup />
							</div>
						</article>
						<Comment />
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
import { slugify } from "~/mixins/slugify";
export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		Comment: () => import("~/components/blog/Comment"),
		SocialShareButtonGroup: () => import("~/components/blog/SocialShareButtonGroup"),
	},

	mixins: [slugify],

	data() {
		return {
			posts,
			slug: this.$route.params.slug,
		};
	},

	head() {
		return {
			title: this.post.title,
		};
	},

	computed: {
		post() {
			return this.posts.find((post) => post.slug === this.slug);
		},
	},
};
</script>