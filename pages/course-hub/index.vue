<template>
	<div class="home-container">
		<HeroCourseHub />
		<BannerStyleTwo class="pt-section" />
		<CoursesSectionTwo />
		<CallToActionOne />
		<BrowseSubject />
		<BrandPartnerCarousel />
		<Guides />
		<BannerStyleThree />
	</div>
</template>

<script>
export default {
	components: {
		BannerStyleTwo: () => import("~/components/banner/BannerStyleTwo"),
		CoursesSectionTwo: () => import("~/components/courses/CoursesSectionTwo"),
		CallToActionOne: () => import("~/components/elements/CallToActionOne"),
		BrowseSubject: () => import("~/components/categories/BrowseSubject"),
		BrandPartnerCarousel: () => import("~/components/brand-partner/BrandPartnerCarousel"),
		Guides: () => import("~/components/feature/Guides"),
		BannerStyleThree: () => import("~/components/banner/BannerStyleThree"),
	},

	head() {
		return {
			title: "Online Learning and Education Template",
		};
	},
};
</script>

<style lang="scss">
.body-course-hub {
	.footer-section {
		@apply bg-white;
	}
}
</style>
