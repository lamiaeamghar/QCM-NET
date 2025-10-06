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
					<n-link
						to="/"
						class="category-item bg-[#f1f3f8] rounded flex items-center px-[30px] py-2.5 min-h-[70px] h-full hover:bg-primary group"
					>
						<div class="w-15">
							<inline-svg
								:src="category.icon.iconOne"
								class="hover"
							></inline-svg>
						</div>
						<h6 class="group-hover:text-white capitalize"> {{ category.name }} </h6>
						<i class="fas fa-angle-right scale-0 pl-3 group-hover:text-white group-hover:scale-100 transition-all"></i>
					</n-link>
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
	},

	data() {
		return {
			courses,
		};
	},

	computed: {
		allCategories() {
			const categories = this.courses.map((el) => el.categories2);
			const uniqueCats = [...new Map(categories.map((item) => [item.name, item])).values()];
			return uniqueCats;
		},
	},
};
</script>