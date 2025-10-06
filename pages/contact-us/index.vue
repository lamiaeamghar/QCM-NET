<template>
	<div>
		<BreadcrumbStyleTwo
			active-text="Contact Us"
			class="!bg-white"
		/>

		<ContactInfoStyleOne />

		<div class="google-map">
			<div class="custom-container">
				<GoogleMap />
			</div>
		</div>

		<div class="contact-form py-section">
			<div class="custom-container">
				<div class="max-w-[770px] text-center mx-auto">
					<h2 class="text-2xl md:text-[32px] mb-7 -mt-3">Fill the form below so we can get to know you and your needs better.</h2>
					<ContactFormOne />
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		ContactInfoStyleOne: () => import("~/components/contact/ContactInfoStyleOne"),
		ContactFormOne: () => import("~/components/contact/ContactFormOne"),
		GoogleMap: () => import("~/components/contact/GoogleMap"),
	},

	head() {
		return {
			title: "Contact Us",
		};
	},
};
</script>