<template>
	<div
		v-show="isToggled"
		class="header-top bg-tangaroa p-1 hidden sm:block relative"
	>
		<div class="container">
			<div class="text-center text-white p-3">
				<p>Continue learning with high-quality resources on <strong>QCM-NET</strong>.</p>
			</div>
			<button
				class="text-lg text-white hover:text-secondary absolute top-1/2 -translate-y-1/2 right-10"
				@click="isToggled = !isToggled"
			><i class="fas fa-times"></i></button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isToggled: true,
		};
	},
};
</script>