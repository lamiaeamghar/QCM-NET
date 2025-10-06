<template>
	<div class="pb-section">
		<div class="container">
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-7.5">
				<div
					v-for="(item, i) in items"
					:key="i"
				>
					<n-link
						:to="item.link"
						class="text-center px-7.5 py-12 block rounded-lg hover:shadow-[0_10px_50px_rgb(0,0,0,8%)]"
					>
						<img
							:src="item.icon"
							:alt="item.title"
						>
						<h5 class="mt-6 leading-relaxed">{{ item.title }}</h5>
					</n-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: "15 Languages from Beginner to Expert",
					icon: "/images/icon/image-box-05.png",
					link: "/courses",
				},
				{
					title: "One-to-One or Group Language Programs",
					icon: "/images/icon/image-box-06.png",
					link: "/courses",
				},
				{
					title: "Instructed by Language Experts",
					icon: "/images/icon/image-box-07.png",
					link: "/courses",
				},
				{
					title: "A Residential Campus Community",
					icon: "/images/icon/image-box-08.png",
					link: "/courses",
				},
			],
		};
	},
};
</script>