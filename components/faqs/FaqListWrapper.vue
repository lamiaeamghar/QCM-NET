<template>
	<div class="py-section">
		<div class="custom-container">
			<h2 class="text-2xl md:text-[28px] -mt-2.5 mb-10">Frequently Asked Questions</h2>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
				<n-link
					v-for="(faq, i) in faqs"
					:key="i"
					:to="`/faqs/${faq.slug}`"
					class="text-normal px-7.5 py-2.5 min-h-[70px] flex items-center h-full font-semibold rounded text-heading bg-[#f1f3f8] group hover:text-white hover:bg-primary"
				>{{ faq.title }}
					<div class="scale-0 pl-3 group-hover:text-white group-hover:scale-100 transition-all">
						<i class="fas fa-angle-right"></i>
					</div>
				</n-link>
			</div>
		</div>
	</div>
</template>

<script>
import faqs from "~/data/faqs.json";
export default {
	data() {
		return {
			faqs,
		};
	},
};
</script>