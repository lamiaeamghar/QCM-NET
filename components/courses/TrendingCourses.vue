<template>
	<div class="py-section overflow-hidden">
		<div class="container">
			<div class="section-top sm:flex justify-between mb-9">
				<div class="section-title">
					<h2 class="-mt-2.5 text-2xl md:text-3xl lg:text-[40px]"><mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Trending</mark> Courses</h2>
				</div>
				<n-link
					to="/courses"
					class="text-base px-9 py-3.5 font-semibold inline-block rounded bg-white-500 text-primary hover:bg-primary hover:text-white mt-7.5 sm:mt-0"
				>View all Courses</n-link>
			</div>
			<div class="relative swiper-button-hover">
				<swiper
					:options="courseOptions"
					class="!p-5 !-m-5"
				>
					<div
						v-for="(course, i) in courses"
						:key="i"
						class="swiper-slide"
					>
						<CourseGridStyleThree :course="course" />
					</div>
				</swiper>

				<!-- Swiper Navigation Start -->
				<div class="carousel-arrow">
					<div class="swiper-button swiper-button-prev categories-button-prev w-[52px] h-[52px] leading-[52px] text-center bg-white rounded-full text-xl z-10 hover:bg-primary hover:text-white transition-all duration-700 absolute top-1/2 xl:!-left-6 -translate-y-1/2 shadow-[0_0_7px_rgba(0,0,0,.09)] opacity-0 invisible !pointer-events-auto">
						<i class="fas fa-angle-left"></i>
					</div>
					<div class="swiper-button swiper-button-next categories-button-next w-[52px] h-[52px] leading-[52px] text-center bg-white rounded-full text-xl z-10 hover:bg-primary hover:text-white transition-all duration-700 absolute top-1/2 xl:!-right-6 -translate-y-1/2 shadow-[0_0_7px_rgba(0,0,0,.09)] opacity-0 invisible !pointer-events-auto">
						<i class="fas fa-angle-right"></i>
					</div>
				</div>
				<!-- Swiper Navigation End -->
			</div>
		</div>
	</div>
</template>

<script>
import courses from "~/data/courses.json";

export default {
	components: {
		CourseGridStyleThree: () => import("~/components/courses/CourseGridStyleThree"),
	},

	data() {
		return {
			courses,

			courseOptions: {
				spaceBetween: 30,
				speed: 1000,
				navigation: {
					nextEl: ".categories-button-next",
					prevEl: ".categories-button-prev",
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

	computed: {
		allCategories() {
			const categories = this.courses.map((el) => el.categories);
			return [...new Map(categories.map((item) => [item.name, item])).values()];
		},
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