<template>
	<div class="featured-course py-section">
		<div class="container">
			<div class="section-top lg:flex justify-between">
				<div class="section-title mb-8 lg:mb-12">
					<h2 class="-mt-2.5 text-2xl md:text-3xl">Explored <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:-z-10">Featured</mark> Courses </h2>
				</div>
			</div>
			<div class="relative">
				<swiper :options="swiperOptions">
					<div
						v-for="(course, i) in courses"
						:key="i"
						class="swiper-slide"
					>
						<div class="course-article group">
							<div class="rounded overflow-hidden">
								<n-link to="/">
									<img
										:src="course.thumbnail"
										:alt="course.title"
										class="w-full group-hover:scale-110 transition-all duration-500"
									>
								</n-link>
							</div>
							<div class="course-info pt-2.5">
								<span class="text-[13px] font-semibold leading-[18px] rounded-sm px-2.5 py-0.5 mb-3 inline-block text-[#17b8c1] bg-[#17b8c1] bg-opacity-[15%]">{{ course.levels.name }}</span>
								<h3 class="text-base leading-relaxed hover:text-primary">
									<n-link to="/">{{ course.title }}</n-link>
								</h3>
								<n-link
									to="/"
									class="text-[13px] my-0.5 text-[#0071dc] hover:text-secondary"
								>{{ course.instructor }}</n-link>
								<div
									v-if="course.price < 1"
									class="text-[#696969] font-bold mt-2"
								>Free</div>
								<div
									v-else
									class="text-heading font-bold mt-2"
								>${{ course.price.toFixed(2) }}</div>
							</div>
						</div>
					</div>
				</swiper>
				<div class="swiper-pagination swiper-pagination-center"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		courses: {
			type: Array,
			default: () => [],
		},
	},

	data() {
		return {
			swiperOptions: {
				spaceBetween: 30,
				speed: 1000,
				watchOverflow: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 4,
					},
					1400: {
						slidesPerView: 5,
					},
				},
			},
		};
	},
};
</script>