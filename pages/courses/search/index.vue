<template>
	<div class="course-page">
		<BreadcrumbStyleTwo
			active-text="Courses"
			page-title="Courses"
		/>

		<div class="course-wrapper py-section">
			<div class="container">
				<div class="grid grid-cols-12 gap-7.5 md:gap-12">
					<div class="col-span-12">
						<div
							v-if="filteredItems.length > 0"
							class="course-inner"
						>
							<div class="layout-switcher mb-5 xs:flex items-center justify-between">
								<p class="text-base text-[#7e7e7e] font-semibold mb-0">We found <strong class="text-heading">{{ filteredItems.length }}</strong> courses available for you</p>
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
									v-for="(course, index) in filteredItems"
									:key="index"
									class="col-span-12 sm:col-span-6 lg:col-span-3"
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
						</div>
						<div
							v-else
							class="text-center"
						>
							<h4>Item not found!</h4>
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
	},

	data() {
		return {
			courses,
			layout: "gridLayout",
		};
	},

	computed: {
		filteredItems() {
			const searchTerm = this.$route.query.term || "";
			return this.courses.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
		},
	},
};
</script>