<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <!-- You can uncomment this if you want breadcrumbs -->
    <!-- <BreadcrumbStyleTwo
      active-text="Log In"
      page-title="Log In"
    /> -->
    <Login />
  </div>
</template>

<script>
export default {
  // Disable the default layout
  layout: false,

  // Register components
  components: {
    // Uncomment if using breadcrumbs
    // BreadcrumbStyleTwo: () => import('~/components/elements/BreadcrumbStyleTwo'),
    Login: () => import('~/components/login/Login')
  },

  // Page title
  head() {
    return {
      title: 'Log In'
    }
  }
}
</script>

<style scoped>
/* Optional: minimal styling to center the login component */
.min-h-screen {
  min-height: 100vh;
}
</style>
