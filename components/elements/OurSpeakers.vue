<template>
	<div class="speaker-area">
		<div class="custom-container">
			<div class=" border-t border-gallery py-10">
				<h4 class="mb-7.5">Our Speakers</h4>
				<swiper :options="swiperOptions">
					<div
						v-for="(speaker, i) in speakers"
						:key="i"
						class="swiper-slide"
					>
						<div class="rounded-full overflow-hidden">
							<img
								:src="speaker.imgSrc"
								:alt="speaker.name"
								class="w-full"
							>
						</div>
						<div class="mt-4 text-center">
							<h6 class="text-base">{{ speaker.name }}</h6>
							<p class="text-light">/ {{ speaker.designation }}</p>
						</div>
					</div>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			swiperOptions: {
				speed: 700,
				slidesPerView: 5,
				autoHeight: true,
				spaceBetween: 60,
				breakpoints: {
					320: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 5,
					},
				},
			},

			speakers: [
				{
					id: 1,
					imgSrc: "/images/speaker/speaker-01.jpg",
					name: "Stephen Fleming",
					designation: "Manager",
				},
				{
					id: 2,
					imgSrc: "/images/speaker/speaker-02.jpg",
					name: "Jonti Rodes",
					designation: "Manager",
				},
				{
					id: 3,
					imgSrc: "/images/speaker/speaker-03.jpg",
					name: "Robart Carlos",
					designation: "Chief Designer",
				},
				{
					id: 4,
					imgSrc: "/images/speaker/speaker-04.jpg",
					name: "Shan Williams",
					designation: "Engineer",
				},
				{
					id: 5,
					imgSrc: "/images/speaker/speaker-05.jpg",
					name: "Dollie Horton",
					designation: "Project Manager",
				},
				{
					id: 6,
					imgSrc: "/images/speaker/speaker-06.jpg",
					name: "Maria Merry",
					designation: "Specialist",
				},
			],
		};
	},
};
</script>
