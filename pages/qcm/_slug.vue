<template>
	<div class="qcm-assessment">
		<!-- Header Section -->
		<div class="bg-[#f5f7fd] py-8">
			<div class="custom-container">
				<div class="flex justify-between items-center">
					<div>
						<n-link to="/courses" class="text-primary hover:text-secondary mb-2 inline-block">
							<i class="fas fa-arrow-left mr-2"></i>Back to Courses
						</n-link>
						<h1 class="text-2xl sm:text-3xl font-bold">{{ course.title }} - Assessment</h1>
						<p class="text-gray-600 mt-2">Test your knowledge with this interactive QCM</p>
					</div>
					<div class="text-right">
						<div class="text-lg font-semibold" :class="timeClass">
							Time: {{ formattedTime }}
						</div>
						<div class="text-sm text-gray-600">
							Question {{ currentQuestion + 1 }} of {{ questions.length }}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Progress Bar -->
		<div class="bg-white border-b">
			<div class="custom-container">
				<div class="h-2 bg-gray-200 rounded-full">
					<div 
						class="h-full bg-primary rounded-full transition-all duration-300"
						:style="{ width: `${progress}%` }"
					></div>
				</div>
			</div>
		</div>

		<!-- Main Content -->
		<div class="custom-container py-8">
			<div class="grid grid-cols-12 gap-8">
				<!-- Questions Section -->
				<div class="col-span-12 lg:col-span-8">
					<div class="bg-white rounded-lg shadow-lg p-6" v-if="!assessmentCompleted">
						<!-- Question -->
						<div class="mb-6">
							<h3 class="text-xl font-semibold mb-4">
								{{ currentQuestionData.question }}
							</h3>
							<div v-if="currentQuestionData.image" class="mb-4">
								<img 
									:src="currentQuestionData.image" 
									:alt="'Question ' + (currentQuestion + 1)"
									class="max-w-full rounded-lg"
								>
							</div>
						</div>

						<!-- Options -->
						<div class="space-y-3">
							<div
								v-for="(option, index) in currentQuestionData.options"
								:key="index"
								class="p-4 border rounded-lg cursor-pointer transition-all duration-200"
								:class="getOptionClass(index)"
								@click="selectOption(index)"
							>
								<div class="flex items-center">
									<div class="w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3"
										:class="getOptionCircleClass(index)">
										<span class="text-sm font-semibold">{{ String.fromCharCode(65 + index) }}</span>
									</div>
									<span class="flex-1">{{ option.text }}</span>
								</div>
							</div>
						</div>

						<!-- Navigation -->
						<div class="flex justify-between mt-8 pt-6 border-t">
							<button
								@click="previousQuestion"
								:disabled="currentQuestion === 0"
								class="px-6 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
							>
								Previous
							</button>
							
							<button
								v-if="currentQuestion < questions.length - 1"
								@click="nextQuestion"
								:disabled="!selectedAnswers[currentQuestion]"
								class="px-6 py-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary"
							>
								Next Question
							</button>
							
							<button
								v-else
								@click="completeAssessment"
								:disabled="!selectedAnswers[currentQuestion]"
								class="px-6 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700"
							>
								Finish Assessment
							</button>
						</div>
					</div>

					<!-- Results Section -->
					<div v-else class="bg-white rounded-lg shadow-lg p-8 text-center">
						<div class="mb-6">
							<div class="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
								:class="score >= passingScore ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'">
								<i class="fas fa-trophy text-3xl"></i>
							</div>
							<h2 class="text-2xl font-bold mb-2">Assessment Complete!</h2>
							<p class="text-gray-600">Your results are ready</p>
						</div>

						<!-- Score Circle -->
						<div class="relative inline-block mb-6">
							<svg class="w-32 h-32 transform -rotate-90">
								<circle
									cx="64"
									cy="64"
									:r="56"
									stroke="#e5e7eb"
									stroke-width="8"
									fill="none"
								/>
								<circle
									cx="64"
									cy="64"
									:r="56"
									:stroke="score >= passingScore ? '#10b981' : '#ef4444'"
									stroke-width="8"
									fill="none"
									:stroke-dasharray="circumference"
									:stroke-dashoffset="strokeDashoffset"
									stroke-linecap="round"
								/>
							</svg>
							<div class="absolute inset-0 flex flex-col items-center justify-center">
								<span class="text-2xl font-bold">{{ score }}%</span>
								<span class="text-sm text-gray-600">Score</span>
							</div>
						</div>

						<!-- Results Details -->
						<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
							<div class="bg-gray-50 p-4 rounded-lg">
								<div class="text-2xl font-bold text-green-600">{{ correctAnswers }}</div>
								<div class="text-sm text-gray-600">Correct</div>
							</div>
							<div class="bg-gray-50 p-4 rounded-lg">
								<div class="text-2xl font-bold text-red-600">{{ incorrectAnswers }}</div>
								<div class="text-sm text-gray-600">Incorrect</div>
							</div>
							<div class="bg-gray-50 p-4 rounded-lg">
								<div class="text-2xl font-bold text-blue-600">{{ questions.length }}</div>
								<div class="text-sm text-gray-600">Total Questions</div>
							</div>
						</div>

						<!-- Pass/Fail Message -->
						<div class="mb-6 p-4 rounded-lg" :class="score >= passingScore ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'">
							<h3 class="font-semibold text-lg mb-2">
								{{ score >= passingScore ? '🎉 Congratulations!' : '😔 Keep Practicing!' }}
							</h3>
							<p>
								{{ score >= passingScore 
									? `You passed the assessment with ${score}%! You've demonstrated a good understanding of the course material.`
									: `You scored ${score}%. You need ${passingScore}% to pass. Review the course material and try again.`
								}}
							</p>
						</div>

						<!-- Action Buttons -->
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								@click="reviewAnswers"
								class="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white"
							>
								Review Answers
							</button>
							<button
								@click="retakeAssessment"
								class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary"
							>
								Retake Assessment
							</button>
							<n-link
								:to="`/courses`"
								class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-center"
							>
								Back to Courses
							</n-link>
						</div>
					</div>
				</div>

				<!-- Sidebar -->
				<div class="col-span-12 lg:col-span-4">
					<!-- Question Navigation -->
					<div class="bg-white rounded-lg shadow-lg p-6 mb-6">
						<h4 class="font-semibold mb-4">Question Navigation</h4>
						<div class="grid grid-cols-5 gap-2">
							<div
								v-for="(question, index) in questions"
								:key="index"
								@click="goToQuestion(index)"
								class="aspect-square rounded border-2 flex items-center justify-center cursor-pointer transition-all"
								:class="getQuestionNavClass(index)"
							>
								{{ index + 1 }}
							</div>
						</div>
					</div>

					<!-- Assessment Info -->
					<div class="bg-white rounded-lg shadow-lg p-6">
						<h4 class="font-semibold mb-4">Assessment Info</h4>
						<ul class="space-y-3">
							<li class="flex justify-between">
								<span class="text-gray-600">Total Questions:</span>
								<span class="font-semibold">{{ questions.length }}</span>
							</li>
							<li class="flex justify-between">
								<span class="text-gray-600">Time Limit:</span>
								<span class="font-semibold">{{ timeLimit }} minutes</span>
							</li>
							<li class="flex justify-between">
								<span class="text-gray-600">Passing Score:</span>
								<span class="font-semibold">{{ passingScore }}%</span>
							</li>
							<li class="flex justify-between">
								<span class="text-gray-600">Your Score:</span>
								<span class="font-semibold" :class="score >= passingScore ? 'text-green-600' : 'text-red-600'">
									{{ assessmentCompleted ? score + '%' : '--' }}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import courses from "~/data/courses.json";

