<template>
	<div class="about-wrapper">
		<AboutPageHeaderTwo />
		<FunFact />
		<TestimonialStyleTwo />
		<BrandPartnerTwo />
		<VideoCallToAction />
		<TeamMember />
	</div>
</template>

<script>
export default {
	components: {
		AboutPageHeaderTwo: () => import("~/components/about/AboutPageHeaderTwo"),
		FunFact: () => import("~/components/become-instructor/FunFact"),
		TestimonialStyleTwo: () => import("~/components/testimonial/TestimonialStyleTwo"),
		BrandPartnerTwo: () => import("~/components/brand-partner/BrandPartnerTwo"),
		VideoCallToAction: () => import("~/components/about/VideoCallToAction"),
		TeamMember: () => import("~/components/about/TeamMember"),
	},

	head() {
		return {
			title: "About Us 02",
		};
	},
};
</script>