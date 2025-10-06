<template>
	<div class="home-container">
		<HeroBannerOne />
		<FeatureListStyleOne />
		<TopCategoriesWrapperOne />
		<CoursesSectionOne />
		<CallToActionOne />
		<TestimonialOne />
		<BannerStyleOne />
		<BrandPartner />
	</div>
</template>

<script>
export default {
	components: {
		TopCategoriesWrapperOne: () => import("~/components/categories/TopCategoriesWrapperOne"),
		CoursesSectionOne: () => import("~/components/courses/CoursesSectionOne"),
		CallToActionOne: () => import("~/components/elements/CallToActionOne"),
	},

	layout: "LayoutStyleOne",

	head() {
		return {
			title: "Online Learning and Education Template",
		};
	},
};
</script>