// Sample QCM data - you can move this to a separate file
const sampleQuestions = {
  "data-modeling-fundamentals": [
    {
      id: 1,
      question: "What is the primary purpose of data modeling?",
      options: [
        { text: "To create database tables", correct: false },
        { text: "To represent data requirements and structure", correct: true },
        { text: "To optimize query performance", correct: false },
        { text: "To document business processes", correct: false }
      ],
      explanation: "Data modeling primarily focuses on representing data requirements and structure in a way that supports business processes."
    },
    {
      id: 2,
      question: "Which of the following is NOT a type of data model?",
      options: [
        { text: "Conceptual model", correct: false },
        { text: "Logical model", correct: false },
        { text: "Physical model", correct: false },
        { text: "Operational model", correct: true }
      ],
      explanation: "The three main types of data models are conceptual, logical, and physical. Operational model is not a standard type."
    },
    {
      id: 3,
      question: "In a relational database, what is a foreign key?",
      options: [
        { text: "A key that uniquely identifies each record", correct: false },
        { text: "A key that references the primary key of another table", correct: true },
        { text: "A key that is used for encryption", correct: false },
        { text: "A key that is automatically generated", correct: false }
      ],
      explanation: "A foreign key establishes a relationship between two tables by referencing the primary key of another table."
    },
    {
      id: 4,
      question: "What does normalization in database design aim to achieve?",
      options: [
        { text: "Increase data redundancy", correct: false },
        { text: "Improve data integrity and reduce redundancy", correct: true },
        { text: "Speed up query performance", correct: false },
        { text: "Simplify database backup procedures", correct: false }
      ],
      explanation: "Normalization reduces data redundancy and improves data integrity by organizing data efficiently."
    },
    {
      id: 5,
      question: "Which SQL command is used to retrieve data from a database?",
      options: [
        { text: "GET", correct: false },
        { text: "SELECT", correct: true },
        { text: "RETRIEVE", correct: false },
        { text: "FETCH", correct: false }
      ],
      explanation: "The SELECT command is used in SQL to retrieve data from one or more tables."
    }
  ]
};

