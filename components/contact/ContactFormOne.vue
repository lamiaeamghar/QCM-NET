<template>
	<form class="space-y-5">
		<div class="sm:flex space-y-5 sm:space-y-0 sm:space-x-5">
			<input
				type="text"
				required
				placeholder="Your Name *"
				class="text-heading bg-white-800 h-13 w-full rounded px-5 text-sm focus:outline outline-primary outline-1 focus:bg-transparent"
			>
			<input
				type="email"
				required
				placeholder="Your Email *"
				class="text-heading bg-white-800 h-13 w-full rounded px-5 text-sm focus:outline outline-primary outline-1 focus:bg-transparent"
			>
		</div>
		<textarea
			type="text"
			placeholder="Write Your comment"
			class="text-heading bg-white-800 h-32 w-full rounded p-5 text-sm focus:outline outline-primary outline-1 focus:bg-transparent"
		></textarea>
		<div
			v-if="hasSaved"
			class="form-check"
		>
			<label class="form-check-label inline-block text-light cursor-pointer hover:text-primary">
				<input
					id="category"
					class="form-check-input appearance-none h-[18px] w-[18px] border border-[#cacaca] rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-sub bg-no-repeat bg-center bg-contain mr-2 cursor-pointer hover:border-primary"
					type="checkbox"
					value="category.slug"
				>
				Save my name, email, and website in this browser for the next time I comment.
			</label>
		</div>
		<button class="text-base text-white px-12 py-4 font-semibold bg-primary rounded inline-block hover:text-heading hover:bg-secondary mt-2">Submit</button>
	</form>
</template>

<script>
export default {
	props: {
		hasSaved: {
			type: Boolean,
		},
	},
};
</script>