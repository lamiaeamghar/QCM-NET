<template>
	<div class="partner-section py-section">
		<div class="container">
			<div class="grid grid-cols-12 lg:gap-10 items-center">
				<div class="col-span-12 lg:col-span-3">
					<SectionTitleStyleOne
						class="mb-10"
						title="Who Will You Learn"
						highlight-title="With"
						sub-title="You can list your partners or instructors's brands here to show off your site's reputation and students can trust you more."
					/>

					<ButtonDefault
						label="View all partners"
						link="/"
						variation-class="bg-white-500 text-primary hover:bg-primary hover:text-white"
					/>
				</div>
				<div class="col-span-12 lg:col-span-9">
					<div class="partner-logo-wrapper group mt-12 lg:mt-0">
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
				slidesPerColumn: 2,
				spaceBetween: 30,
				slidesPerColumnFill: "row",
				direction: "horizontal",
				breakpoints: {
					320: {
						slidesPerView: 2,
						slidesPerColumn: 1,
					},
					480: {
						slidesPerView: 3,
						slidesPerColumn: 2,
					},
					768: {
						slidesPerView: 4,
						slidesPerColumn: 2,
					},
					1200: {
						slidesPerView: 6,
						slidesPerColumn: 2,
					},
				},
			},
		};
	},
};
</script>