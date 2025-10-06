<template>
	<div>
		<BreadcrumbStyleTwo
			active-text="Contact Us"
			page-title="Contact Us"
		/>
		<ContactInfoStyleTwo />

		<div class="contact-form pb-section">
			<div class="custom-container">
				<div class="grid grid-cols-12">
					<div class=" col-span-12 md:col-span-5 lg:col-span-4">
						<div class="mb-10 text-center md:text-left">
							<h2 class="text-2xl md:text-[32px] mb-4 -mt-2">Send a Message</h2>
						</div>
					</div>
					<div class=" col-span-12 lg:col-start-6 md:col-span-7 lg:col-span-7">
						<ContactFormOne class="text-center" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		ContactInfoStyleTwo: () => import("~/components/contact/ContactInfoStyleTwo"),
	},

	head() {
		return {
			title: "Contact Us",
		};
	},
};
</script>