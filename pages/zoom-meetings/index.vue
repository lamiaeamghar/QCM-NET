<template>
	<div class="event-page">
		<BreadcrumbStyleTwo
			active-text="Zoom Meetings and Webinars"
			page-title="Zoom Meetings and Webinars"
		/>

		<div class="py-section">
			<div class="custom-container">
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
					<ZoomArticle
						v-for="(meeting, i) in meetings"
						:key="i"
						:meeting="meeting"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import meetings from "~/data/zoom-meetings.json";
export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		ZoomArticle: () => import("~/components/zoom-meetings/ZoomArticle"),
	},

	data() {
		return {
			meetings,
		};
	},

	head() {
		return {
			title: "Zoom Meetings and Webinars",
		};
	},
};
</script>