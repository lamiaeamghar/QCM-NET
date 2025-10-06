<template>
	<div class="rounded overflow-hidden bg-white-800 transition-all group hover:shadow-[0_0_40px_rgba(51,51,51,0.10)] hover:bg-white">
		<div class="overflow-hidden">
			<n-link :to="`/zoom-meetings/${meeting.slug}`">
				<nuxt-img
					:src="meeting.imgSrc"
					:alt="meeting.title"
					class="group-hover:scale-110 transition-all duration-500 w-full"
					height="230"
					width="372"
				/>
			</n-link>
		</div>
		<div class="p-6">
			<h4 class="text-lg sm:text-xl leading-relaxed hover:text-primary">
				<n-link :to="`/zoom-meetings/${meeting.slug}`">{{ meeting.title }}</n-link>
			</h4>
			<div class="flex items-center mt-3">
				<span class="text-xs text-[#9b9b9b] uppercase font-semibold">meeting id:</span>
				<span class="text-normal text-primary font-bold pl-1">{{ meeting.meetingId }}</span>
			</div>
			<ul class="mt-6 flex flex-wrap items-center">
				<li class="text-light mr-5">
					<span class="pr-1"><i class="fas fa-calendar"></i></span>
					{{ meeting.date }}
					<span class="font-semibold">2.00 PM</span>
				</li>
				<li class="text-light mr-5">
					<span class="pr-1"><i class="fas fa-clock"></i></span>
					{{ meeting.duration }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		meeting: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

