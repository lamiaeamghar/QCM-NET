<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<InstructorDashboardHeader :instructor="instructor" />
		<div class="dashboard-content pt-11 pb-section">

		</div>
	</div>
</template>

<script>
import instructors from "~/data/instructors.json";
export default {
	components: {
		InstructorDashboardHeader: () => import("~/components/instructor/InstructorDashboardHeader"),
	},

	layout: "InstructorDashboard",

	data() {
		return {
			instructors,
		};
	},

	head() {
		return {
			title: "Instructor Profile",
			bodyAttrs: {
				class: "bg-white-800",
			},
		};
	},
};
</script>