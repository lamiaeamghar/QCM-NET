<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="dashboard-content pt-11 pb-section">
			<div class="container">
				<h1 class="text-[28px] mb-7.5">My Profile</h1>
				<div class="bg-white rounded p-7.5 border border-gallery space-y-3 sm:space-y-1.5">
					<div class="sm:flex font-semibold pr-2.5 leading-[26px] text-light">
						<span class="min-w-[180px] capitalize">Full Name</span>
						<p>{{ instructor.name }}</p>
					</div>
					<div class="sm:flex font-semibold pr-2.5 leading-[26px] text-light">
						<span class="min-w-[180px] capitalize">Phone Number</span>
						<p>{{ instructor.phoneNumber }}</p>
					</div>
					<div class="sm:flex font-semibold pr-2.5 leading-[26px] text-light">
						<span class="min-w-[180px] capitalize">Job Title</span>
						<p>{{ instructor.jobTitle }}</p>
					</div>
					<div class="sm:flex font-semibold pr-2.5 leading-[26px] text-light">
						<span class="min-w-[180px] capitalize">Bio</span>
						<p>Over the course of his career, he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science</p>
					</div>
				</div>
				<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-7.5 mt-7.5">
					<div class="border rounded bg-white border-gallery p-5 lg:px-7.5 lg:py-10 flex">
						<div class="icon w-15 h-15 lg:w-20 lg:h-20 text-2xl lg:text-4xl text-[#4e84fa] bg-[#f4f7ff] border border-[#d3dffe] rounded-full text-center leading-[60px] lg:leading-[80px] flex-shrink-0">
							<i class="edumi edumi-open-book"></i>
						</div>
						<div class="pl-5 lg:pl-12">
							<h2 class="text-2xl md:text-3xl lg:text-[40px]">{{ instructor.enroll }}</h2>
							<p class=" text-light font-semibold">Enrolled Courses</p>
						</div>
					</div>
					<div class="border rounded bg-white border-gallery p-5 lg:px-7.5 lg:py-10 flex">
						<div class="icon w-15 h-15 lg:w-20 lg:h-20 text-2xl lg:text-4xl text-[#ffc221] bg-[#fffcf2] border border-[#ffde89] rounded-full text-center leading-[60px] lg:leading-[80px] flex-shrink-0">
							<i class="edumi edumi-streaming"></i>
						</div>
						<div class="pl-5 lg:pl-12">
							<h2 class="text-2xl md:text-3xl lg:text-[40px]">{{ instructor.activeCourse }}</h2>
							<p class=" text-light font-semibold">Active Courses</p>
						</div>
					</div>
					<div class="border rounded bg-white border-gallery p-5 lg:px-7.5 lg:py-10 flex">
						<div class="icon w-15 h-15 lg:w-20 lg:h-20 text-2xl lg:text-4xl text-[#6cbd7e] bg-[#f6fbf7] border border-[#daeedf] rounded-full text-center leading-[60px] lg:leading-[80px] flex-shrink-0">
							<i class="edumi edumi-correct"></i>
						</div>
						<div class="pl-5 lg:pl-12">
							<h2 class="text-2xl md:text-3xl lg:text-[40px]">{{ instructor.completeCourse }}</h2>
							<p class=" text-light font-semibold">Completed Courses</p>
						</div>
					</div>
					<div class="border rounded bg-white border-gallery p-5 lg:px-7.5 lg:py-10 flex">
						<div class="icon w-15 h-15 lg:w-20 lg:h-20 text-2xl lg:text-4xl text-[#fc8a89] bg-[#fff8f8] border border-[#fdc0c0] rounded-full text-center leading-[60px] lg:leading-[80px] flex-shrink-0">
							<i class="edumi edumi-group"></i>
						</div>
						<div class="pl-5 lg:pl-12">
							<h2 class="text-2xl md:text-3xl lg:text-[40px]">{{ instructor.students }}</h2>
							<p class=" text-light font-semibold">Total Students</p>
						</div>
					</div>
					<div class="border rounded bg-white border-gallery p-5 lg:px-7.5 lg:py-10 flex">
						<div class="icon w-15 h-15 lg:w-20 lg:h-20 text-2xl lg:text-4xl text-[#7f86ff] bg-[#f8f8ff] border border-[#bbbeff] rounded-full text-center leading-[60px] lg:leading-[80px] flex-shrink-0">
							<i class="edumi edumi-user-support"></i>
						</div>
						<div class="pl-5 lg:pl-12">
							<h2 class="text-2xl md:text-3xl lg:text-[40px]">{{ instructor.activeCourse }}</h2>
							<p class=" text-light font-semibold">Total Courses</p>
						</div>
					</div>
					<div class="border rounded bg-white border-gallery p-5 lg:px-7.5 lg:py-10 flex">
						<div class="icon w-15 h-15 lg:w-20 lg:h-20 text-2xl lg:text-4xl text-[#f49263] bg-[#fff9f6] border border-[#f9c5ac] rounded-full text-center leading-[60px] lg:leading-[80px] flex-shrink-0">
							<i class="edumi edumi-star"></i>
						</div>
						<div class="pl-5 lg:pl-12">
							<h2 class="text-2xl md:text-3xl lg:text-[40px]">{{ instructor.reviews }}</h2>
							<p class=" text-light font-semibold">Total Reviews</p>
						</div>
					</div>
				</div>
			</div>
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

	head() {
		return {
			title: "Instructor Profile",
			bodyAttrs: {
				class: "bg-white-800",
			},
		};
	},

	computed: {
		instructor() {
			return this.instructors.find((instructor) => instructor.id === this.slug);
		},
	},
};
</script>