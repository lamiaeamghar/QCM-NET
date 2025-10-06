<template>
	<article class="flex group border-b pb-5 last:pb-0 last:border-none">
		<div class="w-[100px] h-20 flex-shrink-0 relative rounded-[3px] overflow-hidden">
			<n-link :to="`/blog/${post.slug}`">
				<img
					:src="post.thumbnail"
					:alt="post.title"
					class="h-full object-cover object-center group-hover:scale-125 transition-all duration-500"
				>
				<div class="absolute bottom-0 left-0 right-0 text-center py-0.5 px-1 bg-black/30 text-white text-[12px] font-semibold w-full tracking-wide uppercase text-ellipsis overflow-hidden whitespace-nowrap">
					<span>{{ post.categories.name }}</span>
				</div>
			</n-link>
		</div>
		<div class="pl-4">
			<h6 class="text-base leading-relaxed hover:text-primary -mt-1">
				<n-link :to="`/blog/${post.slug}`">{{ post.title | truncate(45, "...") }}</n-link>
			</h6>
			<span class="block text-light mt-2.5">{{ post.date }}</span>
		</div>
	</article>
</template>

<script>
import { truncateString } from "~/mixins/truncateString";
export default {
	mixins: [truncateString],
	props: {
		post: {
			type: Object,
			default: () => {},
		},
	},
};
</script>