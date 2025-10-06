<template>
	<div class="breadcrumb bg-white-800 px-5 pt-[34px] pb-12 lg:pb-[66px]">
		<div class="container">
			<ul class="flex flex-wrap items-center">
				<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden hover:text-primary">
					<n-link to="/">Home</n-link>
				</li>
				<li
					v-if="url"
					class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden hover:text-primary"
				>
					<n-link :to="url">{{ urlText }}</n-link>
				</li>
				<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					{{ activeText }}
				</li>
			</ul>
			<h1
				v-if="pageTitle"
				class="text-2xl lg:text-[40px] pt-9 lg:pt-3 capitalize text-center"
				v-html="pageTitle"
			></h1>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: "",
		},
		urlText: {
			type: String,
			default: "",
		},
		activeText: {
			type: String,
			default: "",
		},
		pageTitle: {
			type: String,
			default: "",
		},
	},
};
</script>