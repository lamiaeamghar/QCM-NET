<template>
	<div class="sidebar xl:pr-7.5 space-y-10">
		<div class="filter-widget">
			<h5 class=" border-b-2 border-gallery pb-1">Find Events</h5>
			<form class="mt-7.5 space-y-5">
				<div class="relative">
					<client-only>
						<datepicker placeholder="Event from"></datepicker>
					</client-only>
					<span class="absolute top-0 right-0 h-13 w-13 text-center leading-[52px] text-light pointer-events-none">
						<i class="far fa-calendar"></i>
					</span>
				</div>
				<div class="relative">
					<v-select
						:options="options"
						:placeholder="getSelectorPlaceholder"
					></v-select>
				</div>
				<div class="relative">
					<input
						type="text"
						placeholder="Location"
						class="relative bg-white-800 rounded w-full h-13 pl-4 pr-13 placeholder-light focus:outline outline-primary outline-1"
					>
					<span class="absolute top-0 right-0 h-13 w-13 text-center leading-[52px] text-light pointer-events-none">
						<i class="fas fa-map-marker-alt"></i>
					</span>
				</div>
				<div class="relative">
					<input
						type="text"
						placeholder="Keyword..."
						class="relative bg-white-800 rounded w-full h-13 pl-4 pr-13 placeholder-light focus:outline outline-primary outline-1"
					>
					<span class="absolute top-0 right-0 h-13 w-13 text-center leading-[52px] text-light pointer-events-none">
						<i class="fas fa-search"></i>
					</span>
				</div>
				<div class="relative">
					<button class="text-base w-full px-9 py-3.5 font-semibold inline-block rounded text-white bg-primary hover:text-heading hover:bg-secondary">Find Events</button>
				</div>
			</form>
		</div>
		<div class="popular-events space-y-5">
			<h5 class="border-b-2 border-gallery mb-7 pb-1">Popular Events</h5>
			<PopularEvent
				v-for="(event, i) in events.slice(0, 3)"
				:key="i"
				:event="event"
			/>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		PopularEvent: () => import("~/components/events/PopularEvent"),
	},
	props: {
		events: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			options: ["Happening", "Upcoming", "Expired"],
			placeholderItem: "Default",
		};
	},
	computed: {
		getSelectorPlaceholder() {
			return this.placeholderItem;
		},
	},
};
</script>

<style lang="scss">
.vdp-datepicker input {
	@apply w-full h-13 bg-white-800 px-4 text-heading rounded text-sm focus:outline outline-primary outline-1 placeholder-light;
}
.vdp-datepicker__calendar {
	margin-top: 5px;
	z-index: 1 !important;
	.today {
		border: 1px solid #4bd !important;
	}
}

.vs__dropdown-toggle {
	background-color: #f8f8f8 !important;
	border-color: #f8f8f8 !important;
}
.vs__actions {
	padding: 4px 15px 0 3px !important;
}
.vs__search,
.vs__search:focus {
	width: 100% !important;
	padding: 0 !important;
	margin: 0 !important;
	border: none !important;
}
.vs__search {
	flex: 1 0 !important;
	background-color: transparent !important;
	border: none !important;
	height: 50px !important;
}
input.vs__search {
	color: #666666 !important;
	min-height: 0 !important;
	border: none !important;
	padding: 0 !important;
}
.vs__dropdown-toggle {
	padding: 0 !important;
}
.vs__selected {
	margin: 0 !important;
	padding: 0 !important;
	position: absolute !important;
	top: 50% !important;
	transform: translateY(-50%) !important;
}
.vs__dropdown-menu {
	padding: 0 !important;
	li {
		padding: 10px !important;
		&:hover,
		.active {
			background-color: #0071dc !important;
		}
	}
}
.vs__selected-options {
	padding: 0 15px !important;
}
.vs__dropdown-option--highlight {
	background: #0071dc !important;
}
</style>