<template>
	<div
		class="header-main py-5 md:py-2.5 bg-white shadow-[0_10px_26px_rgba(0,0,0,5%)] relative"
		:class="{ '!fixed top-0 left-0 w-full bg-white z-50 transition-all shadow-md animate-fadeInDown xl:!py-0' : isSticky }"
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

				<div class="header-navigation hidden xl:block">
					<Navigation />
				</div>

				<div class="header-inner flex items-center justify-end flex-grow">
					<HeaderSearchBox class="!px-0" />

					<div class="header-toggle flex items-center">
						<button
							class="ml-5 xl:hidden group"
							@click="navOpen = !navOpen"
						>
							<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
							<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
							<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
						</button>
						<button
							class="ml-5 flex md:hidden group"
							@click="searchOpen = !searchOpen"
						>
							<span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-tangaroa group-hover:bg-primary"></span>
							<span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-tangaroa group-hover:bg-primary"></span>
							<span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-tangaroa group-hover:bg-primary"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<OffCanvasMobileMenu
			:class="{'show-mobile-menu' : navOpen}"
			@toggleAsideMenu="navOpen = !navOpen"
		/>
		<OffcanvasSearchBox
			:class="{'show-search-box' : searchOpen}"
			@searchToggle="searchOpen = !searchOpen"
		/>
	</div>
</template>

<script>
export default {
	components: {
		Navigation: () => import("~/components/header/Navigation"),
		HeaderSearchBox: () => import("~/components/elements/HeaderSearchBox"),
		OffCanvasMobileMenu: () => import("~/components/header/OffCanvasMobileMenu"),
		OffcanvasSearchBox: () => import("~/components/header/OffcanvasSearchBox"),
	},

	data() {
		return {
			isSticky: false,
			navOpen: false,
			searchOpen: false,
		};
	},
	watch: {
		$route() {
			this.navOpen = false;
			this.searchOpen = false;
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