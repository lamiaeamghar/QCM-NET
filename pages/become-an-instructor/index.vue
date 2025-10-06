<template>
	<div class="become-instructor">
		<BecomeInstructorPageHeader />
		<DiscoverPotential />
		<FunFact />
		<InstructorTab />
		<InstructorBanner />
		<BecomeInstructorCTA />
	</div>
</template>

<script>
export default {
	components: {
		BecomeInstructorPageHeader: () => import("~/components/become-instructor/BecomeInstructorPageHeader"),
		DiscoverPotential: () => import("~/components/become-instructor/DiscoverPotential"),
		FunFact: () => import("~/components/become-instructor/FunFact"),
		InstructorTab: () => import("~/components/become-instructor/InstructorTab"),
		InstructorBanner: () => import("~/components/become-instructor/InstructorBanner"),
		BecomeInstructorCTA: () => import("~/components/become-instructor/BecomeInstructorCTA"),
	},

	head() {
		return {
			title: "Become an Instructor",
		};
	},
};
</script>