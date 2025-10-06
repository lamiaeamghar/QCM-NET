<template>
	<article class="flex group border-b pb-5 last:pb-0 mb-5 last:mb-0 last:border-none">
		<div class="w-[120px] h-20 flex-shrink-0 relative rounded-[3px] overflow-hidden">
			<n-link :to="`/courses/${course.slug}`">
				<img
					:src="course.thumbnail"
					:alt="course.title"
					class="h-full object-cover object-center group-hover:scale-125 transition-all duration-500"
				>
			</n-link>
		</div>
		<div class="pl-4 flex-grow">
			<h6 class="text-sm leading-relaxed hover:text-primary -mt-1">
				<n-link
					:to="`/courses/${course.slug}`"
					class="line-clamp-2"
				>{{ course.title }}</n-link>
			</h6>
			<span class="block text-base font-bold text-[#031F42] mt-2.5">{{ course.price.toFixed(2) > 0 ? course.price.toFixed(2) : 'Free' }}</span>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		course: {
			type: Object,
			default: () => {},
		},
	},
};
</script>