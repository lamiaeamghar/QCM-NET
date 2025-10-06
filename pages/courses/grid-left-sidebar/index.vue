<template>
	<div class="course-page">
		<BreadcrumbStyleTwo
			active-text="Courses"
			page-title="Courses"
		/>

		<div class="course-wrapper py-section">
			<div class="container">
				<div class="grid grid-cols-12 gap-7.5 md:gap-12">
					<div class="col-span-12 lg:col-span-9">
						<div class="course-inner">
							<div class="layout-switcher mb-5 xs:flex items-center justify-between">
								<p class="text-base text-[#7e7e7e] font-semibold mb-0">We found <strong class="text-heading">{{ filterCourses.length }}</strong> courses available for you</p>
								<div class="space-x-1 mt-3 xs:mt-0">
									<span class="font-semibold">See</span>
									<button
										class="text-[#cccccc] text-lg w-7 h-7"
										:class="{ '!text-primary border border-primary' : layout === 'gridLayout' }"
										@click="layout = 'gridLayout'"
									>
										<i class="fas fa-th"></i>
									</button>
									<button
										class="text-[#cccccc] text-lg w-7 h-7"
										:class="{ '!text-primary border border-primary' : layout === 'listLayout' }"
										@click="layout = 'listLayout'"
									>
										<i class="fas fa-bars"></i>
									</button>
								</div>
							</div>
							<div
								class="grid grid-cols-12 gap-7.5"
								:class="{ 'list-layout': layout === 'listLayout', 'grid-layout': layout === 'gridLayout' }"
							>
								<div
									v-for="(course, index) in getItems"
									:key="index"
									class="col-span-12 sm:col-span-6 lg:col-span-4"
								>
									<CourseGridStyle
										v-if="layout === 'gridLayout'"
										:course="course"
									/>
									<CourseListStyle
										v-if="layout === 'listLayout'"
										:course="course"
										class="border-b border-gallery pb-7.5"
									/>
								</div>
							</div>
							<div v-if="getPaginateCount > 1">
								<pagination
									v-model="currentPage"
									class="blog-pagination"
									:per-page="perPage"
									:records="filterCourses.length"
									:page-count="getPaginateCount"
									@paginate="paginateClickCallback"
								/>
							</div>
						</div>
					</div>
					<div class="col-span-12 lg:col-span-3 lg:order-first space-y-7.5 mt-10 lg:mt-0">
						<CategoryWidget />
						<div class="bg-[#f9f9fb] rounded px-5 py-7.5">
							<h5 class="mb-5">Filter by</h5>
							<InstructorWidget />
							<LevelWidget />
							<LanguagesWidget />
							<PricingWidget :courses="courses" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import courses from "~/data/courses.json";

export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		CourseListStyle: () => import("~/components/courses/CourseListStyle"),
		CourseGridStyle: () => import("~/components/courses/CourseGridStyle"),
		CategoryWidget: () => import("~/components/courses/sidebar/CategoryWidget"),
		InstructorWidget: () => import("~/components/courses/sidebar/InstructorWidget"),
		LevelWidget: () => import("~/components/courses/sidebar/LevelWidget"),
		LanguagesWidget: () => import("~/components/courses/sidebar/LanguagesWidget"),
		PricingWidget: () => import("~/components/courses/sidebar/PricingWidget"),
	},

	data() {
		return {
			courses,
			layout: "gridLayout",
			filterCourses: [],
			paramsList: [],
			currentPage: 1,
			perPage: 12,
		};
	},

	computed: {
		getItems() {
			const start = (this.currentPage - 1) * this.perPage;
			const end = this.currentPage * this.perPage;
			return this.filterCourses.slice(start, end);
		},
		getPaginateCount() {
			return Math.ceil(this.filterCourses.length / this.perPage);
		},
	},

	watch: {
		$route() {
			this.updateCourseData();
		},
	},

	mounted() {
		this.updateCourseData();
	},

	methods: {
		updateCourseData() {
			const selectedCategory = this.$route.query.category?.split(",").filter((word) => word !== "") || [];
			const selectedInstructor = this.$route.query.instructor?.split(",").filter((word) => word !== "") || [];
			const selectedLevel = this.$route.query.levels?.split(",").filter((word) => word !== "") || [];
			const selectedLanguage = this.$route.query.language?.split(",").filter((word) => word !== "") || [];
			this.paramsList = selectedCategory;

			if (selectedCategory.length > 0 || selectedInstructor.length > 0 || selectedLevel.length > 0 || selectedLanguage.length > 0) {
				const courseItem = this.courses.filter(
					(course) =>
						selectedCategory.includes(course.categories.slug) ||
						selectedInstructor.includes(course.instructor.id) ||
						selectedLevel.includes(course.levels.slug) ||
						selectedLanguage.includes(course.languages.slug)
				);
				this.filterCourses = [];
				this.filterCourses.push(...courseItem);
			} else {
				this.filterCourses = [...this.courses];
			}
		},

		paginateClickCallback(page) {
			this.currentPage = Number(page);
		},
	},
};
</script>