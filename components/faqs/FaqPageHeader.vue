<template>
	<div class="bg-white-800 relative">
		<div class="container">
			<ul class="flex flex-wrap items-center py-5">
				<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					<n-link to="/">Home</n-link>
				</li>
				<li class="relative capitalize after:right-0 after:content-['/'] after:absolute mr-4 pr-5 last:pr-0 last:after:hidden">
					FAQs
				</li>
			</ul>
		</div>
		<div class="custom-container">
			<div class="grid md:grid-cols-2">
				<div class="pt-12 pb-24 z-10">
					<h1 class="text-[28px] lg:text-[40px]">How may we help you?</h1>
					<form class="relative w-full mt-10">
						<input
							type="text"
							placeholder="Search..."
							class="text-heading bg-white h-16 w-full rounded font-semibold px-5 text-sm focus:outline outline-primary outline-1 pr-16 shadow-[0_0_10px_rgb(0,0,0,0.10)]"
						>
						<button class="absolute right-0 w-15 h-full bg-transparent text-primary text-xl">
							<i class="fas fa-search"></i>
						</button>
					</form>
				</div>
			</div>
		</div>
		<div
			class="bg-no-repeat lg:bg-auto bg-right-bottom md:absolute top-0 left-0 w-full md:h-full pointer-events-none bg-[length:auto_300px] relative h-56 -mt-20 md:mt-0"
			:style="{backgroundImage: `url('/images/banner/banner-image-06.png')`}"
		>
		</div>
	</div>
</template>