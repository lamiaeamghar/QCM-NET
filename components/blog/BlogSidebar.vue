<template>
	<div class="blog-sidebar space-y-12">
		<div class="sidebar-widget">
			<h5 class="border-b-2 border-gallery mb-7 pb-1">Search</h5>
			<form class="relative w-full">
				<input
					type="text"
					placeholder="Search..."
					class="text-heading bg-white-800 h-13 w-full rounded font-semibold px-5 text-sm focus:outline outline-primary outline-1 pr-13"
				>
				<button class="absolute right-0 w-13 h-13 bg-transparent text-primary text-lg">
					<i class="fas fa-search"></i>
				</button>
			</form>
		</div>

		<div class="sidebar-widget">
			<h5 class="border-b-2 border-gallery mb-7 pb-1">Categories</h5>
			<ul class="space-y-4">
				<li
					v-for="(category, i) in categoryList"
					:key="i"
				>
					<n-link
						:to="`/blog/category/${category.slug}`"
						class="flex justify-between items-center font-semibold text-light hover:text-primary capitalize"
					>
						{{ category.name }} <span>({{ `${category.count}`.padStart(2, 0) }})</span>
					</n-link>
				</li>
			</ul>
		</div>

		<div class="sidebar-widget">
			<h5 class="border-b-2 border-gallery mb-7 pb-1">Latest Posts</h5>
			<div class="latest-posts space-y-5">
				<LatestPost
					v-for="(post, i) in posts.slice(0, 3)"
					:key="i"
					:post="post"
				/>
			</div>
		</div>

		<div class="sidebar-widget">
			<h5 class="border-b-2 border-gallery mb-7 pb-1">Popular Tags</h5>
			<div class="tag-list space-y-2">
				<n-link
					v-for="(tag, i) in tagList"
					:key="i"
					:to="`/blog/tag/${slugify(tag)}`"
					class="text-xs bg-white-500 font-semibold rounded-[3px] px-4 py-2 inline-block text-light hover:bg-primary hover:text-white capitalize mr-2"
				>{{ tag }}
				</n-link>
			</div>
		</div>
	</div>
</template>

<script>
import { slugify } from "~/mixins/slugify";
export default {
	components: {
		LatestPost: () => import("~/components/blog/LatestPost"),
	},

	mixins: [slugify],

	props: {
		posts: {
			type: Array,
			default: () => [],
		},
	},

	computed: {
		tagList() {
			return [...new Set(this.posts.map((tag) => tag.tags).flat())];
		},

		categoryList() {
			const items = this.posts.map((post) => post.categories);
			const catsArray = [];

			items.forEach((cats) => {
				const index = catsArray.findIndex((a) => a.slug === cats.slug);
				if (index === -1) {
					catsArray.push({ ...cats, count: 1 });
				} else {
					catsArray[index] = {
						...catsArray[index],
						count: catsArray[index].count + 1,
					};
				}
			});

			return catsArray;
		},
	},
};
</script>
