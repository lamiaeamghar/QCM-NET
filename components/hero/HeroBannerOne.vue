<template>
	<div class="slider-section bg-white-800 py-16 overflow-hidden">
		<div class="slider-wrapper relative z-10">
			<div class="container">
				<div class="grid grid-cols-12 gap-30 items-center">
					<div class="col-span-12 md:col-span-6">
						<div class="max-w-[600px]">
							<div class="slider-caption">
								<h3 class="text-base leading-normal tracking-[2px] text-primary uppercase">Start to success</h3>
								<h2 class="text-xl sm:text-[28px] md:text-2xl lg:text-4xl xl:text-[40px] leading-tight mt-5">Access To <mark class="bg-transparent text-primary relative inline-block pb-3 before:content-titleShape before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2">5500+</mark> Courses from <mark class="bg-transparent text-primary relative inline-block pb-3 before:content-titleShape before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2">480</mark> Instructors & Institutions</h2>
								<p class="text-normal sm:text-lg leading-relaxed mt-6">Take your learning organization to the next level.</p>
							</div>

							<div class="slider-search relative mt-5 sm:mt-11">
								<form @submit.prevent="submitForm">
									<input
										v-model="searchTerm"
										type="text"
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
					</div>
					<div class="col-span-12 md:col-span-6">
						<div class="relative pb-7 mt-5 md:mt-0">
							<div class="slider-image__image text-center lg:text-right">
								<img
									src="/images/hero/home-01-hero-image.png"
									alt="Hero Image"
								>
							</div>
							<div class="absolute bottom-0 left-5 md:left-0">
								<div class="w-14 h-14 rounded-full bg-secondary flex items-center justify-center absolute -top-7 -left-7">
									<inline-svg
										src="/images/svg/notification.svg"
										alt="icon"
										class="w-7 h-7 fill-white"
									></inline-svg>
								</div>
								<div class="px-7 py-5 bg-white rounded-lg max-w-[254px] z-20 shadow-[0px_30px_53px_0px_rgba(0,0,0,12%)]">
									<h4 class="text-sm text-heading leading-relaxed font-normal mb-0">Tomorrow is our <strong class="font-semibold">"When I Grow Up" Spirit Day!</strong></h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ShapeWithAnimation
				img-src="/images/shape/edumall-shape-grid-dots.png"
				data-depth="0.8"
				class-list="absolute right-1/3 bottom-0 top-auto left-auto -z-10"
			/>
			<ShapeWithAnimation
				data-depth="-1"
				class-list="absolute right-0 top-1/2 left-auto -z-10"
				shape-style-class-list=" rounded-full border border-[#CAD0FA] w-[700px] h-[700px]"
			/>
			<ShapeWithAnimation
				data-depth="1.6"
				class-list="absolute right-[88px] top-auto bottom-[-114px] left-auto -z-10"
				shape-style-class-list=" rounded-full border border-[#CAD0FA] w-[275px] h-[275px]"
			/>
			<ShapeWithAnimation
				img-src="/images/shape/edumall-shape-01.png"
				data-depth="0.6"
				class-list="absolute right-[10%] bottom-[30%] top-auto left-auto -z-10"
			/>
		</div>
	</div>
</template>

<script>
export default {
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