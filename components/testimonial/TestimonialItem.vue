<template>
	<div class="testimonial-item relative bg-white-800 rounded-lg px-10 py-8">
		<div class="absolute top-[15px] right-5 text-3xl">
			<inline-svg src="/images/svg/quote.svg"></inline-svg>
		</div>
		<div class="testimonial-content">
			<h5 class="text-primary mb-3 leading-relaxed">{{ testimonial.title }}</h5>
			<p class="text-normal font-semibold text-light">{{ testimonial.review }}</p>
			<div class="flex items-center mt-8">
				<div class="w-15 h-15 rounded-full overflow-hidden">
					<img :src="testimonial.thumbnail" :alt="testimonial.name" class="w-full h-full object-cover">
				</div>

				<div class="pl-4">
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
			default: () => { },
		},
	},
};
</script>
