<template>
	<div class="course-sidebar">
		<div class="bg-[#f9f9fb] rounded px-5 py-7.5">
			<h5 class="font-semibold mb-5">Filter by category</h5>
			<ul class=" space-y-5">
				<li
					v-for="(category, i) in allCategories"
					:key="i"
					class="font-semibold text-light capitalize"
				>
					<n-link
						:to="`?category=${category.slug}`"
						class="relative pl-7.5 before:bg-white before:border before:border-[#cacaca] before:content-[''] before:absolute before:w-[18px] before:h-[18px] before:rounded-sm before:left-0 before:top-[2px] after:content-['\f00c'] after:font-fontAwesome after:absolute after:w-[18px] after:h-[18px] after:rounded-sm after:left-0 after:top-[2px] after:text-xs after:text-center after:bg-primary after:scale-0"
					>{{ category.name }} ({{ category.count }}) </n-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import courses from "~/data/courses";
export default {
	data() {
		return {
			courses,
		};
	},

	computed: {
		allCategories() {
			const categories = this.courses.map((cat) => cat.categories);
			const cats = [];

			categories.forEach((cat) => {
				const index = cats.findIndex((a) => a.slug === cat.slug);
				if (index === -1) {
					cats.push({ ...cat, count: 1 });
				} else {
					cats[index] = {
						...cats[index],
						count: cats[index].count + 1,
					};
				}
			});
			return cats;
		},
	},
};
</script>

<style lang="scss">
.nuxt-link-exact-active {
	&:after {
		color: white;
		transform: scale(1);
	}
}
</style>
