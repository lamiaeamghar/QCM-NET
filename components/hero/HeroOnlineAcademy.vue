<template>
	<div class="bg-[#F5F7FD] relative overflow-hidden pt-section pb-[120px] z-10">
		<div class="container">
			<div class="max-w-[630px] mx-auto">
				<div class="slider-caption-03 text-center">
					<h1 class="text-3xl sm:text-4xl md:text-[64px] text-tangaroa">Learn Something <span class="text-primary">New</span> Today</h1>
				</div>
				<div class="relative mt-7 lg:mt-15 z-10">
					<form @submit.prevent="submitForm">
						<input
							v-model="searchTerm"
							placeholder="What do you want to learn?"
							class="h-16 w-full bg-white text-sm px-5 py-1 rounded-md text-heading pr-16 focus:outline outline-primary outline-1 shadow-[0_0_10px_rgba(0,0,0,10%)]"
						>
						<button
							type="submit"
							class="absolute top-0 right-0 h-full p-0 w-16 text-center text-primary text-xl bg-transparent"
						>
							<i class="search-btn-icon fas fa-search"></i>
						</button>
					</form>
				</div>
			</div>
			<div class="max-w-[700px] mx-auto mt-44 md:mt-24">
				<div class="grid sm:grid-cols-3 gap-7.5">
					<div class="sm:pr-6">
						<div class="text-[34px] text-primary">
							<inline-svg
								src="/images/svg/courses-2.svg"
								class="w-[1em] h-[1em]"
							></inline-svg>
						</div>
						<div class="mt-4">
							<h6 class="font-bold mb-3">6,000 <br> Online Courses</h6>
							<p>Explore wide-range of online courses</p>
						</div>
					</div>
					<div class="sm:pr-6">
						<div class="text-[34px] text-primary">
							<inline-svg
								src="/images/svg/star-2.svg"
								class="w-[1em] h-[1em]"
							></inline-svg>
						</div>
						<div class="mt-4">
							<h6 class="font-bold mb-3">Top <br> Instructors</h6>
							<p>Learn from the best experts of the subjects</p>
						</div>
					</div>
					<div class="sm:pr-6">
						<div class="text-[34px] text-primary">
							<inline-svg
								src="/images/svg/watch.svg"
								class="w-[1em] h-[1em]"
							></inline-svg>
						</div>
						<div class="mt-4">
							<h6 class="font-bold mb-3">Portable <br> Programs</h6>
							<p>Allow you to learn anywhere, anytime</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<img
			class="absolute w-[25vw] md:w-[13vw] max-w-[25vw] md:max-w-[13vw] top-[20%] md:top-[40%] right-10 md:right-24 rounded-tl-[20px] lg:rounded-tl-[40px] rounded-tr-[10px] rounded-br-[20px] lg:rounded-br-[40px] rounded-bl-[10px] shadow-[0px_7px_35px_0px_rgba(0,0,0,0.15)]"
			src="/images/hero/home-03-hero-image-03.jpg"
			alt="image"
		>
		<img
			class="absolute w-[25vw] md:w-[12vw] max-w-[25vw] md:max-w-[12vw] top-[20%] md:top-[38%] left-[6%] rounded-tl-[20px] lg:rounded-tl-[40px] rounded-tr-[10px] rounded-br-[20px] lg:rounded-br-[40px] rounded-bl-[10px] shadow-[0px_7px_35px_0px_rgba(0,0,0,0.15)]"
			src="/images/hero/home-03-hero-image-02.jpg"
			alt="image"
		>
		<img
			class="absolute w-[20vw] md:w-[9vw] max-w-[20vw] md:max-w-[9vw] top-[15%] md:top-[30%] left-[2%] rounded-2xl shadow-[0px_7px_35px_0px_rgba(0,0,0,0.15)]"
			src="/images/hero/home-03-hero-image-01.jpg"
			alt="image"
		>

		<div class="absolute bottom-[145px] right-[163px] hidden lg:block">
			<div class="w-14 h-14 rounded-full bg-[#6CBD7E] flex items-center justify-center absolute -top-7 -left-7 text-xl text-white">
				<i class="far fa-users"></i>
			</div>
			<div class="px-7 py-5 bg-white rounded-lg max-w-[254px] z-20 shadow-[0px_30px_53px_0px_rgba(0,0,0,12%)]">
				<h4 class="text-sm text-heading leading-relaxed font-normal mb-0">Congratulations to Sophia <strong class="font-semibold">for being student</strong> of the week this week!</h4>
			</div>
		</div>

		<ShapeWithAnimation
			img-src="/images/shape/EduMall-shape-grid-dots-02.png"
			data-depth="1.2"
			class-list="absolute right-[300px] bottom-[60%] top-auto left-auto -z-10"
		/>
		<ShapeWithAnimation
			data-depth="-1"
			class-list="absolute left-0 top-auto -bottom-[100px] -z-10"
			shape-style-class-list="rounded-full border border-[#CAD0FA] w-[400px] md:w-[700px] h-[400px] md:h-[700px]"
		/>
		<ShapeWithAnimation
			data-depth="-1.6"
			class-list="absolute top-auto bottom-0 left-0 -z-10"
			shape-style-class-list="rounded-full border border-[#CAD0FA] w-[275px] h-[275px]"
		/>
		<ShapeWithAnimation
			img-src="/images/shape/EduMall-shape-01.png"
			data-depth="-0.6"
			class-list="absolute right-[2%] bottom-[10%] top-auto left-auto w-[100px] lg:w-auto -z-10"
		/>
		<ShapeWithAnimation
			img-src="/images/shape/EduMall-shape-01.png"
			data-depth="1.8"
			class-list="absolute left-[50px] bottom-1/4 top-auto w-[100px] lg:w-auto -z-10"
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
			searchTerm: this.$route.query.term || "",
		};
	},
	methods: {
		submitForm() {
			this.$router.push({ path: "/courses/search", query: { term: this.searchTerm } });
		},
	},
};
</script>