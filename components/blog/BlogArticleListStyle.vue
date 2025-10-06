<template>
	<article class="blog-article group border-b border-gallery pb-12">
		<div class="overflow-hidden rounded">
			<n-link :to="`/blog/${post.slug}`">
				<img
					:src="post.thumbnail"
					:alt="post.title"
					class="group-hover:scale-110 transition-all duration-500"
				>
			</n-link>
		</div>
		<div class="mt-7">
			<div class="mb-3 flex flex-wrap items-center">
				<div class="flex items-center text-light mr-5 sm:mr-10 last:mr-0">
					<div class="w-7.5 h-7.5 overflow-hidden rounded-full mr-2">
						<img
							:src="post.author.thumb"
							:alt="post.author.name"
						>
					</div>
					{{ post.author.name }}
				</div>
				<div class="text-light mr-5 sm:mr-10 last:mr-0">
					<span class="mr-1"><i class="far fa-calendar"></i></span>
					{{ post.date }}
				</div>
				<div class="text-light mr-5 sm:mr-10 last:mr-0">
					<span class="mr-1"><i class="far fa-eye"></i></span>
					{{ post.views }} views
				</div>
			</div>
			<h2 class="text-lg sm:text-[28px] hover:text-primary leading-normal">
				<n-link :to="`/blog/${post.slug}`">{{ post.title }}</n-link>
			</h2>
			<p class="mt-2.5">{{ post.excerpt}}</p>
			<div class="sm:flex justify-between items-center mt-7">
				<n-link
					:to="`/blog/${post.slug}`"
					class="bg-white-500 text-base font-semibold rounded-[4px] px-7 py-3 inline-block text-primary hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,.1)]"
				>Read More
					<span class="ml-1 align-middle"><i class="fal fa-long-arrow-right"></i></span>
				</n-link>
				<SocialShareButtonGroup />
			</div>
		</div>
	</article>
</template>

<script>
import { truncateString } from "~/mixins/truncateString";
export default {
	components: {
		SocialShareButtonGroup: () => import("~/components/blog/SocialShareButtonGroup"),
	},
	mixins: [truncateString],
	props: {
		post: {
			type: Object,
			default: () => {},
		},
	},
};
</script>