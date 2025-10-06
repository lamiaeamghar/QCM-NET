<template>
	<div class="partner-section py-section">
		<div class="container">
			<div class="grid grid-cols-12 gap-7.5">
				<div class="col-span-12 lg:col-span-4">
					<div class="lg:pr-5">
						<h2 class="-mt-3.5 text-2xl md:text-3xl lg:text-[32px] leading-relaxed mb-8">We Collaborate With <span class="text-primary">190+</span> Leading Universities And Companies</h2>

						<ButtonDefault
							label="View all partners"
							link="/"
							variation-class="bg-white-500 text-primary hover:bg-primary hover:text-white"
						/>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-8">
					<div class="partner-logo-wrapper group mt-5 lg:mt-0">
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
				},
			},
		};
	},
};
</script>