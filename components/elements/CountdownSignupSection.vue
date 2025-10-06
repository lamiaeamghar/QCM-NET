<template>
	<div class="py-section bg-[#EFF5F7]">
		<div class="container">
			<div class="grid grid-cols-12 items-center">
				<div class="col-span-12 lg:col-span-4">
					<div class="test">
						<div class="section-title mb-5 lg:mb-13">
							<h2 class="-mt-2.5 mb-3 text-2xl md:text-[32px]"><mark class="bg-transparent text-primary font-bold relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">FREE</mark> Resources Learning German for Beginner</h2>
							<p>Learning new languages, connect to the world and become a global citizen with EduMall</p>
						</div>
						<Countdown deadline="october 31, 2023"></Countdown>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-4">
					<div class="text-center mt-10 lg:mt-0 mb-10">
						<img
							src="/images/others/resourse-image.png"
							alt="image"
						>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-4">
					<div class="bg-white p-5 sm:p-10 rounded text-center max-w-[470px] mx-auto md:ml-auto bg-opacity-80 sm:bg-opacity-100">
						<h3 class="mb-7 font-bold">Sign Up for Free Resources</h3>
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
							<button class="text-base text-white px-12 w-full py-4 font-semibold bg-primary rounded inline-block hover:text-heading hover:bg-secondary mt-2">Get It Now</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		Countdown: () => import("~/components/elements/Countdown"),
	},
};
</script>