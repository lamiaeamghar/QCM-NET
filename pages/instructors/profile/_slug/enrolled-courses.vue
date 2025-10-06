<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="my-courses pt-11 pb-section">
			<div class="container">
				<h1 class="text-[28px] mb-7.5">Enrolled Courses</h1>
				<div class="grid grid-cols-1 gap-5">
					<div class="dashboard-course-item">
						<n-link
							to="/"
							class="block md:flex group p-5 bg-white rounded border border-gallery max-w-[924px]"
						>
							<div class="rounded overflow-hidden w-[260px] h-[160px] flex-shrink-0">
								<img
									src="/images/courses/courses-4.jpg"
									alt="Courses"
									class=" group-hover:scale-110 transition-all duration-500"
								>
							</div>
							<div class="md:pl-7.5 mt-4 md:mt-0 flex-grow">
								<div class="dashboard-course-item__rating">
									<div class="mb-2">
										<StarRating :current="4" />
									</div>
								</div>
								<h5 class="mb-3 group-hover:text-primary">Consulting Approach to Problem Solving</h5>
								<ul class="block xs:flex">
									<li class="mr-7 last:mr-0 font-semibold">
										<span class="text-[#9aa5b3]">Total Lessons:</span>
										<span class="text-heading">6</span>
									</li>
									<li class="mr-7 last:mr-0 text-sm font-semibold">
										<span class="text-[#9aa5b3]">Completed Lessons:</span>
										<span class="text-heading">4/6</span>
									</li>
								</ul>
								<div class="flex items-center mt-5">
									<div class="w-full bg-gray-200 h-1 flex-grow relative before:w-3 before:h-3 before:bg-primary before:content-[''] before:absolute before:left-[70%] before:top-1/2 before:-translate-y-1/2 before:rounded-full">
										<div
											class="bg-primary h-1"
											style="width: 70%"
										></div>
									</div>
									<div class="basis-auto flex-grow-0 flex-shrink-0 pl-7.5 text-[#9aa5b3]">70% Complete</div>
								</div>
							</div>
						</n-link>
					</div>
					<div class="dashboard-course-item">
						<n-link
							to="/"
							class="block md:flex group p-5 bg-white rounded border border-gallery max-w-[924px]"
						>
							<div class="rounded overflow-hidden w-[260px] h-[160px] flex-shrink-0">
								<img
									src="/images/courses/courses-5.jpg"
									alt="Courses"
									class=" group-hover:scale-110 transition-all duration-500"
								>
							</div>
							<div class="md:pl-7.5 mt-4 md:mt-0 flex-grow">
								<div class="dashboard-course-item__rating">
									<div class="mb-2">
										<StarRating />
									</div>
								</div>
								<h5 class="mb-3 group-hover:text-primary">Essential Digital Tools for Student Engagement</h5>
								<ul class="block xs:flex">
									<li class="mr-7 last:mr-0 font-semibold">
										<span class="text-[#9aa5b3]">Total Lessons:</span>
										<span class="text-heading">6</span>
									</li>
									<li class="mr-7 last:mr-0 text-sm font-semibold">
										<span class="text-[#9aa5b3]">Completed Lessons:</span>
										<span class="text-heading">6/6</span>
									</li>
								</ul>
								<div class="flex items-center mt-5">
									<div class="w-full bg-gray-200 h-1 flex-grow relative before:w-3 before:h-3 before:bg-primary before:content-[''] before:absolute before:left-[100%] before:top-1/2 before:-translate-y-1/2 before:rounded-full">
										<div
											class="bg-primary h-1"
											style="width: 100%"
										></div>
									</div>
									<div class="basis-auto flex-grow-0 flex-shrink-0 pl-7.5 text-[#9aa5b3]">100% Complete</div>
								</div>
							</div>
						</n-link>
					</div>
					<div class="dashboard-course-item">
						<n-link
							to="/"
							class="block md:flex group p-5 bg-white rounded border border-gallery max-w-[924px]"
						>
							<div class="rounded overflow-hidden w-[260px] h-[160px] flex-shrink-0">
								<img
									src="/images/courses/courses-6.jpg"
									alt="Courses"
									class=" group-hover:scale-110 transition-all duration-500"
								>
							</div>
							<div class="md:pl-7.5 mt-4 md:mt-0 flex-grow">
								<div class="dashboard-course-item__rating">
									<div class="mb-2">
										<StarRating :current="4" />
									</div>
								</div>
								<h5 class="mb-3 group-hover:text-primary">Mental Health: Change your Brain</h5>
								<ul class="block xs:flex">
									<li class="mr-7 last:mr-0 font-semibold">
										<span class="text-[#9aa5b3]">Total Lessons:</span>
										<span class="text-heading">10</span>
									</li>
									<li class="mr-7 last:mr-0 text-sm font-semibold">
										<span class="text-[#9aa5b3]">Completed Lessons:</span>
										<span class="text-heading">5/10</span>
									</li>
								</ul>
								<div class="flex items-center mt-5">
									<div class="w-full bg-gray-200 h-1 flex-grow relative before:w-3 before:h-3 before:bg-primary before:content-[''] before:absolute before:left-[50%] before:top-1/2 before:-translate-y-1/2 before:rounded-full">
										<div
											class="bg-primary h-1"
											style="width: 50%"
										></div>
									</div>
									<div class="basis-auto flex-grow-0 flex-shrink-0 pl-7.5 text-[#9aa5b3]">50% Complete</div>
								</div>
							</div>
						</n-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		StarRating: () => import("~/components/elements/StarRating"),
	},
	layout: "InstructorDashboard",

	head() {
		return {
			title: "Dashboard",
			bodyAttrs: {
				class: "bg-white-800",
			},
		};
	},
};
</script>