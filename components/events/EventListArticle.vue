<template>
	<div class="group sm:flex border-b border-gallery pb-7.5">
		<div class="overflow-hidden rounded flex-shrink-0 w-[220] md:w-[180px] lg:w-[270px] sm:h-[140px] md:h-[120px] lg:h-[172px]">
			<n-link :to="`/event/${event.slug}`">
				<img
					:src="event.imgSrc"
					:alt="event.title"
					class="group-hover:scale-110 transition-all duration-500 w-full h-full object-cover object-center"
				>
			</n-link>
		</div>
		<div class="sm:pl-7.5 mt-6 sm:mt-0 flex-grow md:flex">
			<div class="pr-7.5 flex-grow">
				<h4 class="text-lg lg:text-xl leading-relaxed hover:text-primary mb-2.5">
					<n-link :to="`/event/${event.slug}`">{{ event.title }}</n-link>
				</h4>
				<h5 class="font-bold mb-3">${{ event.cost.toFixed(2) }}</h5>
				<p>{{ event.excerpts }}</p>
			</div>
			<div class="w-[170px] flex-shrink-0 mt-5 md:mt-0">
				<ul class="mb-5 md:mb-9">
					<li class="text-light mb-2.5">
						<span class="pr-1"><i class="fas fa-clock"></i></span>
						{{ event.time }}
					</li>
					<li class="text-light mb-2.5">
						<span class="pr-1"><i class="fas fa-calendar"></i></span>
						{{ event.date }}
					</li>
					<li class="text-light mb-2.5">
						<span class="pr-1"><i class="fas fa-map-marker-alt"></i></span>
						{{ event.country }}
					</li>
				</ul>
				<n-link
					:to="`/event/${event.slug}`"
					class="text-sm w-full px-9 py-2.5 font-semibold inline-block rounded text-white text-center bg-primary hover:text-heading hover:bg-secondary"
				>Get Ticket</n-link>
			</div>
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

