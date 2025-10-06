<template>
	<div class="banner-section">
		<div class="container">
			<div class="grid grid-cols-12 gap-[30px]">
				<div class="col-span-12 lg:col-span-6">
					<div class="p-[30px] pb-0 bg-[#EDEDED] rounded-lg overflow-hidden">
						<div class="grid grid-cols-12 items-end">
							<div class="col-span-12 md:col-span-7 xl:col-span-6">
								<div class="pt-[15px] pb-11">
									<h6 class="-mt-2 text-sm text-primary">New Certificates</h6>
									<h3 class="mt-1.5">Online Courses from EduMall University</h3>
									<ButtonStyleOne
										label="Find out more"
										link="/"
										class="mt-6 text-sm px-5"
									/>
								</div>
							</div>
							<div class="col-span-12 md:col-span-5 xl:col-span-6">
								<div class="md:-mr-7 text-center md:text-left">
									<img
										src="/images/banner/banner-image-04.png"
										alt="Banner"
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-6">
					<div class="p-[30px] pb-0 bg-[#EFF5F7] rounded-lg overflow-hidden">
						<div class="grid grid-cols-12">
							<div class="col-span-12 md:col-span-7 xl:col-span-6">
								<div class="pt-[15px] pb-11">
									<h6 class="-mt-2 text-sm text-primary">New Collection</h6>
									<h3 class="mt-1.5">Master Your Coding Skills In Lockdown</h3>
									<ButtonStyleOne
										label="View courses"
										link="/"
										class="mt-6 text-sm px-5"
									/>
								</div>
							</div>
							<div class="col-span-12 md:col-span-5 xl:col-span-6">
								<CoolLightBox
									:items="items"
									:index="index"
									@close="index = null"
								>
								</CoolLightBox>
								<div class="relative group block border-8 border-white max-w-[254px] rounded-[10px] mx-auto md:mr-0 md:ml-auto mb-7.5 overflow-hidden shadow-[0_3px_30px_0_rgba(0,0,0,0.30)]">
									<a
										v-for="(image, imageIndex) in items"
										:key="imageIndex"
										href="javascript:void(0)"
										@click="index = imageIndex"
									>
										<img
											src="/images/banner/banner-image-05.jpg"
											alt="Banner"
											class="rounded group-hover:scale-110 transition-all duration-500"
										>

										<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
											<img
												src="/images/banner/youtube-play-button.png"
												alt="icon"
											>
										</div>
									</a>
								</div>
							</div>
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
		ButtonStyleOne: () => import("~/components/elements/ButtonStyleOne"),
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