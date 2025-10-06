<template>
	<div class="main">
		<DashboardVerticalMenu
			:instructor="instructor"
			:class="{'!opacity-100 !visible !translate-x-[none]' : isSidebarNav}"
			@toggleMainNav="isSidebarNav = !isSidebarNav"
		/>
		<OffCanvasMobileMenu
			:class="{'!opacity-100 !visible' : navOpen}"
			@toggleNav="navOpen = !navOpen"
		/>
		<InstructorDashboardHeader
			:instructor="instructor"
			@toggleNav="navOpen = !navOpen"
			@toggleMainNav="isSidebarNav = !isSidebarNav"
		/>
		<Nuxt />
	</div>
</template>

<script>
import instructors from "~/data/instructors.json";
export default {
	components: {
		DashboardVerticalMenu: () => import("~/components/instructor/DashboardVerticalMenu"),
		OffCanvasMobileMenu: () => import("~/components/instructor/OffCanvasMobileMenu"),
		InstructorDashboardHeader: () => import("~/components/instructor/InstructorDashboardHeader"),
	},

	data() {
		return {
			instructors,
			slug: this.$route.params.slug,
			navOpen: false,
			isSidebarNav: false,
		};
	},
	computed: {
		instructor() {
			return this.instructors.find((instructor) => instructor.id === this.slug);
		},
	},
	watch: {
		$route() {
			this.isSidebarNav = false;
		},
	},
};
</script>