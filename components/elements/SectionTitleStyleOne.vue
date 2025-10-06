<template>
	<div class="section-title mb-12">
		<h2 class="-mt-2.5 text-2xl md:text-3xl">{{ title }} <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:-z-10">{{ highlightTitle }}</mark> </h2>
		<p
			v-if="subTitle"
			class="mt-6"
		>{{ subTitle }}</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "",
		},
		highlightTitle: {
			type: String,
			default: "",
		},
		subTitle: {
			type: String,
			default: "",
		},
	},
};
</script>