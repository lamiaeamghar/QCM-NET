<template>
  <div
    :class="[
      'min-h-screen flex transition-all duration-300',
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'
    ]"
  >
    <!-- Sidebar -->
    <Sidebar v-if="!sidebarHidden" />

    <!-- Main content -->
    <div
      class="flex-1 flex flex-col"
      :class="{ 'ml-72': !sidebarHidden }"
    >
      <!-- Header -->
      <header
        class="w-full h-16 flex items-center justify-between px-6 shadow-md border-b transition-all duration-300 sticky top-0 z-40"
        :class="darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
      >
        <div class="flex items-center space-x-4">
          <button
            class="text-2xl focus:outline-none md:hidden"
            @click="sidebarHidden = !sidebarHidden"
          >
            <i class="fas fa-bars"></i>
          </button>
          <h1 class="text-lg font-semibold">Instructor Dashboard</h1>
        </div>

        <!-- Dark mode toggle -->
        <button
          @click="toggleDarkMode"
          class="flex items-center space-x-2 text-sm px-3 py-1.5 rounded-md border transition-all duration-300"
          :class="darkMode
            ? 'bg-gray-700 border-gray-600 text-yellow-300'
            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'"
        >
          <span v-if="darkMode">🌙 Dark</span>
          <span v-else>☀️ Light</span>
        </button>
      </header>

      <!-- Content -->
      <main class="flex-1 p-6 overflow-y-auto">
        <Nuxt />
      </main>

      <!-- Footer -->
      <footer
        class="text-center py-4 text-sm border-t transition-all duration-300"
        :class="darkMode ? 'border-gray-700 text-gray-400 bg-gray-800' : 'border-gray-200 text-gray-600 bg-gray-100'"
      >
        © {{ new Date().getFullYear() }} QCM-NET — Instructor Panel.
      </footer>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/instructor/Sidebar.vue";

export default {
  components: { Sidebar },
  data() {
    return {
      darkMode: false,
      sidebarHidden: false,
    };
  },
  mounted() {
    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
      this.darkMode = true;
      document.documentElement.classList.add("dark");
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkMode", this.darkMode);
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>

<style scoped>
main {
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
