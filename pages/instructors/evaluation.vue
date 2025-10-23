<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 px-6 py-10">
    <div class="max-w-7xl mx-auto">

      <!-- Page Title -->
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-800">📊 QCM Evaluations</h1>
        <button
          class="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Refresh Data
        </button>
      </div>

      <!-- Evaluation Table -->
      <div class="bg-white shadow rounded-2xl overflow-hidden border border-gray-200">
        <table class="min-w-full text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 py-3 font-semibold text-gray-600">#</th>
              <th class="px-6 py-3 font-semibold text-gray-600">Student</th>
              <th class="px-6 py-3 font-semibold text-gray-600">QCM Title</th>
              <th class="px-6 py-3 font-semibold text-gray-600">Score</th>
              <th class="px-6 py-3 font-semibold text-gray-600">Status</th>
              <th class="px-6 py-3 font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(evaluation, index) in evaluations"
              :key="index"
              class="border-t hover:bg-gray-50 transition"
            >
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4 font-medium">{{ evaluation.student }}</td>
              <td class="px-6 py-4">{{ evaluation.qcm }}</td>
              <td class="px-6 py-4 font-semibold text-primary">{{ evaluation.score }}/10</td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    'px-3 py-1 rounded-full text-sm font-semibold',
                    evaluation.score >= 5
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700',
                  ]"
                >
                  {{ evaluation.score >= 5 ? 'Passed' : 'Failed' }}
                </span>
              </td>
              <td class="px-6 py-4">
                <button
                  @click="openModal(evaluation)"
                  class="text-primary font-semibold hover:underline"
                >
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal for Details -->
      <div
        v-if="selectedEvaluation"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
          <button
            @click="selectedEvaluation = null"
            class="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
          >
            &times;
          </button>
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Evaluation Details</h2>
          <p><strong>Student:</strong> {{ selectedEvaluation.student }}</p>
          <p><strong>QCM:</strong> {{ selectedEvaluation.qcm }}</p>
          <p><strong>Score:</strong> {{ selectedEvaluation.score }}/10</p>

          <div class="mt-4">
            <label class="block mb-1 font-semibold">Feedback:</label>
            <textarea
              v-model="selectedEvaluation.feedback"
              placeholder="Write feedback for the student..."
              class="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <div class="mt-4 text-right">
            <button
              @click="saveFeedback"
              class="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Save Feedback
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: "InstructorDashboard",
  data() {
    return {
      evaluations: [
        { student: "Ahmed Ali", qcm: "HTML Basics", score: 8, feedback: "" },
        { student: "Fatima Zahra", qcm: "CSS Fundamentals", score: 4, feedback: "" },
        { student: "Omar Hassan", qcm: "JavaScript Intro", score: 9, feedback: "" },
      ],
      selectedEvaluation: null,
    };
  },
  methods: {
    openModal(evaluation) {
      this.selectedEvaluation = { ...evaluation };
    },
    saveFeedback() {
      alert("Feedback saved successfully!");
      this.selectedEvaluation = null;
    },
  },
};
</script>

<style scoped>
.text-primary {
  color: #2563eb;
}
.bg-primary {
  background-color: #2563eb;
}
</style>
