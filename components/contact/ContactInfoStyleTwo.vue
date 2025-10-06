<template>
	<div class="contact-details py-section">
		<div class="custom-container">
			<div class="grid grid-cols-12 gap-7.5 md:gap-10">
				<div class=" col-span-12 md:col-span-5 lg:col-span-4">
					<div class="mb-10 text-center md:text-left">
						<h2 class="text-2xl md:text-[32px] mb-4 -mt-2">Keep In Touch <br class="hidden md:block"> With Us.</h2>
					</div>
					<div class="border-b mb-7.5 pb-7.5 last:mb-0 text-center md:text-left">
						<div class="md:flex items-center mb-3 md:mb-5">
							<div class="text-3xl text-primary mb-3 md:mb-0 leading-none">
								<i class="fas fa-map-marked-alt"></i>
							</div>
							<h5 class="md:pl-5">Address</h5>
						</div>
						<div class="text-light">
							<p>1800 Abbot Kinney Blvd. Unit <br> D & E Venice</p>
						</div>
					</div>
					<div class="border-b mb-7.5 pb-7.5 last:mb-0 text-center md:text-left">
						<div class="md:flex items-center mb-3 md:mb-5">
							<div class="text-3xl text-primary mb-3 md:mb-0 leading-none">
								<i class="fas fa-mobile-alt"></i>
							</div>
							<h5 class="md:pl-5">Contact</h5>
						</div>
						<div class="text-light">
							<p class="mb-2">Mobile: <strong class="text-heading">(+88) - 1990 - 6886</strong></p>
							<p class="mb-2">Hotline: <strong class="text-heading">1800 - 1102</strong></p>
						</div>
					</div>
					<div class="border-b mb-7.5 pb-7.5 last:mb-0 text-center md:text-left">
						<div class="md:flex items-center mb-3 md:mb-5">
							<div class="text-3xl text-primary mb-3 md:mb-0 leading-none">
								<i class="fas fa-envelope"></i>
							</div>
							<h5 class="md:pl-5">Email</h5>
						</div>
						<div class="text-light">
							<p class="mb-2">support@edumall.com</p>
							<p class="mb-2">hi@edumall.com</p>
						</div>
					</div>
				</div>
				<div class=" col-span-12 lg:col-start-6 md:col-span-7 lg:col-span-7">
					<GoogleMap map-height="h-[250px] md:h-[350px] lg:h-[600px]" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		GoogleMap: () => import("~/components/contact/GoogleMap"),
	},
};
</script>