<template>
	<div class="guide-section py-section">
		<div class="container">
			<div class="section-top md:flex justify-between mb-8 md:mb-8">
				<SectionTitleStyleOne
					title="EduMall"
					highlight-title="Guides"
					class="mb-8 md:mb-0"
				/>

				<ButtonDefault
					label="View all"
					link="/"
					variation-class="bg-white-500 text-primary hover:bg-primary hover:text-white"
				/>
			</div>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-30">
				<div
					v-for="feature in features"
					:key="feature.id"
					class="text-center"
				>
					<img
						:src="feature.icon"
						:alt="feature.title"
					>
					<div class="mt-2">
						<h6 class="leading-[1.75]">{{ feature.title }}</h6>
						<p class="mt-2.5">{{ feature.desc }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		SectionTitleStyleOne: () => import("~/components/elements/SectionTitleStyleOne"),
		ButtonDefault: () => import("~/components/elements/ButtonDefault"),
	},

	data() {
		return {
			features: [
				{
					id: 1,
					title: "Learn The Essential Skills",
					desc: "Like graphic design, business analytics, coding and much more",
					icon: "/images/icon/image-box-01.png",
				},
				{
					id: 2,
					title: "Earn Certificates And Degrees",
					desc: "From top institutions and universities with high reputation over the world",
					icon: "/images/icon/image-box-02.png",
				},
				{
					id: 3,
					title: "Get Ready for The Next Career",
					desc: "With high demands in mastering new skills in IT, analytics and more",
					icon: "/images/icon/image-box-03.png",
				},
				{
					id: 4,
					title: "Master at Different Areas",
					desc: "With EduMall's thousands of courses instructed by top experts",
					icon: "/images/icon/image-box-04.png",
				},
			],
		};
	},
};
</script>