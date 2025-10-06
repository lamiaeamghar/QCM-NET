<template>
	<div
		class="main"
		:class="[`body-${$store.state.bodyClass}`]"
	>
		<HeaderTopUniversity />
		<UniversityNavigationBar />
		<Nuxt />
		<FooterStyleThree />
	</div>
</template>

<script>
export default {
	components: {
		HeaderTopUniversity: () => import("@/components/header/HeaderTopUniversity"),
		UniversityNavigationBar: () => import("@/components/header/UniversityNavigationBar"),
	},
	/* mounted() {
		this.$nextTick(() => {
			this.$nuxt.$loading.start();
			setTimeout(() => this.$nuxt.$loading.finish(), 1000);
		});
	}, */
};
</script>