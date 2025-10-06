<template>
	<div class="home-container">
		<HeroOnlineAcademy />
		<CoursesSectionThree />
		<CallToActionOne class="pb-section" />
		<FunFactThree />
		<EventsOne />
		<TestimonialThree />
		<BlogSectionOne />
	</div>
</template>

<script>
export default {
	components: {
		HeroOnlineAcademy: () => import("~/components/hero/HeroOnlineAcademy"),
		CoursesSectionThree: () => import("~/components/courses/CoursesSectionThree"),
		CallToActionOne: () => import("~/components/elements/CallToActionOne"),
		FunFactThree: () => import("~/components/elements/FunFactThree"),
		TestimonialThree: () => import("~/components/testimonial/TestimonialThree"),
		BlogSectionOne: () => import("~/components/blog/BlogSectionOne"),
	},

	layout: "LayoutStyleTwo",

	head() {
		return {
			title: "Online Academy",
		};
	},
};
</script>
