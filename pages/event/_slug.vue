<template>
	<div>
		<BreadcrumbStyleTwo
			url="/event"
			url-text="Events"
			:active-text="`${event.title}`"
			class="!bg-white"
		/>

		<div class="event-details pb-10">
			<div class="custom-container">
				<div class="lg:pr-[368px] mb-7">
					<h1 class="text-2xl md:text-4xl lg:text-[40px]">{{ event.title }}</h1>
					<ul class="mt-6 flex flex-wrap">
						<li class="text-light mb-2.5 mr-5 last:mr-0">
							<span class="pr-1"><i class="fas fa-map-marker-alt"></i></span>
							{{ event.country }}
						</li>
						<li class="text-light mb-2.5 mr-5 last:mr-0">
							<span class="pr-1"><i class="fas fa-calendar"></i></span>
							{{ event.date }}
						</li>
						<li class="text-light mb-2.5 mr-5 last:mr-0">
							<span class="pr-1"><i class="fas fa-clock"></i></span>
							{{ event.time }}
						</li>
					</ul>
				</div>
				<div class="rounded overflow-hidden">
					<nuxt-img
						:src="event.imgSrc"
						:alt="event.title"
						height="350"
						sizes="xs:300vw sm:100vw md:100vw lg:1170"
					/>
				</div>
				<div class="mt-7 lg:mt-13">
					<div class="grid grid-cols-12 gap-7.5 lg:gap-15">
						<div class="col-span-12 lg:col-span-8">
							<div class="content">
								<h4 class="mb-3">About The Event</h4>
								<client-only>
									<p v-html="event.content"></p>
								</client-only>
							</div>
						</div>
						<div class="col-span-12 lg:col-span-4">
							<div class="p-7.5 rounded shadow-[0_0_20px_rgba(51,51,51,0.10)]">
								<div class="event-details__booking-info">
									<ul class="event-details__info-meta">
										<li class="flex justify-between items-center border-b border-gallery pb-4 mb-4 last:border-none">
											<span class="font-semibold">
												<span class="pr-1 text-light">
													<i class="fas fa-money-bill-wave"></i>
												</span>
												Cost:
											</span>
											<span class="text-2xl font-bold text-[#d31819]">${{ event.cost.toFixed(2) }}</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-4 mb-4 last:border-none">
											<span class="font-semibold">
												<span class="pr-1 text-light">
													<i class="fas fa-user-friends"></i>
												</span>
												Total Slot:
											</span>
											<span class="meta-value">{{ event.totalSlot }}</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-4 mb-4 last:border-none">
											<span class="font-semibold">
												<span class="pr-1 text-light">
													<i class="fas fa-lock"></i>
												</span>
												Booked Slot:
											</span>
											<span class="meta-value">3</span>
										</li>
									</ul>
									<p class="bg-[#fdb494] border-l-[3px] border-[#c35a2c] px-5 py-3.5">{{ event.status }}</p>
									<div class="mt-6 text-center">
										<a
											href="https://twitter.com/"
											target="_blank"
											class="w-10 h-10 rounded-full border border-gallery inline-block leading-10 text-center mr-2 last:mr-0 hover:bg-primary hover:text-white hover:border-primary"
										><i class="fab fa-twitter"></i>
										</a>
										<a
											href="https://www.facebook.com/"
											target="_blank"
											class="w-10 h-10 rounded-full border border-gallery inline-block leading-10 text-center mr-2 last:mr-0 hover:bg-primary hover:text-white hover:border-primary"
										><i class="fab fa-facebook-f"></i>
										</a>
										<a
											href="https://www.skype.com/"
											target="_blank"
											class="w-10 h-10 rounded-full border border-gallery inline-block leading-10 text-center mr-2 last:mr-0 hover:bg-primary hover:text-white hover:border-primary"
										><i class="fab fa-skype"></i>
										</a>
										<a
											href="https://www.youtube.com/"
											target="_blank"
											class="w-10 h-10 rounded-full border border-gallery inline-block leading-10 text-center mr-2 last:mr-0 hover:bg-primary hover:text-white hover:border-primary"
										><i class="fab fa-youtube"></i>
										</a>
										<a
											href="https://www.linkedin.com/"
											target="_blank"
											class="w-10 h-10 rounded-full border border-gallery inline-block leading-10 text-center mr-2 last:mr-0 hover:bg-primary hover:text-white hover:border-primary"
										><i class="fab fa-linkedin-in"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="location">
			<div class="custom-container">
				<div class="border-t py-10">
					<h4 class="mb-5">Location</h4>
					<div class="grid grid-cols-12 gap-7.5 lg:gap-15">
						<div class="col-span-12 md:col-span-8">
							<div class="event-map">
								<iframe
									id="gmap_canvas"
									class="w-full h-[250px] md:h-[350px]"
									src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
								></iframe>
							</div>
						</div>
						<div class="col-span-12 md:col-span-4">
							<div class="location-info">
								<h6>The Palace of Fine Arts</h6>
								<div class="address">
									<p class="text-light mt-2">{{ event.location }}</p>
									<a
										class="text-primary"
										target="_blank"
										:href="event.gMap"
									>+ Google Map</a>
								</div>

								<div class="mt-5">
									<span class="block font-semibold text-light mb-1.5">Phone Number</span>
									<span class="block font-semibold text-heading">{{ event.phone }}</span>
								</div>
								<div class="mt-5">
									<span class="block font-semibold text-light mb-1.5">Website</span>
									<span class="block font-semibold text-heading">
										<a
											href="https://EduMall.hasthemes.com"
											target="_blank"
											class="hover:text-primary"
										>{{ event.website }}</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="our-speakers">
			<OurSpeakers />
		</div>

		<div class="contact-form pb-section">
			<div class="custom-container">
				<div class="border-t pt-10">
					<h4 class="mb-7">Leave your thought here</h4>
					<div class="grid grid-cols-12 gap-7.5 lg:gap-15">
						<div class="col-span-12 lg:col-span-8 order-last lg:order-first">
							<ContactFormOne :has-saved="true" />
						</div>
						<div class="col-span-12 lg:col-span-4 order-first lg:order-last">
							<div class="comment-help">
								<h6 class="mb-3.5">We're always eager to hear from you.</h6>
								<p class="text-light mb-2">If you’d like to learn more about us or have a general comments and suggestions about the site, email us at</p>
								<a
									href="mailto://contact@QCM-NET.com"
									class="text-xl text-primary"
								>contact@QCM-NET.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import events from "~/data/events.json";
export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		OurSpeakers: () => import("~/components/elements/OurSpeakers"),
		ContactFormOne: () => import("~/components/contact/ContactFormOne"),
	},

	data() {
		return {
			slug: this.$route.params.slug,
			events,
		};
	},

	head() {
		return {
			title: this.event.title,
		};
	},

	computed: {
		event() {
			return this.events.find((el) => el.slug === this.slug);
		},
	},
};
</script>