<template>
	<div class="breadcrumb bg-[#F4F9FF] px-5 pt-5 pb-9">
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
			<h2 class="text-primary text-[40px] mt-5 capitalize">{{ pageTitle }} Courses</h2>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		pageTitle: {
			type: String,
			default: "",
		},
		urlText: {
			type: String,
			default: "",
		},
		url: {
			type: String,
			default: "",
		},
		activeText: {
			type: String,
			default: "",
		},
	},
};
</script>