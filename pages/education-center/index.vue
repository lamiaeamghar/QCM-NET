<template>
	<div class="home-container">
		<HeroEducationCenter />
		<TopCategoriesWrapperThree />
		<TrendingCourses />
		<FunFact />
		<EventsTwo />
		<TestimonialFour />
		<BrandPartnerThree />
		<NewsletterOne />
	</div>
</template>

<script>
export default {
	components: {
		HeroEducationCenter: () => import("~/components/hero/HeroEducationCenter"),
		TopCategoriesWrapperThree: () => import("~/components/categories/TopCategoriesWrapperThree"),
		TrendingCourses: () => import("~/components/courses/TrendingCourses"),
		FunFact: () => import("~/components/become-instructor/FunFact"),
		EventsTwo: () => import("~/components/events/EventsTwo"),
		TestimonialFour: () => import("~/components/testimonial/TestimonialFour"),
		NewsletterOne: () => import("~/components/newsletter/NewsletterOne"),
	},

	layout: "EducationCenterLayout",

	head() {
		return {
			title: "Education Center",
		};
	},
};
</script>

<style lang="scss">
.body-education-center {
	.footer-section {
		@apply bg-transparent;
	}
}
</style>