<template>
	<div class="categories-area py-section">
		<div class="container">
			<div class="section-top lg:flex justify-between mb-8 lg:mb-8">
				<SectionTitleStyleOne
					title="Browse"
					highlight-title="Subject"
					class="mb-8 lg:mb-0"
				/>
				<ButtonDefault
					link="/courses"
					label="View all courses"
					variation-class="bg-white-500 text-primary hover:bg-primary hover:text-white"
				/>
			</div>
			<div class="relative swiper-button-hover">
				<swiper :options="categoriesOptions">
					<div
						v-for="(category, i) in allCategories"
						:key="i"
						class="swiper-slide"
					>
						<CategoryItemStyleTwo :category="category" />
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
		ButtonDefault: () => import("~/components/elements/ButtonDefault"),
		SectionTitleStyleOne: () => import("~/components/elements/SectionTitleStyleOne"),
		CategoryItemStyleTwo: () => import("~/components/categories/CategoryItemStyleTwo"),
	},

	data() {
		return {
			courses,

			categoriesOptions: {
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
					480: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 5,
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