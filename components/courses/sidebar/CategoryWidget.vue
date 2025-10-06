<template>
	<div class="course-sidebar">
		<div class="bg-[#f9f9fb] rounded px-5 py-7.5">
			<h5 class="mb-5">Filter by category</h5>
			<ul class="space-y-5">
				<li
					v-for="(category, i) in allCategories"
					:key="i"
					class="font-semibold text-light capitalize"
				>
					<div class="form-check">
						<label class="form-check-label inline-block text-light cursor-pointer hover:text-primary">
							<input
								:id="category.slug"
								v-model="selected"
								class="form-check-input appearance-none h-[18px] w-[18px] border border-[#cacaca] rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-sub bg-no-repeat bg-center bg-contain mr-2 cursor-pointer hover:border-primary"
								type="checkbox"
								:value="category.slug"
							>
							{{ category.name }} ({{ `${category.count}`.padStart(2, 0) }})
						</label>
					</div>
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
			selected: [],
			slug: this.$route.query.category,
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
	watch: {
		selected() {
			this.$router.push({ query: { ...this.$route.query, category: this.selected.join(",") } });
		},
	},

	mounted() {
		const selectedCategories = this.slug;
		if (selectedCategories) {
			this.selected = selectedCategories.split(",");
		}
	},
};
</script>

<style lang="scss">
.form-check-input:checked[type="checkbox"] {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
</style>
