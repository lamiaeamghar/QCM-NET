<template>
	<div class="group">
		<n-link :to="`/event/${event.slug}`">
			<div class="overflow-hidden relative rounded">
				<nuxt-img
					:src="event.imgSrc"
					:alt="event.title"
					class="group-hover:scale-110 transition-all duration-500 w-full"
					height="210"
					width="372"
				/>
				<span class="bg-primary rounded-[3px] text-[12px] text-white uppercase font-semibold py-0.5 px-1.5 absolute bottom-2 left-2">{{ event.date }}</span>
			</div>
		</n-link>
		<div class="pt-4 group-hover:bg-white">
			<h4 class="leading-relaxed hover:text-primary line-clamp-2">
				<n-link :to="`/event/${event.slug}`">{{ event.title }}</n-link>
			</h4>
			<p class="mt-4"> <span class="pr-1.5"><i class="fas fa-map-marker-alt"></i></span>{{ event.country }}</p>
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

