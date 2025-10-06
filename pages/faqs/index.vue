<template>
	<div>
		<FaqPageHeader />
		<FaqListWrapper />
		<SearchTopic />
	</div>
</template>

<script>
export default {
	components: {
		FaqPageHeader: () => import("~/components/faqs/FaqPageHeader"),
		FaqListWrapper: () => import("~/components/faqs/FaqListWrapper"),
		SearchTopic: () => import("~/components/faqs/SearchTopic"),
	},

	head() {
		return {
			title: "FAQs",
		};
	},
};
</script>