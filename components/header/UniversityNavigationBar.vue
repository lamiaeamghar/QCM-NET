<template>
	<div
		class="bg-primary shadow-[0_10px_26px_rgba(0,0,0,5%)] relative light-color-navigation"
		:class="{'!fixed top-0 left-0 w-full z-50 transition-all shadow-md animate-fadeInDown xl:!py-0' : isSticky}"
	>
		<div class="custom-container">
			<div class="flex items-center justify-center">
				<div class="header-navigation hidden lg:block university-nav">
					<Navigation />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		Navigation: () => import("~/components/header/Navigation"),
	},

	data() {
		return {
			isSticky: false,
		};
	},

	mounted() {
		window.addEventListener("scroll", () => {
			const scroll = window.scrollY;
			if (scroll >= 100) {
				this.isSticky = true;
			} else {
				this.isSticky = false;
			}
		});
	},
};
</script>