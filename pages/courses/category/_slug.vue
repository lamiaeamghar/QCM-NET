<template>
	<div class="category-wrapper">
		<BreadcrumbStyleOne
			url="/courses"
			url-text="Courses"
			:active-text="`${slug}`"
			:page-title="slug"
		/>
		<!-- <CoursesByCategories /> -->

		<div class="featured-course py-section">
			<div class="container">
				<div class="section-title mb-7">
					<ul class="flex flex-wrap space-x-2 sm:space-x-5 gap-y-2">
						<li
							v-for="(cat, i) in allCategories"
							:key="i"
						>
							<button
								class="text-[28px] text-[#cccccc] capitalize font-semibold hover:text-heading transition-all"
								:class="{'!text-heading': cat === selectedCategory}"
								@click="filterHandler(cat)"
							>{{ cat }}</button>
						</li>
					</ul>
				</div>
				<div class="relative">
					<swiper :options="swiperOptions">
						<div
							v-for="(course, i) in filterData"
							:key="i"
							class="swiper-slide"
						>
							<CourseGridStyle :course="course" />
						</div>
					</swiper>
					<div class="swiper-pagination swiper-pagination-center"></div>
				</div>
			</div>
		</div>

		<div class="tag-area">
			<div class="container">
				<div class="section-title mb-10">
					<h2 class="-mt-2.5 text-2xl md:text-[28px]"><mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:-z-10">Popular</mark>Topics</h2>
				</div>
				<div class="tag-list space-x-1.5 space-y-2">
					<n-link
						v-for="(tag, i) in tagList"
						:key="i"
						:to="`/courses/tag/${tag}`"
						class="text-light bg-[#f5f7fd] px-5 py-3.5 font-semibold inline-block rounded capitalize hover:text-white hover:bg-primary"
					>{{ tag }}</n-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import courses from "~/data/courses.json";

export default {
	components: {
		BreadcrumbStyleOne: () => import("~/components/elements/BreadcrumbStyleOne"),
		CourseGridStyle: () => import("~/components/courses/CourseGridStyle"),
		// CoursesByCategories: () => import("~/components/courses/CoursesByCategories"),
	},

	data() {
		return {
			courses,
			slug: this.$route.params.slug,
			filterData: [],
			selectedCategory: "trending",

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

	computed: {
		filterCourses() {
			return this.courses.filter((item) => item.categories.slug === this.slug);
		},

		allCategories() {
			const predefinedCats = ["popularity", "trending"];
			const uniqueCats = [];

			for (const course of this.filterCourses) {
				for (const key in course) {
					if (course[key] === true && !uniqueCats.includes(key) && predefinedCats.includes(key)) {
						uniqueCats.push(key);
					}
				}
			}
			return uniqueCats;
		},

		tagList() {
			return [...new Set(this.filterData.map((item) => item.tags).flat())];
		},
	},

	mounted() {
		this.filterData.push(...this.filterCourses);
	},

	methods: {
		filterHandler(cat) {
			this.selectedCategory = cat;
			const filterResult = this.filterCourses.filter((el) => el[cat]);
			this.filterData = [];
			this.filterData.push(...filterResult);
		},
	},
};
</script>