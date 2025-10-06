<template>
	<div class="categories-section py-section bg-white-800">
		<div class="container">
			<div class="section-title mb-11">
				<h2 class="-mt-2.5 text-2xl md:text-3xl lg:text-[40px]"><mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Subject</mark> Areas</h2>
			</div>
			<div class="grid grid-cols-12 gap-7">
				<div
					v-for="(category, i) in allCategories"
					:key="i"
					class="col-span-12 sm:col-span-6 lg:col-span-3"
				>
					<CategoryItemStyleThree :category="category" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import courses from "~/data/courses.json";
export default {
	components: {
		CategoryItemStyleThree: () => import("~/components/categories/CategoryItemStyleThree"),
	},

	data() {
		return {
			courses,
		};
	},

	computed: {
		allCategories() {
			const categories = this.courses.map((el) => el.categories);
			return [...new Map(categories.map((item) => [item.name, item])).values()];
		},
	},
};
</script>