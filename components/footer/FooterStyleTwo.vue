<template>
  <footer class="w-full bg-[#0E1422] text-white">
    <div class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      
      <!-- Left: Logo + Text -->
      <div class="flex items-center space-x-3">
        <img
          src="/images/logo/dark-logo.png"
          alt="QCM-NET"
          class="h-10 w-auto invert brightness-0"
        />
        <span class="font-semibold text-lg">QCM-NET</span>
      </div>

      <!-- Center: Links -->
      <nav class="flex flex-wrap justify-center gap-6 text-sm font-medium">
        <NuxtLink
          to="/"
          class="hover:text-[#FACC15] transition-colors"
        >Home</NuxtLink>
        <NuxtLink
          to="/about"
          class="hover:text-[#FACC15] transition-colors"
        >About</NuxtLink>
        <NuxtLink
          to="/qcm"
          class="hover:text-[#FACC15] transition-colors"
        >QCM</NuxtLink>
        <NuxtLink
          to="/contact"
          class="hover:text-[#FACC15] transition-colors"
        >Contact</NuxtLink>
      </nav>

      <!-- Right: Social Icons -->
      <div class="flex items-center space-x-4 text-xl">
        <a href="#" class="hover:text-[#FACC15] transition-colors">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="hover:text-[#FACC15] transition-colors">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="hover:text-[#FACC15] transition-colors">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    <!-- Bottom copyright -->
    <div class="text-center text-sm py-4 text-gray-400 border-t border-[#0E1422] bg-[#0E1422]">
      © {{ new Date().getFullYear() }} QCM-NET. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {};
</script>
