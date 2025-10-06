<template>
	<div class="partner-section">
		<div class="container">
			<div class="section-top md:flex justify-between mb-8 md:mb-8">
				<SectionTitleStyleOne
					title="Who Will You Learn"
					highlight-title="With"
					class="mb-8 md:mb-0"
				/>

				<ButtonDefault
					label="View all partners"
					link="/"
					variation-class="bg-white-500 text-primary hover:bg-primary hover:text-white"
				/>
			</div>
			<div class="group">
				<swiper :options="swiperOptions">
					<div
						v-for="partner in partners"
						:key="partner.id"
						class="swiper-slide"
					>
						<div class="flex justify-center items-center group-hover:opacity-40 hover:!opacity-100 transition-all">
							<img
								:src="partner.logo"
								:alt="partner.name"
							>
						</div>
					</div>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
import partners from "~/data/partners";

export default {
	components: {
		SectionTitleStyleOne: () => import("~/components/elements/SectionTitleStyleOne"),
		ButtonDefault: () => import("~/components/elements/ButtonDefault"),
	},

	data() {
		return {
			partners,

			swiperOptions: {
				speed: 1000,
				slidesPerView: 6,
				spaceBetween: 30,
				breakpoints: {
					320: {
						slidesPerView: 2,
					},
					480: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 6,
					},
					1400: {
						slidesPerView: 7,
					},
				},
			},
		};
	},
};
</script>