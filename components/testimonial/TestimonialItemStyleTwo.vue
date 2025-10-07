<template>
	<div class="testimonial-item relative bg-white rounded-lg px-10 py-8">
		<div class="w-15 rounded-full overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,.20)]">
			<img
				:src="testimonial.thumbnail"
				:alt="testimonial.name"
			>
		</div>
		<div class="testimonial-content mt-6">
			<h5 class="text-primary mb-3 leading-relaxed">{{ testimonial.title }}</h5>
			<p class="text-normal font-semibold text-light">{{ testimonial.review }}</p>
			<div class="mt-5">
				<div>
					<h6 class="text-sm font-bold">{{ testimonial.name }}</h6>
					<p class="mt-1"> {{ testimonial.designation }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		testimonial: {
			type: Object,
			default: () => {},
		},
	},
};
</script>
