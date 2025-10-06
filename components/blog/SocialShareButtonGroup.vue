<template>
	<div class="flex items-center mt-3 sm:mt-0">
		<span class="font-semibold pr-3">Share this post</span>
		<div class="relative social-icon">
			<div class="w-12 h-12 leading-[48px] text-center border-2 border-gallery rounded-full cursor-pointer text-primary text-lg relative">
				<i class="fas fa-share-alt"></i>
			</div>
			<ul class="flex absolute bottom-full right-0 bg-white rounded px-1 text-center whitespace-nowrap opacity-0 invisible shadow-[0_2px_20px_rgba(0,0,0,.06)] before:absolute before:top-full before:right-3 before:-translate-x-1/2 before:content-[''] before:border-t-8 before:border-t-white before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent transition-all">
				<li class="text-light">
					<a
						href="https://twitter.com"
						target="_blank"
						class="text-light text-base block px-3 py-2.5 hover:text-primary"
					><i class="fab fa-twitter"></i></a>
				</li>
				<li class="text-light">
					<a
						href="https://www.facebook.com"
						target="_blank"
						class="text-light text-base block px-3 py-2.5 hover:text-primary"
					><i class="fab fa-facebook-f"></i></a>
				</li>
				<li class="text-light">
					<a
						href="https://www.linkedin.com"
						target="_blank"
						class="text-light text-base block px-3 py-2.5 hover:text-primary"
					><i class="fab fa-linkedin"></i></a>
				</li>
				<li class="text-light">
					<a
						href="https://www.instagram.com"
						target="_blank"
						class="text-light text-base block px-3 py-2.5 hover:text-primary"
					><i class=" fab fa-instagram"></i></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.social-icon {
	&:hover {
		ul {
			opacity: 100;
			visibility: visible;
			transform: translateY(-12px);
		}
	}
}
</style>
