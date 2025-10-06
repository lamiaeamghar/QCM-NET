<template>
	<div class="featured-course py-section">
		<div class="container">
			<div class="section-top lg:flex justify-between">
				<div class="section-title mb-8 lg:mb-12">
					<h2 class="-mt-2.5 text-2xl md:text-3xl">Explored <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:-z-10">Featured</mark> Courses </h2>
				</div>

				<ul class="flex flex-wrap space-x-2 sm:space-x-3 gap-y-2 mb-10 lg:mb-0">
					<li
						v-for="(cat, i) in allCategories.slice(0, 5)"
						:key="i"
					>
						<button
							class="text-sm px-5 py-2 rounded-[3px] capitalize font-semibold hover:text-primary hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,10%)]"
							:class="{'text-primary bg-white shadow-[0_6px_25px_rgba(0,0,0,10%)]': cat === selectedCategory}"
							@click="filterHandler(cat)"
						>{{ cat }}</button>
					</li>
				</ul>
			</div>
			<div class="relative swiper-button-hover">
				<swiper :options="swiperOptions">
					<div
						v-for="(course, i) in filterData"
						:key="i"
						class="swiper-slide"
					>
						<CourseGridStyle :course="course" />
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
import courses from "~/data/courses.json";

export default {
	components: {
		CourseGridStyle: () => import("~/components/courses/CourseGridStyle"),
	},

	data() {
		return {
			courses,
			filterData: [],
			selectedCategory: "all",
			swiperOptions: {
				spaceBetween: 30,
				speed: 1000,
				watchOverflow: true,
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

	computed: {
		allCategories() {
			const uniqueCats = ["all"];
			const predefinedCats = ["popularity", "featured", "trending"];

			for (const course of this.courses) {
				Object.keys(course).forEach((el) => {
					if (course[el] === true && !uniqueCats.includes(el) && predefinedCats.includes(el)) {
						uniqueCats.push(el);
					}
				});
			}
			return uniqueCats;
		},
	},

	mounted() {
		this.filterData.push(...this.courses);
	},

	methods: {
		filterHandler(cat) {
			this.selectedCategory = cat;
			if (this.selectedCategory === "all") {
				this.filterData = this.courses;
			} else {
				const filterResult = this.courses.filter((item) => item[cat]);
				this.filterData = [];
				this.filterData.push(...filterResult);
			}
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