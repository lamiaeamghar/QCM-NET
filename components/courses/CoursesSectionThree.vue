<template>
	<div class="course-section py-section">
		<div class="container">
			<div class="section-title mb-8 lg:mb-12 text-center">
				<h2 class="-mt-2.5 text-2xl md:text-3xl">Most <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:-z-10">Popular</mark> Courses </h2>
			</div>
			<div class="section-top text-center">
				<ul class="flex flex-wrap justify-center space-x-2 sm:space-x-3 gap-y-2 mb-10">
					<li
						v-for="(cat, i) in allCategories"
						:key="i"
					>
						<button
							class="text-sm px-5 py-2 rounded-[3px] capitalize font-semibold hover:text-primary bg-white-500 hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,10%)]"
							:class="{'text-primary !bg-white shadow-[0_6px_25px_rgba(0,0,0,10%)]': cat === selectedCategory}"
							@click="filterHandler(cat)"
						>{{ cat }}</button>
					</li>
				</ul>
			</div>
			<div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7.5">
				<CourseGridStyle
					v-for="(course, i) in filterData.slice(0, 8)"
					:key="i"
					:course="course"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import courses from "~/data/courses.json";

export default {
	components: {
		CourseGridStyle: () => import("~/components/courses/CourseGridStyle"),
	},

	data() {
		return {
			courses,
			filterData: [],
			selectedCategory: "all",
		};
	},

	computed: {
		allCategories() {
			const predefinedCats = ["popularity", "featured", "trending"];
			const uniqueCats = ["all"];

			for (const course of this.courses) {
				for (const key in course) {
					if (course[key] === true && !uniqueCats.includes(key) && predefinedCats.includes(key)) {
						uniqueCats.push(key);
					}
				}
			}
			return uniqueCats;
		},
	},

	mounted() {
		this.filterData.push(...this.courses);
	},

	methods: {
		filterHandler(cat) {
			this.selectedCategory = cat;
			if (this.selectedCategory === "all") {
				this.filterData = this.courses;
			} else {
				const filterResult = this.courses.filter((el) => el[cat]);
				this.filterData = [];
				this.filterData.push(...filterResult);
			}
		},
	},
};
</script>