<template>
	<div class="about-wrapper">
		<AboutPageHeader />
		<FunFactTwo />
		<SpecialPolicy />
		<AboutGallery />
	</div>
</template>

<script>
export default {
	components: {
		AboutPageHeader: () => import("~/components/about/AboutPageHeader"),
		FunFactTwo: () => import("~/components/about/FunFactTwo"),
		SpecialPolicy: () => import("~/components/about/SpecialPolicy"),
		AboutGallery: () => import("~/components/about/AboutGallery"),
	},

	head() {
		return {
			title: "About Us",
		};
	},
};
</script>