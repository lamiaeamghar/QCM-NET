<template>
	<div class="flex space-x-5 sm:space-x-10 xl:space-x-15">
		<div class="text-center">
			<span class="block text-2xl sm:text-4xl text-primary font-bold">{{ days }}</span>
			<span class="block text-xs uppercase font-semibold">Days</span>
		</div>
		<div class="text-center">
			<span class="block text-2xl sm:text-4xl text-primary font-bold">{{ hours }}</span>
			<span class="block text-xs uppercase font-semibold">Hours</span>
		</div>
		<div class="text-center">
			<span class="block text-2xl sm:text-4xl text-primary font-bold">{{ minutes }}</span>
			<span class="block text-xs uppercase font-semibold">Minutes</span>
		</div>
		<div class="text-center">
			<span class="block text-2xl sm:text-4xl text-primary font-bold">{{ seconds }}</span>
			<span class="block text-xs uppercase font-semibold">Seconds</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		deadline: {
			type: String,
			default: "october 31, 2022",
		},
	},

	data() {
		return {
			now: Math.trunc(new Date().getTime() / 1000),
		};
	},

	computed: {
		dateInMilliseconds() {
			return Math.trunc(Date.parse(this.deadline) / 1000);
		},
		seconds() {
			const sec = (this.dateInMilliseconds - this.now) % 60;
			return `${sec}`.padStart(2, "0");
		},
		minutes() {
			const min = Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
			return `${min}`.padStart(2, "0");
		},
		hours() {
			const hrs = Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
			return `${hrs}`.padStart(2, "0");
		},
		days() {
			const day = Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
			return `${day}`.padStart(2, "0");
		},
	},
	mounted() {
		setInterval(() => {
			this.now = Math.trunc(new Date().getTime() / 1000);
		}, 1000);
	},
};
</script>