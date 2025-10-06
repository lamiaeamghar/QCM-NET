<template>
	<div class="fixed top-0 right-0 w-screen h-screen opacity-0 invisible z-50 transition-all">
		<div
			class="top-0 left-0 w-full h-full absolute bg-black bg-opacity-60 content-['']"
			@click="$emit('toggleAsideMenu')"
		></div>
		<div class="mobile-menu-inner relative w-full sm:max-w-[400px] h-full text-left -translate-x-full transition-all">
			<div class="flex items-center justify-between px-5 py-3 bg-white">
				<div class="logo max-w-[150px]">
					<n-link to="/">
						<img src="/images/logo/dark-logo.png">
					</n-link>
				</div>
				<button
					aria-label="Settings"
					class="text-4xl text-heading-light hover:text-primary group"
					@click="$emit('toggleAsideMenu')"
				>
					<i class="fas fa-times group-hover:rotate-180 block transition-all duration-500"></i>
				</button>
			</div>
			<div class="h-full overflow-y-auto relative bg-no-repeat bg-cover bg-top bg-[url('/images/others/mobile-bg.jpg')] before:absolute before:top-0 before:left-0 before:content-[''] before:bg-black before:bg-opacity-80 before:h-full before:w-full">
				<div class="px-5 py-8">
					<div class="menu-navigation">
						<ResponsiveMobileMenu />
					</div>
					<div class="mt-8">
						<ul class="space-y-2.5 relative">
							<li class="text-white">
								<i class="fas fa-phone"></i>
								<a
									class="pl-2.5 hover:text-primary"
									href="callto:0123456789"
								>0123456789</a>
							</li>
							<li class="text-white">
								<i class="fas fa-envelope"></i>
								<a
									class="pl-2.5 hover:text-primary"
									href="mailto:info@yourdomain.com"
								>info@yourdomain.com</a>
							</li>
						</ul>
					</div>
					<div class="flex mt-15 relative space-x-5 justify-center">
						<n-link
							to="/login"
							class="text-white py-2.5 px-10 bg-primary rounded inline-block hover:text-heading hover:bg-secondary transition-all"
						>Log In</n-link>
						<n-link
							to="/register"
							class="text-heading py-2.5 px-10 bg-secondary rounded inline-block hover:text-white hover:bg-primary transition-all"
						>Sign Up</n-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		ResponsiveMobileMenu: () => import("@/components/header/ResponsiveMobileMenu"),
	},
};
</script>

<style lang="scss">
.show-mobile-menu {
	@apply opacity-100 visible;
}
.show-mobile-menu .mobile-menu-inner {
	@apply transform-none;
}
</style>