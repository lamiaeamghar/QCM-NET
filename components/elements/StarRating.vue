<template>
	<div class="relative text-[#f7c04d] text-xs leading-none -mt-0.5 inline-block mr-1.5 tracking-[1px]">
		<span
			v-for="star in max"
			:key="star.id"
		><i class="fal fa-star"></i></span>
		<div
			class="absolute top-0 overflow-hidden whitespace-nowrap"
			:style="{width: getRating + '%'}"
		>
			<span
				v-for="star in max"
				:key="star.id"
			><i class="fas fa-star"></i></span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		max: {
			type: Number,
			default: 5,
		},
		current: {
			type: Number,
			default: 5,
		},
	},

	computed: {
		getRating() {
			return (this.current / this.max) * 100;
		},
	},

	methods: {
		randomValue() {
			this.value = (Math.random() * 4 + 1).toFixed(2);
		},
	},
};
</script>

