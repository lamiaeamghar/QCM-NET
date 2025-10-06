<template>
	<n-link
		:to="`/course-category/${category.slug}`"
		class="border-2 border-gallery rounded flex items-center px-7.5 py-2.5 min-h-[94px] h-full hover:bg-white group hover:border-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all duration-300"
	>
		<div class="w-12">
			<inline-svg :src="category.icon.iconTwo"></inline-svg>
		</div>
		<div class="pl-3.5">
			<div class="flex">
				<h6 class="group-hover:text-primary capitalize">{{ category.name }}</h6>
				<div class="scale-0 pl-3 group-hover:text-primary group-hover:scale-100 transition-all">
					<i class="fas fa-angle-right"></i>
				</div>
			</div>
			<p class="mt-1">{{ category.desc }}</p>

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
