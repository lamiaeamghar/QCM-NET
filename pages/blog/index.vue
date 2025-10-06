<template>
	<div class="blog-page">
		<BreadcrumbStyleTwo
			active-text="Blog"
			page-title="Latest news <br> are on top all times"
		/>

		<div class="blog-wrapper py-section">
			<div class="custom-container">
				<div class="grid grid-cols-12 gap-7.5">
					<div class="col-span-12 lg:col-span-8">
						<div class="grid md:grid-cols-2 gap-7.5">
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
			currentPage: 1,
			perPage: 6,
		};
	},

	head() {
		return {
			title: "Blog",
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

<style lang="scss">
.VuePagination__count {
	display: none;
}
.blog-pagination {
	ul {
		@apply mt-10 flex justify-center space-x-2;
	}
	.page-item {
		@apply w-10 h-10 text-center text-base font-semibold leading-10 rounded-full text-heading overflow-hidden bg-white-500 hover:text-primary cursor-pointer;
		a {
			@apply block;
			&.active {
				@apply bg-primary text-white;
			}
		}
		&:first-child,
		&:last-child {
			@apply hidden;
		}
	}
}
</style>