<template>
  <header
    :class="[
      'w-full transition-all duration-300 shadow-md',
      isSticky
        ? 'fixed top-0 left-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'
        : 'relative bg-white dark:bg-gray-900'
    ]"
  >
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <NuxtLink to="/">
          <img
            src="/images/logo/dark-logo.png"
            alt="Logo"
            class="h-10 w-auto dark:invert"
          />
        </NuxtLink>
        <h1 class="font-semibold text-lg text-gray-800 dark:text-gray-100">
          QCM-NET
        </h1>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
        <NuxtLink
          to="/"
          exact
          class="hover:text-primary transition-colors"
          active-class="text-primary"
        >Home</NuxtLink>

        <NuxtLink
          to="/about"
          class="hover:text-primary transition-colors"
          active-class="text-primary"
        >About</NuxtLink>

        <NuxtLink
          to="/qcm"
          class="hover:text-primary transition-colors"
          active-class="text-primary"
        >QCM</NuxtLink>

        <NuxtLink
          to="/instructors"
          class="hover:text-primary transition-colors"
          active-class="text-primary"
        >instructors</NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center space-x-4">
        <NuxtLink
          to="/login"
          class="hidden md:inline-block text-sm font-semibold text-primary hover:underline"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/register"
          class="hidden md:inline-block text-sm font-semibold bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-all"
        >
          Sign Up
        </NuxtLink>

        <!-- Mobile menu button -->
        <button
          class="md:hidden text-gray-800 dark:text-gray-100"
          @click="toggleMenu"
        >
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
      >
        <div class="flex flex-col items-start space-y-3 py-4 px-6 text-gray-700 dark:text-gray-200">
          <NuxtLink to="/" @click="toggleMenu">Home</NuxtLink>
          <NuxtLink to="/about" @click="toggleMenu">About</NuxtLink>
          <NuxtLink to="/qcm" @click="toggleMenu">QCM</NuxtLink>
          <NuxtLink to="/instructor/dashboard" @click="toggleMenu">Dashboard</NuxtLink>
          <NuxtLink to="/login" @click="toggleMenu">Login</NuxtLink>
          <NuxtLink to="/register" @click="toggleMenu">Sign Up</NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      mobileOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.isSticky = window.scrollY > 60;
    });
  },
  methods: {
    toggleMenu() {
      this.mobileOpen = !this.mobileOpen;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>