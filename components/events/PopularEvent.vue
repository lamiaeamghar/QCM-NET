<template>
	<article class="flex group border-b pb-5 last:pb-0 last:border-none">
		<div class="w-[100px] h-20 flex-shrink-0 relative rounded overflow-hidden">
			<n-link :to="`/event/${event.slug}`">
				<img
					:src="event.imgSrc"
					:alt="event.title"
					class="h-full object-cover object-center group-hover:scale-125 transition-all duration-500"
				>
			</n-link>
		</div>
		<div class="pl-4">
			<h6 class="text-sm leading-relaxed hover:text-primary -mt-1 line-clamp-2">
				<n-link :to="`/event/${event.slug}`">{{ event.title }}</n-link>
			</h6>
			<span class="block text-light mt-2.5">{{ event.date }}</span>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		event: {
			type: Object,
			default: () => {},
		},
	},
};
</script>