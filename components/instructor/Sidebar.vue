<template>
  <aside
    class="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between transition-all duration-300"
  >
    <!-- Logo -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
      <img
        src="/images/logo/dark-logo.png"
        alt="Logo"
        class="h-10 w-auto dark:invert"
      />
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-100">QCM-NET</h2>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center space-x-3 py-2.5 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all"
        active-class="bg-primary/20 text-primary font-semibold"
      >
        <i :class="item.icon" class="w-5 text-lg"></i>
        <span>{{ item.label }}</span>
      </NuxtLink>
    </nav>

    <!-- Bottom (Logout) -->
    <div class="p-6 border-t border-gray-200 dark:border-gray-700">
      <button
        @click="logout"
        class="w-full flex items-center justify-center space-x-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-2 rounded-lg transition-all"
      >
        <i class="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Dashboard", to: "/instructors/dashboard", icon: "fas fa-home" },
        { label: "My QCMs", to: "/instructors/qcms", icon: "fas fa-list" },
        { label: "Create QCM", to: "/instructors/create-qcm", icon: "fas fa-plus-circle" },
        { label: "Results", to: "/instructors/results", icon: "fas fa-chart-bar" },
        { label: "Settings", to: "/instructors/settings", icon: "fas fa-cog" },
      ],
    };
  },
  methods: {
    logout() {
      alert("Logging out... (replace with actual logout logic)");
      // لاحقًا ستربطه بـ API أو Auth logic
    },
  },
};
</script>

<style scoped>
aside {
  scrollbar-width: thin;
  scrollbar-color: #a0aec0 transparent;
}
aside::-webkit-scrollbar {
  width: 6px;
}
aside::-webkit-scrollbar-thumb {
  background-color: #a0aec0;
  border-radius: 3px;
}
</style>
