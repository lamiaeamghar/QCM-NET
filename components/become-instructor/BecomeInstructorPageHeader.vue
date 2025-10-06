<template>
	<div class="bg-[#F4F9FF] relative overflow-hidden z-10">
		<div class="container">
			<ul class="flex flex-wrap items-center py-5">
				<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					<n-link to="/">Home</n-link>
				</li>
				<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					Become an Instructor
				</li>
			</ul>
		</div>
		<div class="custom-container">
			<div class="grid grid-cols-12 items-center">
				<div class="col-span-12 lg:col-span-6">
					<div class="mt-5 lg:-mt-5 mb-5 lg:mb-0">
						<h1 class="text-2xl md:text-[40px] mb-2">Become an Instructor</h1>
						<p>Top instructors from around the world teach millions of students on EduMall.</p>
						<ButtonDefault
							label="Start teaching today"
							link="/contact-us"
							class="py-4 px-8 mt-2 md:mt-5"
						/>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-6">
					<div class="lg:-mr-36 lg:-mt-8 relative right">
						<img
							src="/images/others/become-a-teacher-hero-image.png"
							alt="image"
						>
					</div>
				</div>
			</div>
		</div>
		<ShapeWithAnimation
			data-depth="0.8"
			class-list="absolute top-auto -bottom-15 lg:-bottom-[90px] -left-15 lg:-left-[80px] -z-10"
			shape-style-class-list="rounded-full border border-primary/20 w-[150px] lg:w-[324px] h-[150px] lg:h-[324px]"
		/>
		<ShapeWithAnimation
			data-depth="0.8"
			class-list="absolute top-auto bottom-0 left-auto right-7.5 -z-10"
			shape-style-class-list="rounded-full border border-primary/20 w-[200px] lg:w-[650px] h-[200px] lg:h-[650px]"
		/>
		<ShapeWithAnimation
			data-depth="2"
			class-list="absolute top-auto bottom-1/3 left-auto right-[10%] -z-10"
			shape-style-class-list="rounded-full border border-primary/20 w-[150px] lg:w-[370px] h-[150px] lg:h-[370px]"
		/>
	</div>
</template>

<script>
export default {
	components: {
		ButtonDefault: () => import("~/components/elements/ButtonDefault"),
		ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
	},
};
</script>