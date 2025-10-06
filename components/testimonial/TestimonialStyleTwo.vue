<template>
	<div class="testimonial-section pt-section pb-[104px]">
		<div class="custom-container">
			<div class="grid grid-cols-12 lg:gap-20">
				<div class="col-span-12 lg:col-span-4">
					<SectionTitleStyleOne
						class="mb-10"
						title="What Our Learners"
						highlight-title="Say"
						sub-title="Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum esti"
					/>

					<ButtonDefault
						label="View all"
						link="/"
						variation-class="bg-white-500 text-primary hover:bg-primary hover:text-white"
					/>
				</div>
				<div class="col-span-12 lg:col-span-8">
					<div class="relative mt-12 lg:mt-0">
						<swiper :options="swiperOptions">
							<div
								v-for="(testimonial, i) in testimonialData"
								:key="i"
								class="swiper-slide"
							>
								<TestimonialItem :testimonial="testimonial" />
							</div>
						</swiper>
						<div class="swiper-pagination swiper-pagination-center"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import testimonialData from "~/data/testimonial.json";

export default {
	components: {
		SectionTitleStyleOne: () => import("~/components/elements/SectionTitleStyleOne"),
		ButtonDefault: () => import("~/components/elements/ButtonDefault"),
		TestimonialItem: () => import("~/components/testimonial/TestimonialItem"),
	},

	data() {
		return {
			testimonialData,

			swiperOptions: {
				slidesPerView: 3,
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
				},
			},
		};
	},
};
</script>