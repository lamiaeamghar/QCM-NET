<template>
	<div class="slider-section">
		<div
			class="bg-heading bg-cover bg-no-repeat bg-center py-24 lg:py-[170px]"
			:style="{backgroundImage: `url(/images/hero/home-language-academic-hero-bg.jpg)`}"
		>
			<div class="container">
				<div class="grid grid-cols-1">
					<div class="text-center pt-8 sm:pt-15">
						<h1 class="text-3xl xs:text-4xl md:text-[55px] lg:text-[64px] text-white font-normal leading-tight"><span class="font-bold block">Innovative</span> Language Academic</h1>
						<h5 class="text-white mt-6">Learning New Languages, Connect To The World</h5>

						<div class="flex justify-center space-x-7">
							<n-link to="/register" class="text-sm sm:text-normal px-6 sm:px-10 py-3 sm:py-4 font-semibold inline-block rounded mt-8 md:mt-12 text-white bg-primary hover:text-heading hover:bg-secondary">Sign Up Now</n-link>
							<n-link
								to="/courses"
								class="text-sm sm:text-normal px-6 sm:px-10 py-3 sm:py-4 font-semibold inline-block rounded mt-8 md:mt-12 text-primary bg-white hover:text-white hover:bg-primary"
							>Find Courses</n-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>