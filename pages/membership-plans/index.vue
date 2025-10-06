<template>
	<div>
		<BreadcrumbStyleTwo
			active-text="Membership Plans"
			page-title="Membership Plans"
		/>
		<PricingPlanStyleOne />
		<PricingPlanStyleTwo />
	</div>
</template>

<script>
export default {
	components: {
		PricingPlanStyleOne: () => import("~/components/elements/PricingPlanStyleOne"),
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		PricingPlanStyleTwo: () => import("~/components/elements/PricingPlanStyleTwo"),
	},

	head() {
		return {
			title: "Membership Plans",
		};
	},
};
</script>