<template>
	<form
		class="max-w-[300px] xl:max-w-[400px] relative w-full px-2.5 hidden md:block"
		@submit.prevent="submitForm"
	>
		<input
			v-model="searchTerm"
			type="text"
			placeholder="Search course..."
			class="text-heading bg-white-200 h-15 w-full rounded font-semibold px-5 text-sm focus:outline outline-primary outline-1 focus:bg-transparent pr-16"
		>
		<button class="absolute right-2.5 w-15 h-15 bg-transparent text-primary text-xl"><i class="fas fa-search"></i></button>
	</form>
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