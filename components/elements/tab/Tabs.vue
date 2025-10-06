<template>
	<div>
		<ul class="text-center flex flex-wrap justify-center relative before:absolute before:content-[''] before:h-[1px] before:bg-gallery before:left-0 before:w-full before:bottom-0 mb-13">
			<li
				v-for='(tab, index) in tabs'
				:key='tab.title'
				class="text-normal md:text-xl font-semibold text-light pt-0 sm:pt-4 pb-4 px-5 hover:text-heading cursor-pointer"
				:class='{"!text-heading": (index == selectedIndex)}'
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