<template>
	<div class="header-top bg-tangaroa py-1.5 p-1 hidden sm:block">
		<div class="container">
			<div class="flex justify-between items-center">
				<ul class="flex items-center py-2">
					<li class="text-white text-xs relative mr-7.5 hover:text-secondary before:absolute before:contents-[] before:top-1/2 before:w-[1px] before:h-5 before:-right-[15px] before:bg-white before:bg-opacity-40 before:-translate-y-1/2 before:last:hidden"><a href="tel:+8819906886"><i class="fas fa-phone text-secondary pr-1"></i> <span class="info-text">(+88) 1990 6886</span></a></li>
					<li class="text-white text-[13px] relative mr-[30px] hover:text-secondary before:absolute before:contents-[] before:top-1/2 before:w-[1px] before:h-5 before:-right-[15px] before:bg-white before:bg-opacity-40 before:-translate-y-1/2 before:last:hidden"><a href="mailto:agency@example.com"><i class="far fa-envelope text-secondary pr-1"></i> <span class="info-text">agency@example.com</span></a></li>
				</ul>

				<div class="flex">
					<ul class="hidden md:flex pr-6">
						<li class="relative mr-5 last:mr-0 pr-5 last:pr-0 before:absolute before:contents-[] before:top-1/2 before:w-[1px] before:h-5 before:right-0 before:bg-white before:bg-opacity-40 before:-translate-y-1/2 before:last:hidden">
							<n-link
								to="/login"
								class="text-xs font-semibold text-white hover:text-secondary transition-all"
							>Log In</n-link>
						</li>
						<li class="relative mr-5 last:mr-0 pr-5 last:pr-0 before:absolute before:contents-[] before:top-1/2 before:w-[1px] before:h-5 before:right-0 before:bg-white before:bg-opacity-40 before:-translate-y-1/2 before:last:hidden">
							<n-link
								to="/register"
								class="text-xs font-semibold text-white hover:text-secondary transition-all"
							>Register</n-link>
						</li>
					</ul>
					<div class="">
						<a
							href="https://twitter.com/"
							target="_blank"
							class="text-white text-base mr-5 last:mr-0 hover:text-secondary"
						>
							<i class="fab fa-twitter"></i>
						</a>
						<a
							href="https://www.facebook.com/"
							target="_blank"
							class="text-white text-base mr-5 last:mr-0 hover:text-secondary"
						>
							<i class="fab fa-facebook-f"></i>
						</a>
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							class="text-white text-base mr-5 last:mr-0 hover:text-secondary"
						>
							<i class="fab fa-linkedin-in"></i>
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							class="text-white text-base mr-5 last:mr-0 hover:text-secondary"
						>
							<i class="fab fa-instagram"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>