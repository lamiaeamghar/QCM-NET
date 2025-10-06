<template>
	<div
		class="bg-center bg-no-repeat bg-cover"
		:style="{backgroundImage: `url(/images/others/about-us-hero-bg.jpg)`}"
	>
		<div class="container">
			<ul class="flex flex-wrap items-center py-5">
				<li class="text-white relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					<n-link to="/">Home</n-link>
				</li>
				<li class="text-white relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					About Us
				</li>
			</ul>

			<div class="text-center pt-10 sm:pt-15 lg:pt-32 pb-20 sm:pb-32 lg:pb-52">
				<h1 class="text-white font-normal text-xl sm:text-2xl md:text-[48px]"><strong class="font-semibold text-3xl sm:text-4xl md:text-[64px] block">Improving Lives</strong>Through Learning</h1>
			</div>
		</div>
	</div>
</template>