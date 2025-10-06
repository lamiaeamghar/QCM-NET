<template>
	<article class="course-article group">
		<div class="rounded overflow-hidden">
			<n-link :to="`/courses/${course.slug}`">
				<img
					:src="course.thumbnail"
					:alt="course.title"
					class="w-full group-hover:scale-110 transition-all duration-500"
				>
			</n-link>
		</div>
		<div class="course-info pt-2.5">
			<span
				class="text-[13px] font-semibold leading-[18px] rounded-sm px-2.5 py-0.5 mb-3 inline-block text-[#17b8c1] bg-[#17b8c1] bg-opacity-[15%]"
				:class="{'text-[#5b63fe] bg-[#5b63fe] bg-opacity-[15%]': course.levels.name === 'Beginner'}"
			>{{ course.levels.name }}</span>
			<h3 class="text-base leading-relaxed hover:text-primary">
				<n-link :to="`/courses/${course.slug}`">{{ course.title }}</n-link>
			</h3>
			<n-link
				:to="`/instructors/profile/${course.instructor.id}`"
				class="text-[13px] my-0.5 text-[#0071dc] hover:text-secondary"
			>{{ course.instructor.name }}</n-link>
			<div
				v-if="course.price < 1"
				class="text-[#696969] font-bold mt-2"
			>Free</div>
			<div
				v-else
				class="text-heading font-bold mt-2"
			>${{ course.price.toFixed(2) }}</div>
			<div
				v-if="course.rating > 0"
				class="mt-1"
			>
				<star-rating :current="course.rating"></star-rating>
				<span class="text-[#9b9b9b] text-xs">({{ course.review }})</span>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	components: {
		StarRating: () => import("~/components/elements/StarRating"),
	},

	props: {
		course: {
			type: Object,
			default: () => {},
		},
	},
};
</script>