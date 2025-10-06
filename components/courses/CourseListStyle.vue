<template>
	<article class="course-article group sm:flex">
		<div class="rounded overflow-hidden sm:w-[230px] lg:w-[320px] sm:h-[202px] flex-shrink-0">
			<n-link :to="`/courses/${course.slug}`">
				<img
					:src="course.thumbnail"
					:alt="course.title"
					class="w-full group-hover:scale-110 transition-all duration-500"
				>
			</n-link>
		</div>
		<div class="course-info flex-grow sm:pl-8 mt-5 sm:mt-0 md:flex justify-between">
			<div class="sm:pr-7.5 flex-grow">
				<n-link
					:to="`/course-category/${course.categories.slug}`"
					class="text-sm text-[#0071dc] capitalize leading-relaxed mb-2 hover:text-secondary"
				>{{ course.categories.name }}</n-link>
				<h3 class="text-normal leading-relaxed hover:text-primary">
					<n-link :to="`/courses/${course.slug}`">{{ course.title }}</n-link>
				</h3>
				<div class="flex text-[13px] text-[#7e7e7e] font-semibold mt-2 space-x-3">
					<span><i class="pr-1 far fa-play-circle"></i> {{ course.lessons }} Lessons</span>
					<span><i class="pr-1 fas fa-clock"></i> {{ course.duration }} hours</span>
					<span><i class="pr-1 fas fa-sliders-h"></i> {{ course.levels.name }}</span>
				</div>
				<p class="mt-2">{{ course.content | truncate(65, '...') }}</p>
				<div class="flex">
					<button class="text-white h-10 px-5 font-semibold bg-primary rounded inline-block hover:text-heading hover:bg-secondary transition-all">Add to cart</button>
					<button
						class="text-primary w-10 h-10 ml-2.5 font-semibold bg-white-500 rounded hover:text-white hover:bg-primary transition-all tooltip"
						aria-label="Add to wishlist"
					><i class="far fa-heart"></i></button>
				</div>
			</div>
			<div class="self-center w-[130px] flex-shrink-0 md:text-right mt-5 md:mt-0">
				<span
					v-if="course.price < 1"
					class="text-lg font-bold block text-light"
				>Free</span>
				<span
					v-else
					class="text-lg font-bold block"
				>${{ course.price.toFixed(2) }}</span>
				<div
					v-if="course.rating > 0"
					class="mt-3"
				>
					<div class="mb-1 flex items-center justify-start md:justify-end">
						<star-rating :current="course.rating"></star-rating>
						<span class="font-semibold">{{ course.rating }}</span>
						<span class="text-light">/5</span>
					</div>
					<p class="text-light">( {{ course.review }} review)</p>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
import { truncateString } from "~/mixins/truncateString";
export default {
	components: {
		StarRating: () => import("~/components/elements/StarRating"),
	},

	mixins: [truncateString],

	props: {
		course: {
			type: Object,
			default: () => {},
		},
	},
};
</script>