<template>
	<div class="overflow-hidden">
		<div class="relative z-10">
			<div class="custom-container">
				<ul class="flex flex-wrap items-center py-5">
					<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
						<n-link to="/">Home</n-link>
					</li>
					<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
						About Us
					</li>
				</ul>

				<div class="py-section">
					<div class="max-w-[570px]">
						<div class="slider-caption">
							<h2 class="text-xl sm:text-[28px] md:text-2xl lg:text-4xl xl:text-[40px] leading-snug">The <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Leading</mark> Global Marketplace for Learning and Instruction</h2>
						</div>
					</div>
					<div class="relative mt-7.5 lg:mt-0">
						<div class="slider-image__image text-center">
							<img
								src="/images/others/about-us-02-introduce-image.png"
								alt="Hero Image"
							>
						</div>
						<div class="absolute bottom-1.5 sm:bottom-[70px] lg:bottom-[160px] left-5 sm:left-12 lg:left-[250px]">
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
			<ShapeWithAnimation
				img-src="/images/shape/edumall-shape-grid-dots.png"
				data-depth="0.8"
				class-list="absolute right-1/3 bottom-12 top-auto left-auto -z-10"
			/>
			<ShapeWithAnimation
				data-depth="-1"
				class-list="absolute right-0 bottom-0 left-auto -z-10"
				shape-style-class-list="rounded-full border border-[#CAD0FA] w-[980px] h-[980px]"
			/>
			<ShapeWithAnimation
				data-depth="1.6"
				class-list="absolute right-[200px] top-[120px] left-auto -z-10"
				shape-style-class-list="rounded-full border border-[#CAD0FA] w-[365px] h-[365px]"
			/>
			<ShapeWithAnimation
				img-src="/images/shape/edumall-shape-01.png"
				data-depth="0.6"
				class-list="hidden sm:block absolute right-[10%] bottom-[30%] top-auto left-auto -z-10"
			/>
		</div>
	</div>
</template>