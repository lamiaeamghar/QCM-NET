<template>
	<div>
		<!-- <BreadcrumbStyleTwo
			active-text="Register"
			page-title="Register"
		/> -->
		<Register />
	</div>
</template>

<script>
export default {
	components: {
		// BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		Register: () => import("~/components/register/Register"),
	},

	head() {
		return {
			title: "Sign Up",
		};
	},
};
</script>