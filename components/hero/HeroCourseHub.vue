<template>
	<div class="slider-section bg-[#EEF0F4] pt-15 md:pt-7.5 overflow-hidden">
		<div class="slider-wrapper relative z-10">
			<div class="container">
				<div class="grid grid-cols-12 gap-[30px] items-center">
					<div class="col-span-12 md:col-span-6">
						<div class="slider-caption md:-mt-7.5">
							<h3 class="text-base leading-normal tracking-[2px] text-primary uppercase">Keep Learning</h3>
							<h2 class="text-xl sm:text-[28px] md:text-2xl lg:text-4xl xl:text-[48px] leading-tight mt-5">Connect With Our <mark class="bg-transparent relative inline-block pb-5 before:content-titleShape before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2">Expert</mark></h2>
							<p class="text-normal sm:text-lg md:text-2xl leading-relaxed mt-3 pr-20">Acquire global knowledge and build your professional skills</p>

							<ButtonDefault
								label="Find courses"
								link="/courses"
								class="py-4 px-12 mt-7"
							/>
						</div>
					</div>
					<div class="col-span-12 md:col-span-6">
						<div class="relative">
							<div class="text-center">
								<img
									src="/images/hero/home-02-hero-image.png"
									alt="Hero Image"
								>
							</div>
							<div class="absolute bottom-[75px] left-5 md:left-0">
								<div class="w-14 h-14 rounded-full bg-[#6CBD7E] flex items-center justify-center absolute -top-7 -left-7">
									<inline-svg
										src="/images/svg/star.svg"
										alt="icon"
										class="w-7 h-7 fill-white"
									></inline-svg>
								</div>
								<div class="px-7 py-5 bg-white rounded-lg max-w-[290px] z-20 shadow-[0px_30px_53px_0px_rgba(0,0,0,12%)]">
									<div class="flex mb-1">
										<div class="text-secondary">
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
										</div>
										<span class="pl-2">(1,492)</span>
									</div>
									<p class="text-sm text-[#252525] leading-relaxed font-normal mb-0"><strong class="font-semibold">Oliver</strong> / Writer and Proofreader</p>
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
				data-depth="-1.6"
				class-list="absolute right-[88px] top-auto bottom-[-114px] left-auto -z-10"
				shape-style-class-list=" rounded-full border border-[#CAD0FA] w-[275px] h-[275px]"
			/>
			<ShapeWithAnimation
				img-src="/images/shape/edumall-shape-01.png"
				data-depth="-0.6"
				class-list="absolute right-[10%] bottom-[30%] top-auto left-auto -z-10"
			/>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		ButtonDefault: () => import("~/components/elements/ButtonDefault"),
	},
};
</script>