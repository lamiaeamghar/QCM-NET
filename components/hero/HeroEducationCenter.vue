<template>
	<div class="slider-section">
		<div
			class="bg-heading bg-cover bg-no-repeat bg-center py-24 lg:py-40"
			:style="{backgroundImage: `url(/images/hero/home-education-center-hero-bg.jpg)`}"
		>
			<div class="container">
				<div class="grid grid-cols-12 gap-[30px] items-center">
					<div class="col-span-12 md:col-span-6">
						<div class="slider-caption">
							<h3 class="text-base font-semibold leading-normal tracking-[4px] text-white uppercase">For a better future</h3>
							<h2 class="text-3xl xs:text-[40px] lg:text-[55px] text-white leading-tight mt-5">Build An <span class="text-secondary relative before:absolute before:content-[''] before:bottom-0 before: left-0 before:bg-secondary before:h-0.5 before:w-full">Incredible</span> Learning Experience</h2>

							<n-link
								to="/courses"
								class="text-normal px-10 py-4 font-semibold inline-block rounded mt-8 sm:mt-12 text-primary bg-white hover:text-white hover:bg-primary"
							>Find Courses</n-link>
						</div>
					</div>
					<div class="col-span-12 md:col-span-6">
						<div class="bg-white p-5 sm:p-10 rounded text-center max-w-[470px] mx-auto md:mr-0 md:ml-auto bg-opacity-80 sm:bg-opacity-100">
							<h4 class="mb-9"><span class="font-bold block mb-2">Register for A Free Account</span> To Access To 1200+ Online Courses</h4>
							<form>
								<div class="relative mb-4">
									<div class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-light leading-none max-w-[20px]">
										<i class="far fa-user"></i>
									</div>
									<input
										type="text"
										required
										placeholder="Username"
										class="text-heading bg-white-800 h-13 w-full rounded px-5 text-sm focus:outline outline-primary outline-1 focus:bg-transparent pl-11"
									>
								</div>
								<div class="relative mb-4">
									<div class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-light leading-nonet max-w-[20px]">
										<i class="far fa-envelope"></i>
									</div>
									<input
										type="text"
										required
										placeholder="Your Email"
										class="text-heading bg-white-800 h-13 w-full rounded px-5 text-sm focus:outline outline-primary outline-1 focus:bg-transparent pl-11"
									>
								</div>
								<div class="relative mb-4">
									<div class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-light leading-nonet max-w-[20px]">
										<i class="fas fa-key"></i>
									</div>
									<input
										type="password"
										required
										placeholder="Password"
										class="text-heading bg-white-800 h-13 w-full rounded px-5 text-sm focus:outline outline-primary outline-1 focus:bg-transparent pl-11"
									>
								</div>
								<button class="text-base text-white px-12 w-full py-4 font-semibold bg-primary rounded inline-block hover:text-heading hover:bg-secondary mt-2">Sign Up</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>