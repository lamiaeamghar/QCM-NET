<template>
	<div class="categories-section pt-[70px]">
		<div class="container">
			<SectionTitleStyleOne
				title="Top"
				highlight-title="Categories"
			/>
			<div class="grid grid-cols-12 gap-7">
				<div
					v-for="(category, i) in allCategories"
					:key="i"
					class="col-span-12 sm:col-span-6 lg:col-span-3"
				>
					<CategoryItemStyleOne :category="category" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import courses from "~/data/courses.json";
export default {
	components: {
		SectionTitleStyleOne: () => import("~/components/elements/SectionTitleStyleOne"),
		CategoryItemStyleOne: () => import("~/components/categories/CategoryItemStyleOne"),
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