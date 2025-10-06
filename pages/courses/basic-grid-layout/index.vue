<template>
	<div class="course-page">
		<BreadcrumbStyleTwo
			active-text="Courses"
			page-title="basic grid layout"
		/>

		<div class="course-wrapper py-section">
			<div class="container">
				<div class="grid grid-cols-12 gap-7.5 md:gap-12">
					<div class="col-span-12">
						<div class="course-inner">
							<div class="layout-switcher mb-5 sm:flex items-center justify-between">
								<p class="text-base text-[#7e7e7e] font-semibold mb-0">We found <strong class="text-heading">{{ courses.length }}</strong> courses available for you</p>
								<div class="space-x-8 mt-3 sm:mt-0 flex items-center">
									<div class="switcher">
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
									<button class="text-primary h-11 px-7 font-semibold bg-[#F5F5F5] rounded inline-block hover:text-white hover:bg-primary transition-all" @click="filterOpen = !filterOpen"><i class="fas fa-filter mr-3"></i> Filters</button>
								</div>
							</div>
							<div v-if="filterOpen">
								<CourseFilter />
							</div>
							<div
								class="grid grid-cols-12 gap-7.5"
								:class="{ 'list-layout': layout === 'listLayout', 'grid-layout': layout === 'gridLayout' }"
							>
								<div
									v-for="(course, index) in getItems"
									:key="index"
									class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
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
									:records="courses.length"
									:page-count="getPaginateCount"
									@paginate="paginateClickCallback"
								/>
							</div>
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
		CourseFilter: () => import("~/components/courses/CourseFilter"),
	},

	data() {
		return {
			courses,
			layout: "gridLayout",
			currentPage: 1,
			perPage: 12,
			filterOpen: false
		};
	},

	computed: {
		getItems() {
			const start = (this.currentPage - 1) * this.perPage;
			const end = this.currentPage * this.perPage;
			return this.courses.slice(start, end);
		},
		getPaginateCount() {
			return Math.ceil(this.courses.length / this.perPage);
		},
	},

	methods: {
		paginateClickCallback(page) {
			this.currentPage = Number(page);
		},
	},
};
</script>