<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-10">
      <!-- Welcome Section -->
      <div class="bg-white p-8 rounded-2xl shadow-md mb-10">
        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
          👋 Welcome back, 
          <span class="ml-2 text-primary">{{ instructor ? instructor.name : "Instructor" }}</span>
        </h1>
        <p class="text-gray-500 mt-2">Here's what's happening with your QCMs today.</p>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div class="bg-white rounded-xl shadow p-6 text-center">
          <p class="text-3xl font-semibold text-primary">{{ instructor?.courses || 0 }}</p>
          <p class="text-gray-500">My QCMs</p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 text-center">
          <p class="text-3xl font-semibold text-primary">{{ instructor?.students || 0 }}</p>
          <p class="text-gray-500">Students</p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 text-center">
          <p class="text-3xl font-semibold text-primary">{{ instructor?.evaluations || 0 }}</p>
          <p class="text-gray-500">Evaluations</p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 text-center">
          <p class="text-3xl font-semibold text-primary">{{ instructor?.pending || 0 }}</p>
          <p class="text-gray-500">Pending Reviews</p>
        </div>
      </div>

      <!-- Profile Section -->
      <div class="bg-white p-8 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-4">My Profile</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <p><strong>Full Name:</strong> {{ instructor?.name }}</p>
            <p><strong>Job Title:</strong> {{ instructor?.title }}</p>
          </div>
          <div>
            <p><strong>Phone Number:</strong> {{ instructor?.phone }}</p>
            <p><strong>Bio:</strong> {{ instructor?.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import instructors from "~/data/instructors.json"; // تأكد أن عندك هذا الملف

export default {
  data() {
    return {
      instructor: null,
    };
  },
  mounted() {
    // نقرأ الاسم من الـ URL (مثل /instructors/dashboard?name=Fatima)
    const nameParam = this.$route.query.name;
    if (nameParam) {
      this.instructor = instructors.find(
        (inst) => inst.name.toLowerCase() === nameParam.toLowerCase()
      );
    } else {
      // لو ما في باراميتر نعرض أول مدرس كافتراضي
      this.instructor = instructors[0];
    }
  },
};
</script>

<style scoped>
.text-primary {
  color: #2563eb;
}
</style>
