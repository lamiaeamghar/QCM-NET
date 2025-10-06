<template>
	<div class="footer-section bg-[#f9f9fb]">
		<div class="py-section">
			<div class="container">
				<div class="grid grid-cols-12">
					<div class="col-span-12 lg:col-span-4">
						<div class="footer-widget">
							<n-link to="/">
								<img
									src="/images/logo/dark-logo.png"
									alt="Logo"
									width="150"
									height="32"
								>
							</n-link>
							<div class="mt-6">
								<span class="leading-[26px] block">Call us</span>
								<span class="text-primary font-bold text-normal block">
									<a href="callto:8003888090">800 388 80 90</a>
								</span>
							</div>
							<div class="mt-6">
								<p class="font-semibold leading-loose mb-0">58 Howard Street #2 San Francisco</p>
								<p class="font-semibold leading-loose hover:text-primary">
									<a href="mailto:contact@edumall.com">contact@edumall.com</a>
								</p>
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
					<div class="col-span-12 lg:col-span-8">
						<div class="grid grid-cols-12 gap-y-8 mt-8 lg:mt-0">
							<div class="col-span-12 xs:col-span-6 sm:col-span-4">
								<div class="footer-widget">
									<h6 class="font-bold leading-relaxed mb-5">About</h6>
									<ul class="space-y-3">
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/about-02">About Us</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/courses">Courses</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/instructors">Instructor</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/event">Events</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/become-an-instructor">Become A Teacher</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/contact-us">Contact Us</n-link>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-span-12 xs:col-span-6 sm:col-span-4">
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
											<n-link to="/courses">Gallery</n-link>
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
							<div class="col-span-12 xs:col-span-6 sm:col-span-4">
								<div class="footer-widget">
									<h6 class="font-bold leading-relaxed mb-5">Support</h6>
									<ul class="space-y-3">
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/faqs">FAQs</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/contact-us">Forum</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/contact-us">Contact</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/about-02">Documentation</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/privacy-policy">Privacy Policy</n-link>
										</li>
										<li class="font-semibold text-light leading-relaxed hover:text-primary">
											<n-link to="/terms-condition">Terms & Condition</n-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<FooterCopyright />
	</div>
</template>
