<template>
  <div class="main flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 font-sans">
    
    <!-- Header -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <HeaderTop class="border-b border-gray-100" />
      <HeaderDefault />
    </header>

    <!-- Main content -->
    <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6">
      <div class="max-w-7xl mx-auto w-full">
        <Nuxt />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-10 mt-10">
      <div class="max-w-7xl mx-auto px-6">
        <FooterStyleTwo />
        <p class="text-sm text-gray-500 mt-4 text-center">
          © {{ new Date().getFullYear() }} All rights reserved.
        </p>
      </div>
    </footer>

    <!-- Scroll To Top -->
    <ScrollToTop />
  </div>
</template>

<script>
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  components: { ScrollToTop },
};
</script>
