<template>
  <div class="footer-section bg-[#F9F9FB] py-section">
    <div class="container">
      <div class="grid grid-cols-12">
        <!-- Left Side -->
        <div class="col-span-12 lg:col-span-8">
          <div class="grid grid-cols-12 gap-y-8">

            <!-- About Section -->
            <div class="col-span-12 xs:col-span-6 sm:col-span-4">
              <div class="footer-widget text-center xs:text-left">
                <h6 class="font-bold leading-relaxed mb-5">About</h6>
                <ul class="space-y-3">
                  <li class="font-medium text-[#666666] leading-relaxed hover:text-primary">
                    <n-link to="/about-02">About Us</n-link>
                  </li>
                  <li class="font-medium text-[#666666] leading-relaxed hover:text-primary">
                    <n-link to="/courses">Courses</n-link>
                  </li>
                  <li class="font-medium text-[#666666] leading-relaxed hover:text-primary">
                    <n-link to="/instructors">Instructors</n-link>
                  </li>
                  <li class="font-medium text-[#666666] leading-relaxed hover:text-primary">
                    <n-link to="/become-an-instructor">Become a Teacher</n-link>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Links Section -->
            <div class="col-span-12 xs:col-span-6 sm:col-span-4">
              <div class="footer-widget text-center xs:text-left">
                <h6 class="font-bold leading-relaxed mb-5">Links</h6>
                <ul class="space-y-3">
                  <li class="font-medium text-[#666666] leading-relaxed hover:text-primary">
                    <n-link to="/instructors">Partners</n-link>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Support Section -->
            <div class="col-span-12 xs:col-span-6 sm:col-span-4">
              <div class="footer-widget text-center xs:text-left">
                <h6 class="font-bold leading-relaxed mb-5">Support</h6>
                <ul class="space-y-3">
                  <li class="font-medium text-[#666666] leading-relaxed hover:text-primary">
                    <n-link to="/faqs">FAQs</n-link>
                  </li>
                  <li class="font-medium text-[#666666] leading-relaxed hover:text-primary">
                    <n-link to="/terms-condition">Terms & Condition</n-link>
                  </li>
                  <li class="font-medium text-[#666666] leading-relaxed hover:text-primary">
                    <n-link to="/privacy-policy">Privacy Policy</n-link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Side (Logo + Social + Info) -->
        <div class="col-span-12 lg:col-span-4">
          <div class="footer-widget text-center mt-10 lg:mt-0">
            <n-link to="/">
              <img src="/images/logo/dark-logo.png" alt="Logo" width="150" height="32" />
            </n-link>

            <!-- Social Icons -->
            <div class="mt-7">
              <a href="https://twitter.com/" target="_blank" class="text-[#96A1B1] text-xl py-1.5 px-3 hover:text-primary">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" class="text-[#96A1B1] text-xl py-1.5 px-3 hover:text-primary">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" class="text-[#96A1B1] text-xl py-1.5 px-3 hover:text-primary">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" class="text-[#96A1B1] text-xl py-1.5 px-3 hover:text-primary">
                <i class="fab fa-youtube"></i>
              </a>
            </div>

            <!-- Footer Text -->
            <p class="text-light my-4">
              &copy; 2025 <span>QCM-NET</span> Made with 
              <i class="fa fa-heart text-red-500"></i> 
              by <a href="#" class="hover:text-primary">ENSI Students (3GINFO-TA)</a>
            </p>

            <!-- Legal Links -->
            <ul class="flex justify-center space-x-10">
              <li class="font-medium text-light hover:text-primary">
                <n-link to="/terms-condition">Terms of Use</n-link>
              </li>
              <li class="font-medium text-light hover:text-primary">
                <n-link to="/privacy-policy">Privacy Policy</n-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
