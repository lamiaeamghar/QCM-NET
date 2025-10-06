<template>
	<div class="course-page">
		<BreadcrumbStyleOne
			url="/courses"
			url-text="Courses"
			:active-text="`${slug}`"
			:page-title="`${slug}`"
		/>

		<div class="course-wrapper py-section">
			<div class="container">
				<div class="grid grid-cols-12 gap-12">
					<div class="col-span-12 lg:col-span-3 space-y-7.5">
						<CourseSidebar />
						<InstructorWidget />
					</div>
					<div class="col-span-12 lg:col-span-9">
						<div class="course-inner">
							<div class="layout-switcher mb-5 flex items-center justify-between">
								<p class="text-base text-[#7e7e7e] font-semibold mb-0">We found <strong class="text-heading">{{ coursesByTag.length }}</strong> courses available for you</p>
								<div class="space-x-1">
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
									v-for="(course, index) in coursesByTag"
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
		BreadcrumbStyleOne: () => import("~/components/elements/BreadcrumbStyleOne"),
		CourseListStyle: () => import("~/components/courses/CourseListStyle"),
		CourseGridStyle: () => import("~/components/courses/CourseGridStyle"),
		CourseSidebar: () => import("~/components/courses/sidebar/CourseSidebar"),
		InstructorWidget: () => import("~/components/courses/sidebar/InstructorWidget"),
	},

	data() {
		return {
			courses,
			layout: "listLayout",
			slug: this.$route.params.tag,
		};
	},

	computed: {
		coursesByTag() {
			return this.courses.filter((course) => course.tags.includes(this.slug));
		},
	},
};
</script>