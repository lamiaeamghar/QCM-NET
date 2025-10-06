<template>
	<div class="bg-[#f5f7fd] px-5 pt-5 pb-5">
		<div class="container">
			<ul class="flex flex-wrap items-center">
				<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					<n-link to="/">Home</n-link>
				</li>
				<li
					v-if="urlText"
					class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden"
				>
					<n-link :to="url">{{ urlText }}</n-link>
				</li>
				<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					{{ pageTitle }}
				</li>
			</ul>
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
		pageTitle: {
			type: String,
			default: "",
		},
	},
};
</script>