export default {
  data() {
    return {
      course: {},
      questions: [],
      currentQuestion: 0,
      selectedAnswers: {},
      assessmentCompleted: false,
      score: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      timeLimit: 30, // 30 minutes
      timeRemaining: 30 * 60, // in seconds
      timer: null,
      passingScore: 70
    };
  },

  computed: {
    currentQuestionData() {
      return this.questions[this.currentQuestion];
    },
    
    progress() {
      return ((this.currentQuestion + 1) / this.questions.length) * 100;
    },
    
    formattedTime() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
    
    timeClass() {
      if (this.timeRemaining < 300) { // 5 minutes
        return 'text-red-600';
      } else if (this.timeRemaining < 600) { // 10 minutes
        return 'text-orange-600';
      }
      return 'text-gray-700';
    },
    
    circumference() {
      return 2 * Math.PI * 56;
    },
    
    strokeDashoffset() {
      return this.circumference - (this.score / 100) * this.circumference;
    }
  },

  async asyncData({ params, error }) {
    try {
      const course = courses.find(c => c.slug === params.slug);
      if (!course) {
        return error({ statusCode: 404, message: 'Course not found' });
      }

	// Get questions for this course - in real app, fetch from API
	// Wrap in Promise.resolve so we can await here even with local sample data
	const questions = await Promise.resolve(sampleQuestions[params.slug] || sampleQuestions['data-modeling-fundamentals']);

      return {
        course,
        questions
      };
    } catch (err) {
      error({ statusCode: 500, message: 'Error loading assessment' });
    }
  },

  mounted() {
    this.startTimer();
  },

  beforeDestroy() {
    this.clearTimer();
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeRemaining > 0 && !this.assessmentCompleted) {
          this.timeRemaining--;
        } else if (this.timeRemaining === 0 && !this.assessmentCompleted) {
          this.completeAssessment();
        }
      }, 1000);
    },

    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },

    selectOption(optionIndex) {
      this.$set(this.selectedAnswers, this.currentQuestion, optionIndex);
    },

    getOptionClass(optionIndex) {
      if (this.selectedAnswers[this.currentQuestion] === optionIndex) {
        return 'border-primary bg-blue-50';
      }
      return 'border-gray-200 hover:border-primary hover:bg-blue-50';
    },

    getOptionCircleClass(optionIndex) {
      if (this.selectedAnswers[this.currentQuestion] === optionIndex) {
        return 'border-primary bg-primary text-white';
      }
      return 'border-gray-300 bg-white';
    },

    getQuestionNavClass(index) {
      if (this.assessmentCompleted) {
        const isCorrect = this.questions[index].options[this.selectedAnswers[index]]?.correct;
        return isCorrect ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700';
      }
      
      if (index === this.currentQuestion) {
        return 'border-primary bg-primary text-white';
      }
      
      if (this.selectedAnswers[index] !== undefined) {
        return 'border-green-500 bg-green-50 text-green-700';
      }
      
      return 'border-gray-300 hover:border-primary';
    },

    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      }
    },

    previousQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },

    goToQuestion(index) {
      this.currentQuestion = index;
    },

    completeAssessment() {
      this.clearTimer();
      this.calculateScore();
      this.assessmentCompleted = true;
    },

    calculateScore() {
      let correct = 0;
      this.questions.forEach((question, index) => {
        const selectedOptionIndex = this.selectedAnswers[index];
        if (selectedOptionIndex !== undefined && question.options[selectedOptionIndex].correct) {
          correct++;
        }
      });
      
      this.correctAnswers = correct;
      this.incorrectAnswers = this.questions.length - correct;
      this.score = Math.round((correct / this.questions.length) * 100);
    },

    reviewAnswers() {
      this.currentQuestion = 0;
      this.assessmentCompleted = false;
    },

    retakeAssessment() {
      this.selectedAnswers = {};
      this.currentQuestion = 0;
      this.assessmentCompleted = false;
      this.score = 0;
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.timeRemaining = this.timeLimit * 60;
      this.startTimer();
    }
  }
};
</script>

<style scoped>
/* Custom styles for the circular progress */
circle {
  transition: stroke-dashoffset 1s ease;
}
</style>