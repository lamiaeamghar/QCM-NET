<template>
	<div class="home-container">
		<HeroLanguageAcademic />
		<BannerStyleFour />
		<IconBoxOne />
		<LanguageCourses />
		<FunFactStyleTwo />
		<CountdownSignupSection />
		<BlogSectionThree />
	</div>
</template>

<script>
export default {
	components: {
		HeroLanguageAcademic: () => import("~/components/hero/HeroLanguageAcademic"),
		BannerStyleFour: () => import("~/components/banner/BannerStyleFour"),
		IconBoxOne: () => import("~/components/elements/IconBoxOne"),
		LanguageCourses: () => import("~/components/courses/LanguageCourses"),
		FunFactStyleTwo: () => import("~/components/elements/FunFactStyleTwo"),
		CountdownSignupSection: () => import("~/components/elements/CountdownSignupSection"),
		BlogSectionThree: () => import("~/components/blog/BlogSectionThree"),
	},

	layout: "LanguageAcademicLayout",

	head() {
		return {
			title: "Language Academic",
		};
	},
};
</script>