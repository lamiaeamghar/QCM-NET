<template>
	<div class="testimonial-section pt-section bg-white-500 pb-[104px] relative overflow-hidden">
		<div class="container">
			<div class="section-title mb-10 text-center">
				<h2 class="-mt-2.5 text-2xl md:text-3xl lg:text-[40px]">People Say About <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">EduMall</mark> </h2>
			</div>
			<div class="relative mt-12 lg:mt-0">
				<swiper :options="swiperOptions">
					<div
						v-for="(testimonial, i) in testimonialData"
						:key="i"
						class="swiper-slide"
					>
						<TestimonialItemStyleTwo :testimonial="testimonial" />
					</div>
				</swiper>
				<div class="swiper-pagination swiper-pagination-center"></div>
			</div>
		</div>
		<ShapeWithAnimation
			data-depth="3"
			class-list="absolute top-0 lg:top-16 left-0 lg:left-16 w-[100px] lg:w-auto"
			img-src="/images/shape/edumall-shape-01.png"
		/>
		<ShapeWithAnimation
			data-depth="1"
			class-list="absolute -top-[80px] lg:-top-[220px] -left-[120px] lg:-left-[320px]"
			shape-style-class-list="rounded-full border border-primary/20 w-[270px] lg:w-[670px] h-[270px] lg:h-[670px]"
		/>
		<ShapeWithAnimation
			data-depth="5"
			class-list="absolute top-0 -left-[70px]"
			shape-style-class-list="rounded-full border border-primary/20 w-[150px] lg:w-[218px] h-[150px] lg:h-[218px]"
		/>
		<ShapeWithAnimation
			data-depth="0.6"
			class-list="absolute -top-[132px] left-auto right-[5%]"
			shape-style-class-list="rounded-full border border-primary/20 w-[194px] h-[194px]"
		/>
		<ShapeWithAnimation
			data-depth="1"
			class-list="absolute top-auto -bottom-[100px] lg:-bottom-[370px] left-auto -right-[50px] lg:-right-[200px]"
			shape-style-class-list="rounded-full border border-primary/20 w-[270px] lg:w-[570px] h-[270px] lg:h-[570px]"
		/>
	</div>
</template>

<script>
import testimonialData from "~/data/testimonial.json";

export default {
	components: {
		TestimonialItemStyleTwo: () => import("~/components/testimonial/TestimonialItemStyleTwo"),
		ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
	},

	data() {
		return {
			testimonialData,

			swiperOptions: {
				slidesPerView: 4,
				spaceBetween: 30,
				speed: 1000,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 4,
					},
				},
			},
		};
	},
};
</script>