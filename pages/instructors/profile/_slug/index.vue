<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 ml-0">
    <div class="max-w-7xl mx-auto px-6 py-10 space-y-10">

      <!-- Welcome Section -->
      <section class="bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-2xl p-8 shadow-md">
        <h1 class="text-3xl font-bold mb-2">
          👋 HI, {{ instructor.name }}
        </h1>
        <p class="text-sm opacity-90">
          Here’s an overview of your teaching activity on QCM-NET.
        </p>
      </section>

      <!-- Profile Info -->
      <section class="bg-white rounded-2xl shadow border border-gray-200 p-8">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">My Profile</h2>
        <div class="grid sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p><strong>Full Name:</strong> {{ instructor.name }}</p>
            <p><strong>Job Title:</strong> {{ instructor.jobTitle }}</p>
          </div>
          <div>
            <p><strong>Phone Number:</strong> {{ instructor.phoneNumber }}</p>
            <p><strong>Bio:</strong> {{ instructor.bio }}</p>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="bg-white shadow rounded-xl p-6 border border-gray-200 flex items-center hover:shadow-lg transition-all"
        >
          <div
            class="icon w-16 h-16 text-3xl text-primary flex items-center justify-center rounded-full bg-blue-50 mr-5"
          >
            <i :class="stat.icon"></i>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gray-800">{{ stat.value }}</h3>
            <p class="text-gray-500 font-medium">{{ stat.label }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import instructors from "~/data/instructors.json";

export default {
  layout: "InstructorDashboard",
  data() {
    return {
      instructors,
      slug: this.$route.params.slug,
    };
  },
  computed: {
    instructor() {
      return this.instructors.find((instructor) => instructor.id === this.slug);
    },
    stats() {
      if (!this.instructor) return [];
      return [
        {
          label: "My QCMs",
          value: this.instructor.enroll,
          icon: "fas fa-book",
        },
        {
          label: "Active Courses",
          value: this.instructor.activeCourse,
          icon: "fas fa-play-circle",
        },
        {
          label: "Completed Courses",
          value: this.instructor.completeCourse,
          icon: "fas fa-check-circle",
        },
        {
          label: "Total Students",
          value: this.instructor.students,
          icon: "fas fa-user-graduate",
        },
        {
          label: "Total Courses",
          value: this.instructor.activeCourse,
          icon: "fas fa-chalkboard-teacher",
        },
        {
          label: "Pending Reviews",
          value: this.instructor.reviews,
          icon: "fas fa-star",
        },
      ];
    },
  },
};
</script>

<style scoped>
.text-primary {
  color: #2563eb;
}
</style>
