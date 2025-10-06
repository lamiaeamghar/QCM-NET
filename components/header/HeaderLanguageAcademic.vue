<template>
	<div class="absolute top-0 left-0 w-full">
		<HeaderTopNotificationBar />
		<div class="header-main py-5 md:py-2.5">
			<div class="container">
				<div class="grid grid-cols-12 items-center">
					<div class="col-span-6 lg:col-span-3">
						<div class="header-logo w-36 mr-7">
							<n-link to="/">
								<img
									src="/images/logo/light-logo.png"
									alt="Logo"
								>
							</n-link>
						</div>
					</div>
					<div class="hidden lg:block lg:col-span-6 xl:col-span-6">
						<div class="flex justify-center light-color-navigation">
							<Navigation />
						</div>
					</div>
					<div class="hidden lg:block  lg:col-span-3">
						<div class="header-user relative flex justify-end items-center">
							<div class="px-2.5">
								<n-link
									to="/login"
									class="text-sm font-semibold text-white"
								>Log In</n-link>
							</div>
							<div class="px-2.5">
								<n-link
									to="/register"
									class="text-sm font-semibold inline-block text-heading px-7 py-3 leading-none bg-secondary rounded hover:bg-white hover:text-primary transition-all"
								>Sign Up</n-link>
							</div>
						</div>
					</div>
					<div class="col-span-6 lg:hidden">
						<div class="header-toggle flex items-center justify-end">
							<button
								class="ml-5 xl:hidden group"
								@click="navOpen = !navOpen"
							>
								<span class="block w-6 h-0.5 my-1.5 bg-white group-hover:bg-primary"></span>
								<span class="block w-6 h-0.5 my-1.5 bg-white group-hover:bg-primary"></span>
								<span class="block w-6 h-0.5 my-1.5 bg-white group-hover:bg-primary"></span>
							</button>
						</div>
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
			navOpen: false,
		};
	},
	watch: {
		$route() {
			this.navOpen = false;
		},
	},
};
</script>