<template>
	<article class="course-article bg-white group shadow-[0_0_10px_rgba(51,51,51,0.15)] overflow-hidden">
		<div class="rounded-t overflow-hidden relative">
			<n-link :to="`/courses/${course.slug}`">
				<img
					:src="course.thumbnail"
					:alt="course.title"
					class="w-full group-hover:scale-110 transition-all duration-500"
				>
			</n-link>
			<div class="absolute top-0 left-0 text-base font-bold text-center">
				<span
					v-if="course.price > 0"
					class=" bg-secondary px-3 py-1.5 min-w-[80px] rounded-tl rounded-br block"
				>
					<span>$50.00</span>
				</span>
				<span
					v-else
					class="text-white bg-[#6cbd7e] px-3 py-1.5 min-w-[80px] rounded-tl rounded-br block"
				>
					<span>Free</span>
				</span>
			</div>

		</div>
		<div class="course-info p-7 bg-white">
			<div
				class="text-[13px] font-semibold leading-[18px] rounded-sm px-2.5 py-0.5 mb-3 inline-block text-[#17b8c1] bg-[#17b8c1] bg-opacity-[15%]"
				:class="{'text-[#5b63fe] bg-[#5b63fe] bg-opacity-[15%]': course.levels.name === 'Beginner'}"
			>{{ course.levels.name }}</div>
			<n-link
				:to="`/course-category/${course.categories.slug}`"
				class="text-sm font-semibold text-primary capitalize block mb-1 hover:text-secondary"
			>{{ course.categories.name }}</n-link>
			<h5 class="leading-relaxed hover:text-primary sm:line-clamp-2">
				<n-link :to="`/courses/${course.slug}`">{{ course.title }}</n-link>
			</h5>
			<p class="text-light mt-2 line-clamp-2">{{ course.excerpt }}</p>
			<div class="text-base text-heading font-bold mt-3">
				{{ course.rating }}
				<span class="text-sm font-normal">/5</span>
			</div>
			<div class="mt-1 flex justify-between items-center">
				<star-rating :current="course.rating"></star-rating>
				<span class="font-semibold text-light text-sm">
					<i class="fas fa-user-alt"></i>
					{{ course.enroll }}
				</span>
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