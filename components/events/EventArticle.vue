<template>
	<div class="rounded overflow-hidden bg-white-800 transition-all group hover:shadow-[0_0_40px_rgba(51,51,51,0.10)]">
		<div class="overflow-hidden">
			<n-link :to="`/event/${event.slug}`">
				<img
					:src="event.imgSrc"
					:alt="event.title"
					class="group-hover:scale-110 transition-all duration-500 w-full"
				>
			</n-link>
		</div>
		<div class="text-center p-6 group-hover:bg-white">
			<span class="text-xs text-light uppercase mb-3 block">{{ event.date }}</span>
			<h6 class="leading-relaxed hover:text-primary">
				<n-link :to="`/event/${event.slug}`">{{ event.title }}</n-link>
			</h6>
			<p class="mt-6"> <span class="pr-1.5"><i class="fas fa-map-marker-alt"></i></span>{{ event.country }}</p>
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

