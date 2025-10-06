<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="my-courses pt-11 pb-section">
			<div class="container">
				<h1 class="text-[28px] mb-7.5">My Courses</h1>
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5">
					<CourseGridStyle
						v-for="(course, i) in myCourses"
						:key="i"
						:course="course"
					/>
				</div>
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

	layout: "InstructorDashboard",

	data() {
		return {
			courses,
			slug: this.$route.params.slug,
		};
	},

	head() {
		return {
			title: "Dashboard",
			bodyAttrs: {
				class: "bg-white-800",
			},
		};
	},

	computed: {
		myCourses() {
			return this.courses.filter((item) => item.instructor.id.includes(this.slug));
		},
	},
};
</script>