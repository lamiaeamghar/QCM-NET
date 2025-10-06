<template>
	<div class="testimonial-section pt-section bg-white-500 pb-[104px]">
		<div class="container">
			<div class="section-title mb-10 text-center">
				<h6 class="text-base text-primary uppercase mb-5">testimonial</h6>
				<h2 class="-mt-2.5 text-2xl md:text-3xl">See What Our Students Have To Say</h2>
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
	</div>
</template>

<script>
import testimonialData from "~/data/testimonial.json";

export default {
	components: {
		TestimonialItemStyleTwo: () => import("~/components/testimonial/TestimonialItemStyleTwo"),
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