<template>
	<div class="header-top lg:py-3 bg-white">
		<div class="custom-container">
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-7.5 items-center">
				<div class="hidden sm:flex items-center">
					<div class="text-4xl text-primary">
						<i class="fas fa-phone"></i>
					</div>
					<div class="pl-2.5">
						<a
							href="tel:(+01)12345678"
							class="text-xs block font-bold mb-1 hover:text-primary"
						>(+01)12345678</a>
						<a
							href="mailto:info@gmail.com"
							class="text-xs block hover:text-primary"
						>info@gmail.com</a>
					</div>
				</div>

				<div class="w-36 sm:mx-auto ">
					<n-link to="/">
						<img
							src="/images/logo/dark-logo.png"
							alt="Logo"
						>
					</n-link>
				</div>

				<div class="flex items-center ml-auto">
					<div class="relative pr-1.5 sm:pr-5 mr-1.5 sm:mr-5 before:absolute before:top-1/2 before:right-0 before:w-[1px] before:h-10 before:content-[''] before:bg-gallery before:-translate-y-1/2">
						<div class="group">
							<n-link
								to="/"
								class="text-xs font-semibold leading-relaxed block px-4 py-7 group-hover:text-primary"
							>
								English
								<i class="fas fa-angle-down text-[12px] pl-.5 text-light group-hover:text-primary"></i>
							</n-link>

							<ul class="top-full right-0 absolute min-w-[200px] bg-white py-4 rounded border-gallery shadow-[0_0_30px_rgba(0,0,0,12%)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-[20px] group-hover:translate-y-0 z-30 before:absolute before:-top-2.5 before:right-10 before:contents-[] before:border-b-[10px] before:border-white before:border-l-transparent before:border-r-transparent before:border-l-8 before:border-r-8">
								<li>
									<n-link
										to="/"
										class="text-xs font-semibold text-light block py-2 px-7.5 hover:text-primary"
									>Germany</n-link>
								</li>
								<li>
									<n-link
										to="/"
										class="text-xs font-semibold text-light block py-2 px-7.5 hover:text-primary"
									>Francais</n-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="hidden lg:flex items-center">
						<div class="text-4xl text-primary">
							<i class="fas fa-user"></i>
						</div>
						<div class="pl-2.5">
							<n-link
								to="/login"
								class="block text-xs font-semibold text-light hover:text-primary mb-1"
							>Log in</n-link>
							<n-link
								to="/register"
								class="block text-xs font-semibold text-light hover:text-primary"
							>Register</n-link>
						</div>
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