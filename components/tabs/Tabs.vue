<template>
	<div>
		<ul class='flex space-x-5 mb-5'>
			<li
				v-for='(tab, index) in tabs'
				:key='tab.title'
				class="cursor-pointer font-semibold"
				:class='{"text-primary": (index == selectedIndex)}'
				@click='selectTab(index)'
			>
				{{ tab.title }}
			</li>
		</ul>
		<slot></slot>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedIndex: 0,
			tabs: [],
		};
	},
	created() {
		this.tabs = this.$children;
	},
	mounted() {
		this.selectTab(0);
	},
	methods: {
		selectTab(i) {
			this.selectedIndex = i;
			this.tabs.forEach((tab, index) => {
				tab.isActive = index === i;
			});
		},
	},
};
</script>