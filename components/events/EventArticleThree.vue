<template>
	<div class="rounded overflow-hidden transition-all group">
		<div class="overflow-hidden relative">
			<n-link :to="`/event/${event.slug}`">
				<img
					:src="event.imgSrc"
					:alt="event.title"
					class="group-hover:scale-110 transition-all duration-500 w-full"
				>
			</n-link>
			<span class="absolute bg-primary text-white bottom-2.5 left-2.5 rounded-[3px] text-xs font-semibold py-1 px-2.5 uppercase">{{ event.date }}</span>
		</div>
		<div class="mt-4">
			<h4 class="leading-relaxed hover:text-primary line-clamp-2">
				<n-link :to="`/event/${event.slug}`">{{ event.title }}</n-link>
			</h4>
			<p class="mt-3"> <span class="pr-1.5"><i class="fas fa-map-marker-alt"></i></span>{{ event.country }}</p>
		</div>
	</div>
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

