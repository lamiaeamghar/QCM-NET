<template>
	<div class="blog-page">
		<BreadcrumbStyleTwo
			active-text="Blog Grid View"
			page-title="Latest news <br> are on top all times"
		/>

		<div class="blog-wrapper py-section">
			<div class="custom-container">
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7.5">
					<BlogArticleGridStyle
						v-for="(post, i) in getItems"
						:key="i"
						:post="post"
					/>
				</div>
				<div v-if="getPaginateCount > 1">
					<pagination
						v-model="currentPage"
						class="blog-pagination"
						:per-page="perPage"
						:records="posts.length"
						:page-count="getPaginateCount"
						@paginate="paginateClickCallback"
					/>
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
			currentPage: 1,
			perPage: 6,
		};
	},

	head() {
		return {
			title: "Blog Grid View",
		};
	},

	computed: {
		getItems() {
			const start = (this.currentPage - 1) * this.perPage;
			const end = this.currentPage * this.perPage;
			return this.posts.slice(start, end);
		},
		getPaginateCount() {
			return Math.ceil(this.posts.length / this.perPage);
		},
	},
	methods: {
		paginateClickCallback(page) {
			this.currentPage = Number(page);
		},
	},
};
</script>