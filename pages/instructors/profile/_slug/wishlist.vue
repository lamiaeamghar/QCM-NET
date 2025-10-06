<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="my-courses pt-11 pb-section">
			<div class="container">
				<h1 class="text-[28px] mb-7.5">Wishlist</h1>
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5">
					<CourseGridStyleTwo
						v-for="(course, i) in courses.slice(0, 8)"
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
		CourseGridStyleTwo: () => import("~/components/courses/CourseGridStyleTwo"),
	},

	layout: "InstructorDashboard",

	data() {
		return {
			courses,
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
};
</script>