<template>
	<div class="academic-section py-section bg-white-500 relative overflow-hidden">
		<div class="custom-container">
			<div class="section-title mb-10 text-center">
				<h2 class="-mt-2.5 mb-3 text-2xl md:text-3xl lg:text-[40px]"><mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Academics</mark></h2>
				<p>Focusing on high education with the best quality.</p>
			</div>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5 relative z-10">
				<article
					v-for="(academic, i) in academicList"
					:key="i"
					class="overflow-hidden group"
				>
					<n-link to="/">
						<div class="relative after:absolute after:block after:contents-[] after:inset-0 bg-gradient rounded overflow-hidden">
							<img
								:src="academic.thumb"
								:alt="academic.title"
								class="w-full group-hover:scale-110 transition-all duration-300"
							>
							<div class="absolute bottom-6 w-full z-10 px-6 text-center">
								<h4 class="text-white capitalize group-hover:text-secondary transition-all">{{ academic.title }}</h4>
							</div>
						</div>
						<div class="mt-5 text-center">
							<p v-html="academic.desc"></p>
						</div>
					</n-link>
				</article>
			</div>
		</div>
		<ShapeWithAnimation
			data-depth="1"
			class-list="absolute -top-[180px] -left-[180px]"
			shape-style-class-list="rounded-full border border-primary/20 w-[150px] lg:w-[450px] h-[150px] lg:h-[450px]"
		/>
		<ShapeWithAnimation
			data-depth="0.6"
			class-list="absolute -bottom-[100px] left-auto right-0"
			shape-style-class-list="rounded-full border border-primary/20 w-[340px] h-[340px]"
		/>
		<ShapeWithAnimation
			data-depth="0.6"
			class-list="absolute top-auto -bottom-[100px] lg:-bottom-[350px] left-auto -right-[170px] lg:-right-[200px]"
			shape-style-class-list="rounded-full border border-primary/20 w-[270px] lg:w-[770px] h-[270px] lg:h-[770px]"
		/>
	</div>
</template>

<script>
export default {
	components: {
		ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
	},

	data() {
		return {
			academicList: [
				{
					id: 1,
					title: "Undergraduate Admissions",
					thumb: "/images/academics/university-image-01.jpg",
					desc: "Do you have an <span class='font-semibold'>appetite for knowledge</span> ? Are you looking for an exceptional education? QCM-NET might be the place for you.",
				},
				{
					id: 2,
					title: "Graduate Admissions",
					thumb: "/images/academics/university-image-02.jpg",
					desc: "Ready to pursue your graduate studies? At the graduate level, each <span class='font-semibold'>QCM-NET school</span> has its own, separate admissions process.",
				},
				{
					id: 3,
					title: "Continuing Education",
					thumb: "/images/academics/university-image-03.jpg",
					desc: "QCM-NET's Department for Continuing Education runs <span class='font-semibold'>over 1000 courses</span> per year, providing adult education for lifelong learning.",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.bg-gradient {
	&::after {
		background-image: linear-gradient(180deg, transparent 50%, #000);
	}
}
</style>