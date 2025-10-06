<template>
	<div class="events-area py-section overflow-hidden">
		<div class="container">
			<div class="section-title mb-10 text-center">
				<h2 class="-mt-2.5 text-2xl md:text-3xl lg:text-[40px]">Upcoming Education <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:-z-10">Events</mark> </h2>
				<p class="mt-4">Where people find all events that they may want to involve</p>
			</div>
			<div class="relative mt-12 lg:mt-0 swiper-button-hover">
				<swiper
					:options="swiperOptions"
					class="!p-5 !-m-5"
				>
					<div
						v-for="(event, i) in events"
						:key="i"
						class="swiper-slide"
					>
						<EventArticleThree :event="event" />
					</div>
				</swiper>

				<!-- Swiper Navigation Start -->
				<div class="carousel-arrow">
					<div class="swiper-button swiper-button-prev w-[52px] h-[52px] leading-[52px] text-center bg-white rounded-full text-xl z-10 hover:bg-primary hover:text-white transition-all duration-700 absolute top-1/2 xl:!-left-6 -translate-y-1/2 shadow-[0_0_7px_rgba(0,0,0,.09)] opacity-0 invisible !pointer-events-auto">
						<i class="fas fa-angle-left"></i>
					</div>
					<div class="swiper-button swiper-button-next w-[52px] h-[52px] leading-[52px] text-center bg-white rounded-full text-xl z-10 hover:bg-primary hover:text-white transition-all duration-700 absolute top-1/2 xl:!-right-6 -translate-y-1/2 shadow-[0_0_7px_rgba(0,0,0,.09)] opacity-0 invisible !pointer-events-auto">
						<i class="fas fa-angle-right"></i>
					</div>
				</div>
				<!-- Swiper Navigation End -->
			</div>
		</div>
	</div>
</template>

<script>
import events from "~/data/events.json";

export default {
	components: {
		EventArticleThree: () => import("~/components/events/EventArticleThree"),
	},

	data() {
		return {
			events,
			swiperOptions: {
				slidesPerView: 3,
				spaceBetween: 30,
				autoHeight: true,
				speed: 1000,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
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

<style lang="scss" scoped>
.swiper-button-hover {
	&:hover {
		.swiper-button {
			@apply opacity-100 visible;
		}
	}
}
</style>