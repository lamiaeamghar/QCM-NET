<template>
	<div>
		<FaqPageHeader />

		<div class="faq-details pb-section">
			<div class="custom-container">
				<div class="mb-7 border-b border-gallery">
					<h1 class="text-2xl md:text-[28px] py-10">{{ faq.title }}</h1>
				</div>
				<div class="mt-7 lg:mt-10">
					<div class="grid grid-cols-12 gap-7.5 lg:gap-15">
						<div class="col-span-12 lg:col-span-8">
							<div class="faq-content">
								<client-only>
									<p v-html="faq.content"></p>
								</client-only>
							</div>
						</div>
						<div class="col-span-12 lg:col-span-4">
							<div class="p-7.5 rounded bg-[#F9F9FB]">
								<h5 class="mb-4">Related Topics</h5>
								<ul class="space-y-4">
									<li class="text-light hover:text-primary">
										<n-link to="/faqs">Account/Profile (1)</n-link>
									</li>
									<li class="text-light hover:text-primary">
										<n-link to="/faqs">Course Taking (2)</n-link>
									</li>
									<li class="text-light hover:text-primary">
										<n-link to="/faqs">Getting Started (1)</n-link>
									</li>
									<li class="text-light hover:text-primary">
										<n-link to="/faqs">Mobile (1)</n-link>
									</li>
									<li class="text-light hover:text-primary">
										<n-link to="/faqs">Purchase/Refunds (3)</n-link>
									</li>
									<li class="text-light hover:text-primary">
										<n-link to="/faqs">Troubleshooting (2)</n-link>
									</li>
								</ul>
								<div class="mt-6">
									<n-link
										class="text-sm px-10 py-2 w-full text-center font-semibold inline-block rounded text-white bg-primary hover:text-heading hover:bg-secondary"
										to="/contact-us"
									>Contact Us</n-link>
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
import faqs from "~/data/faqs.json";

export default {
	components: {
		FaqPageHeader: () => import("~/components/faqs/FaqPageHeader"),
	},

	data() {
		return {
			slug: this.$route.params.slug,
			faqs,
		};
	},

	head() {
		return {
			title: this.faq.title,
		};
	},

	computed: {
		faq() {
			return this.faqs.find((el) => el.slug === this.slug);
		},
	},
};
</script>

<style>
.faq-content li {
	@apply mb-2 relative before:absolute before:w-1.5 before:h-1.5 before:content-[''] before:bg-light before:top-2 before:left-0 before:rounded-full pl-4;
}
.faq-content h5 {
	@apply mb-3;
}
</style>