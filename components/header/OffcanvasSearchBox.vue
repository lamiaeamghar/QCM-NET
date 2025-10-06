<template>
	<div class="fixed top-[70px] border-t left-0 w-screen h-screen opacity-0 invisible z-50 transition-all">
		<div
			class="top-0 left-0 w-full h-full absolute bg-black bg-opacity-80 content-['']"
			@click="$emit('searchToggle')"
		></div>
		<div class="mobile-search-inner p-5 relative w-full text-left bg-white -translate-y-full transition-all duration-500">
			<form
				class="search-box relative"
				@submit.prevent="submitForm"
			>
				<input
					v-model="searchTerm"
					type="text"
					placeholder="Write your search keyword..."
					class="text-heading-light border rounded-md pl-3 pr-15 py-3 w-full focus:border-primary focus:outline-none"
				>
				<button
					aria-label="Search"
					class="w-12 h-full absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-primary text-xl rounded-tr-md rounded-br-md"
				>
					<i class="fas fa-search"></i>
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchTerm: this.$route.query.term || "",
		};
	},
	methods: {
		submitForm() {
			this.$router.push({ path: "/courses/search", query: { term: this.searchTerm } });
		},
	},
};
</script>

<style lang="scss" scoped>
.show-search-box {
	@apply opacity-100 visible;
}
.show-search-box .mobile-search-inner {
	@apply transform-none;
}
</style>