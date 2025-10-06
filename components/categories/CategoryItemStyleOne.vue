<template>
	<n-link
		:to="`/course-category/${category.slug}`"
		class="category-item bg-[#f1f3f8] rounded flex items-center px-[30px] py-2.5 min-h-[70px] h-full hover:bg-primary group"
	>
		<div class="w-15">
			<inline-svg
				:src="category.icon.iconOne"
				class="hover"
			></inline-svg>
		</div>
		<h6 class="group-hover:text-white capitalize">{{ category.name }}</h6>
		<div class="scale-0 pl-3 group-hover:text-white group-hover:scale-100 transition-all">
			<i class="fas fa-angle-right"></i>
		</div>
	</n-link>
</template>

<script>
export default {
	props: {
		category: {
			type: Object,
			default: () => ({}),
		},
	},
};
</script>

<style lang="scss">
.hover * {
	@apply group-hover:fill-white;
}
.hover .text-lighten-fill-color {
	@apply group-hover:fill-primary;
}
.text-lighten-fill-color {
	@apply fill-[#d4e1f4];
}
</style>
