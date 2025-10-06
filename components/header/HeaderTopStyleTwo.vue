<template>
	<div class="header-top py-1.5 p-1 hidden sm:block border-b border-gallery">
		<div class="container">
			<div class="flex justify-between items-center">
				<ul class="flex items-center py-2">
					<li class="text-heading text-xs font-semibold relative mr-7.5 hover:text-primary before:absolute before:contents-[] before:top-1/2 before:w-[1px] before:h-5 before:-right-[15px] before:bg-heading before:bg-opacity-40 before:-translate-y-1/2 before:last:hidden">
						<a href="tel:+8819906886">
							<i class="fas fa-phone text-primary pr-1"></i>
							<span class="info-text">(+88) 1990 6886</span>
						</a>
					</li>
					<li class="text-heading text-xs font-semibold relative mr-7.5 hover:text-primary before:absolute before:contents-[] before:top-1/2 before:w-[1px] before:h-5 before:-right-[15px] before:bg-heading before:bg-opacity-40 before:-translate-y-1/2 before:last:hidden">
						<a href="mailto:agency@example.com">
							<i class="far fa-envelope text-primary pr-1"></i>
							<span class="info-text">agency@example.com</span>
						</a>
					</li>
				</ul>

				<div class="flex">
					<ul class="hidden md:flex">
						<li class="relative mr-5 last:mr-0 pr-5 last:pr-0 before:absolute before:content-['/'] before:top-1/2 before:right-0 before:bg-opacity-40 before:-translate-y-1/2 before:last:hidden">
							<n-link
								to="/login"
								class="text-xs font-semibold text-heading hover:text-primary transition-all"
							>Log In</n-link>
						</li>
						<li class="relative mr-5 last:mr-0 pr-5 last:pr-0 before:absolute before:content-['/'] before:top-1/2 before:right-0 before:bg-opacity-40 before:-translate-y-1/2 before:last:hidden">
							<n-link
								to="/register"
								class="text-xs font-semibold text-heading hover:text-primary transition-all"
							>Register</n-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>