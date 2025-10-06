<template>
	<div
		class="main"
		:class="[`body-${$store.state.bodyClass}`]"
	>
		<HeaderTopLightBg />
		<HeaderSimple />
		<Nuxt />
		<FooterStyleTwo />
	</div>
</template>

<script>
export default {
	/* mounted() {
		this.$nextTick(() => {
			this.$nuxt.$loading.start();
			setTimeout(() => this.$nuxt.$loading.finish(), 1000);
		});
	}, */
};
</script>