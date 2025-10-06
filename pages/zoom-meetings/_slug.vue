<template>
	<div>
		<BreadcrumbStyleTwo
			url="/zoom-meetings"
			url-text="Zoom Meetings"
			:active-text="`${meeting.title}`"
			class="!bg-white"
		/>

		<div class="meeting-details pb-section">
			<div class="custom-container">
				<div class="lg:pr-[368px] mb-7">
					<h1 class="text-2xl md:text-4xl lg:text-[40px]">{{ meeting.title }}</h1>
				</div>
				<div class="rounded overflow-hidden">
					<nuxt-img
						:src="meeting.imgSrc"
						:alt="meeting.title"
						height="350"
						sizes="xs:300vw sm:100vw md:100vw lg:1170"
					/>
				</div>
				<div class="mt-7 lg:mt-13">
					<div class="grid grid-cols-12 gap-7.5 lg:gap-15">
						<div class="col-span-12 lg:col-span-8">
							<div class="zoom-meeting-content">
								<client-only>
									<p v-html="meeting.content"></p>
								</client-only>
							</div>
						</div>
						<div class="col-span-12 lg:col-span-4">
							<div class="p-7.5 rounded shadow-[0_0_20px_rgba(51,51,51,0.10)]">
								<div class="meeting-details">
									<h3 class="mb-4">Details</h3>
									<ul class="meeting-details__info-meta">
										<li class="flex justify-between items-center border-b border-gallery pb-4 mb-4">
											<span class="font-semibold">
												Hosted By
											</span>
											<span class="text-light">{{ meeting.host }}</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-4 mb-4">
											<span class="font-semibold">
												Start
											</span>
											<span class="text-light">{{ meeting.date }} {{ meeting.time }}</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-4 mb-4">
											<span class="font-semibold">
												Category
											</span>
											<span class="text-light">{{ meeting.category }}</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-4 mb-4">
											<span class="font-semibold">
												Duration
											</span>
											<span class="text-light">{{ meeting.duration }}</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-4 mb-4">
											<span class="font-semibold">
												Timezone
											</span>
											<span class="text-light">{{ meeting.timeZone }}</span>
										</li>
									</ul>
									<p><span class="font-semibold text-heading pr-1">Note:</span>Countdown time is shown based on your local timezone.</p>
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
import meetings from "~/data/zoom-meetings.json";
export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
	},

	data() {
		return {
			slug: this.$route.params.slug,
			meetings,
		};
	},

	head() {
		return {
			title: this.meeting.title,
		};
	},

	computed: {
		meeting() {
			return this.meetings.find((el) => el.slug === this.slug);
		},
	},
};
</script>

<style>
.zoom-meeting-content li {
	@apply mb-2 relative before:absolute before:w-1.5 before:h-1.5 before:content-[''] before:bg-light before:top-2 before:left-0 before:rounded-full pl-4;
}
</style>