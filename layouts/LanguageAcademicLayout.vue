<template>
	<div
		class="main"
		:class="[`body-${$store.state.bodyClass}`]"
	>
		<HeaderLanguageAcademic />
		<Nuxt />
		<FooterStyleFour />
	</div>
</template>

<script>
export default {
	components: {},
	/* mounted() {
		this.$nextTick(() => {
			this.$nuxt.$loading.start();
			setTimeout(() => this.$nuxt.$loading.finish(), 1000);
		});
	}, */
};
</script>