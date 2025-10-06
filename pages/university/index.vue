<template>
	<div class="home-container">
		<HeroUniversity />
		<AboutPageHeaderThree />
		<ApplyCallToAction />
		<Academics />
		<CampusLife />
		<EventsThree />
		<BlogSectionTwo />
	</div>
</template>

<script>
export default {
	components: {
		HeroUniversity: () => import("~/components/hero/HeroUniversity"),
		AboutPageHeaderThree: () => import("~/components/about/AboutPageHeaderThree"),
		ApplyCallToAction: () => import("~/components/university/ApplyCallToAction"),
		Academics: () => import("~/components/university/Academics"),
		CampusLife: () => import("~/components/university/CampusLife"),
		EventsThree: () => import("~/components/events/EventsThree"),
		BlogSectionTwo: () => import("~/components/blog/BlogSectionTwo"),
	},

	layout: "UniversityLayout",

	head() {
		return {
			title: "University",
		};
	},
};
</script>