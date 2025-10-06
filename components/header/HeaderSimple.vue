<template>
	<div
		class="header-main py-7 xl:py-2.5 bg-[#F5F7FD] shadow-[0_10px_26px_rgba(0,0,0,5%)]"
		:class="{ 'fixed top-0 left-0 w-full bg-white z-50 transition-all shadow-md animate-fadeInDown !py-5 xl:!py-0' : isSticky }"
	>
		<div class="container">
			<div class="flex items-center justify-between">
				<div class="header-logo w-36 mr-7">
					<n-link to="/">
						<img
							src="/images/logo/dark-logo.png"
							alt="Logo"
						>
					</n-link>
				</div>

				<div class="header-inner flex items-center justify-end flex-grow">
					<div class="header-navigation hidden lg:block">
						<Navigation />
					</div>

					<div class="header-toggle flex items-center">
						<button
							class="ml-5 lg:hidden group"
							@click="navOpen = !navOpen"
						>
							<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
							<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
							<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<OffCanvasMobileMenu
			:class="{'show-mobile-menu' : navOpen}"
			@toggleAsideMenu="navOpen = !navOpen"
		/>
	</div>
</template>

<script>
export default {
	components: {
		Navigation: () => import("~/components/header/Navigation"),
		OffCanvasMobileMenu: () => import("~/components/header/OffCanvasMobileMenu"),
	},

	data() {
		return {
			isSticky: false,
			navOpen: false,
		};
	},

	watch: {
		$route() {
			this.navOpen = false;
		},
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