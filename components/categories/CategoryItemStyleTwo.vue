<template>
	<div class="group">
		<n-link
			:to="`/course-category/${category.slug}`"
			class="relative block rounded z-10 overflow-hidden after:absolute after:block after:contents-[] after:inset-0 bg-gradient"
		>
			<img
				:src="category.icon.thumbnail"
				:alt="category.name"
				class="w-full group-hover:scale-110 transition-all duration-700"
			>
			<div class="absolute bottom-0 left-0 w-full z-10 px-6 py-[30px]">
				<h4 class="text-white capitalize group-hover:text-secondary transition-all">{{ category.name }}</h4>
			</div>
		</n-link>
	</div>
</template>

<script>
export default {
	props: {
		category: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style lang="scss" scoped>
.bg-gradient {
	&::after {
		background-image: linear-gradient(180deg, transparent 30%, #000);
	}
}
</style>