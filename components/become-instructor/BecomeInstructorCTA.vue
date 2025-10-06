<template>
	<div class="py-section">
		<div class="custom-container">
			<div class="text-center">
				<h2 class="text-2xl md:text-[40px] text-primary mb-3.5 -mt-3">Become an Instructor Today</h2>
				<h5 class=" text-base md:text-lg">Join the world's largest online learning marketplace.</h5>
				<ButtonDefault
					label="Start teaching today"
					link="/contact-us"
					class="py-4 px-8 mt-9"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		ButtonDefault: () => import("~/components/elements/ButtonDefault"),
	},
};
</script>
