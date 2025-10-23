<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-all"
  >
    ↑
  </button>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.toggleVisible);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.toggleVisible);
  },
  methods: {
    toggleVisible() {
      this.visible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
