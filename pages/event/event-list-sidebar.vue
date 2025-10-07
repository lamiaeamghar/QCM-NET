<template>
	<div class="event-page">
		<BreadcrumbStyleTwo
			active-text="Events"
			page-title="Events"
		/>

		<div class="py-section">
			<div class="container">
				<div class="grid grid-cols-12 gap-7.5">
					<div class="col-span-12 lg:col-span-9">
						<div class="xs:flex justify-between items-center mb-8">
							<div class="mb-4 xs:mb-0">
								<p class="font-semibold text-light">Showing {{perPage * currentPage - perPage + 1}} to {{perPage * currentPage > events.length ? events.length : perPage * currentPage}} of {{events.length}} result</p>
							</div>
							<div class="relative min-w-[254px]">
								<v-select
									:options="options"
									:placeholder="getSelectorPlaceholder"
								></v-select>
							</div>
						</div>
						<div class="grid grid-cols-1 gap-y-7.5">
							<EventListArticle
								v-for="(event, i) in getItems"
								:key="i"
								:event="event"
							/>
						</div>
						<div v-if="getPaginateCount > 1">
							<pagination
								v-model="currentPage"
								class="EduMall-pagination"
								:per-page="perPage"
								:records="events.length"
								:page-count="getPaginateCount"
								@paginate="paginateClickCallback"
							/>
						</div>
					</div>
					<div class="col-span-12 lg:col-span-3 space-y-7.5 lg:order-first">
						<EventSidebar :events="events" />
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
		EventListArticle: () => import("~/components/events/EventListArticle"),
		EventSidebar: () => import("~/components/events/EventSidebar"),
	},

	data() {
		return {
			events,
			currentPage: 1,
			perPage: 6,
			options: ["Happening", "Upcoming", "Expired"],
			placeholderItem: "Default",
		};
	},

	head() {
		return {
			title: "Event list Sidebar",
		};
	},

	computed: {
		getItems() {
			const start = (this.currentPage - 1) * this.perPage;
			const end = this.currentPage * this.perPage;
			return this.events.slice(start, end);
		},
		getPaginateCount() {
			return Math.ceil(this.events.length / this.perPage);
		},

		getSelectorPlaceholder() {
			return this.placeholderItem;
		},
	},
	methods: {
		paginateClickCallback(page) {
			this.currentPage = Number(page);
		},
	},
};
</script>