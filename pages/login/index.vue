<template>
	<div>
		<BreadcrumbStyleTwo
			active-text="Log In"
			page-title="Log In"
		/>
		<Login />
	</div>
</template>

<script>
export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		Login: () => import("~/components/login/Login"),
	},

	head() {
		return {
			title: "Log In",
		};
	},
};
</script>