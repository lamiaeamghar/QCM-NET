<template>
	<div
		class="bg-center bg-no-repeat bg-cover relative overflow-hidden"
		:style="{backgroundImage: `url(/images/hero/home-university-hero-bg.jpg)`}"
	>
		<div class="custom-container">
			<div class="pt-20 sm:pt-32 lg:pt-[190px] pb-20 sm:pb-32 lg:pb-[210px]">
				<div class="grid grid-cols-12 items-center">
					<div class="col-span-12 md:col-span-8">
						<div class="lg:pr-[100px]">
							<h6 class="text-base text-white uppercase tracking-[4px]">for a better future</h6>
							<h1 class="text-3xl sm:text-[42px] lg:text-[55px] text-white leading-snug mt-5">Make The Most of Your <span class="inline-block text-secondary relative before:absolute before:content-[''] before:bottom-0 before:left-0 before:bg-secondary before:h-0.5 before:w-full">Curiosity</span> To Learn About The World</h1>
						</div>
					</div>
					<div class="col-span-12 md:col-span-4">
						<CoolLightBox
							:items="items"
							:index="index"
							@close="index = null"
						>
						</CoolLightBox>
						<div class="video-btn mt-7.5 md:mt-0">
							<a
								v-for="(image, imageIndex) in items"
								:key="imageIndex"
								href="javascript:void(0)"
								class="inline-flex items-center"
								@click="index = imageIndex"
							>
								<div class="relative">
									<div class="absolute w-40 sm:w-[200px] h-40 sm:h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 wave-mask">

									</div>
									<div class="w-15 sm:w-20 h-15 sm:h-20 bg-white rounded-full relative before:absolute before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-t-[9px] before:border-t-transparent before:border-b-[9px] before:border-b-transparent before:border-l-[14px] before:border-l-primary"></div>
								</div>
								<h6 class="text-sm sm:text-normal text-white leading-relaxed uppercase pl-5">watch video <br> intro</h6>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
	components: {
		CoolLightBox,
	},

	data() {
		return {
			items: [
				{
					src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
					autoplay: true,
				},
			],
			index: null,
		};
	},
};
</script>


<style lang="scss" scoped>
.wave-mask {
	&::before,
	&::after {
		opacity: 0;
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 50%;
		border: 5px solid #ccc;
		width: 100%;
		height: 100%;
		animation: zoomBig 1.5s linear infinite;
		transform-origin: center;
		backface-visibility: hidden;
	}
	&::after {
		animation-delay: 0.55s;
	}
}
@keyframes zoomBig {
	0% {
		transform: scale(0.3);
		opacity: 0.8;
		border-width: 3px;
	}

	25% {
		border-width: 2px;
	}

	50% {
		border-width: 1px;
	}

	to {
		transform: scale(1.2);
		opacity: 0;
		border-width: 1px;
	}
}
</style>