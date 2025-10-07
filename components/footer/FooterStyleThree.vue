<template>
	<div class="py-section">
		<div class="custom-container">
			<div class="grid grid-cols-12 gap-7.5">
				<div class="col-span-12 lg:col-span-4">
					<div class="footer-widget pr-12">
						<n-link to="/">
							<img
								src="/images/logo/dark-logo.png"
								alt="Logo"
								width="150"
								height="32"
							>
						</n-link>
						<p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Nunc maximus, nulla utlaoki comm odo sagittis.</p>
						<p class="text-light mt-7 lg:mt-10">&copy; 2025 <span> QCM-NET </span> Made with <i class="fa fa-heart  text-red-500"></i> by <a
								href="#"
								class="hover:text-primary"
								target="_blank"
							>ENSI Students' (3GINFO-TA)</a>
						</p>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-4">
					<div class="grid grid-cols-12 gap-y-8">
						<div class="col-span-12 sm:col-span-6">
							<div class="footer-widget">
								<h6 class="font-bold leading-relaxed mb-5">About</h6>
								<ul class="space-y-3">
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/about">About Us</n-link>
									</li>
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/courses">Courses</n-link>
									</li>
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/event">Events</n-link>
									</li>
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/become-an-instructor">Become A Instructor</n-link>
									</li>
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/contact-us">Contact Us</n-link>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-span-12 sm:col-span-6">
							<div class="footer-widget">
								<h6 class="font-bold leading-relaxed mb-5">Links</h6>
								<ul class="space-y-3">
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/blog">News & Blogs</n-link>
									</li>
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/courses">Library</n-link>
									</li>
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/instructors">Partners</n-link>
									</li>
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/become-an-instructor">Career</n-link>
									</li>
									<li class="font-semibold text-light leading-relaxed hover:text-primary">
										<n-link to="/courses">Courses</n-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-4">
					<div class="footer-widget">
						<h6 class="font-bold leading-relaxed mb-5">Sign up for our newsletter</h6>
						<p>Receive weekly newsletter with educational materials, popular books and much more!</p>
						<div class="relative flex-grow mt-5 md:mt-0">
							<form>
								<input
									type="email"
									placeholder="Your e-mail"
									required
									class="w-full h-13 xs:pr-40 border-2 border-gallery px-5 py-1 rounded text-sm focus:outline-none"
								>
								<button class="text-heading bg-secondary font-bold xs:absolute h-10 rounded top-1/2 right-1.5 px-5 xs:-translate-y-1/2 hover:bg-primary hover:text-white mt-3 xs:mt-0 w-full xs:w-auto">Subscribe</button>
							</form>
						</div>
						<div class="mt-4">
							<a
								href="https://twitter.com/"
								target="_blank"
								class="text-[#26D0FE] text-xl mr-6 hover:text-primary"
							>
								<i class="fab fa-twitter"></i>
							</a>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								class="text-[#567FA9] text-xl mr-6 hover:text-primary"
							>
								<i class="fab fa-facebook-f"></i>
							</a>
							<a
								href="https://www.skype.com/"
								target="_blank"
								class="text-[#13BAF7] text-xl mr-6 hover:text-primary"
							>
								<i class="fab fa-skype"></i>
							</a>
							<a
								href="https://www.youtube.com/"
								target="_blank"
								class="text-[#DA0E2B] text-xl mr-6 hover:text-primary"
							>
								<i class="fab fa-youtube"></i>
							</a>
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								class="text-[#276097] text-xl mr-6 hover:text-primary"
							>
								<i class="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>