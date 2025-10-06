<template>
	<div class="py-section">
		<div class="container">
			<div class="grid grid-cols-12">
				<div class="col-span-12 lg:col-span-6 lg:col-start-4">
					<div class="bg-white p-5 sm:p-10 rounded text-center shadow-[0_0_15px_rgba(0,0,0,0.09)]">
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
									type="email"
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
							<button class="text-base text-white px-12 w-full py-4 font-semibold bg-primary rounded inline-block hover:text-heading hover:bg-secondary mt-2">Register</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>