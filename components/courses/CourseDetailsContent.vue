<template>
	<div class="py-section">
		<div class="custom-container">
			<div class="grid grid-cols-12">
				<div class="col-span-8">
					<div class="tutor-course-main-segment">
						<div class="tutor-course-segment">
							<h4 class="mb-3">About This Course</h4>
							<div class="desc">
								<p>In this course, I take you from the fundamentals and concepts of data modeling all the way through a number of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly demonstrate the key concepts and techniques covered throughout the course.</p>
								<p>By the end of the course, you’ll be all set to not only put these principles to work, but also to make the key data modeling and design decisions required by the “art” of data modeling that transcend the nuts-and-bolts techniques and design patterns.</p>
							</div>
							<div class="flex mt-4">
								<span class="pr-2"><i class="fas fa-tags"></i></span>
								<div class="space-x-1.5">
									<n-link
										to="/courses"
										class="font-semibold text-light hover:text-primary"
									>
										marketing,
									</n-link>
									<n-link
										to="/courses"
										class="font-semibold text-light hover:text-primary"
									>
										branding,
									</n-link>
									<n-link
										to="/courses"
										class="font-semibold text-light hover:text-primary"
									>
										business
									</n-link>
								</div>
							</div>
						</div>
						<div class="border border-gallery rounded mt-10 px-7.5 py-3">
							<h4 class="mb-3">Learning Objectives</h4>

							<div class="flex flex-wrap -mx-5">
								<div class="w-1/2 px-5 mb-3">
									<div class="pl-7.5 relative">
										<div class="absolute top-0.5 left-0 inline-flex items-center justify-center text-[11px] w-5 h-5 border border-gallery rounded-full text-[#6cbd7e]">
											<i class="far fa-check"></i>
										</div>
										<span class="font-semibold">Ready to begin working on real-world data modeling projects,</span>
									</div>
								</div>
								<div class="w-1/2 px-5 mb-3">
									<div class="pl-7.5 relative">
										<div class="absolute top-0.5 left-0 inline-flex items-center justify-center text-[11px] w-5 h-5 border border-gallery rounded-full text-[#6cbd7e]">
											<i class="far fa-check"></i>
										</div>
										<span class="font-semibold">Expanded responsibilities as part of an existing role</span>
									</div>
								</div>
								<div class="w-1/2 px-5 mb-3">
									<div class="pl-7.5 relative">
										<div class="absolute top-0.5 left-0 inline-flex items-center justify-center text-[11px] w-5 h-5 border border-gallery rounded-full text-[#6cbd7e]">
											<i class="far fa-check"></i>
										</div>
										<span class="font-semibold">Find a new position involving data modeling.</span>
									</div>
								</div>
							</div>
						</div>

						<div class=" mt-11">
							<h4 class="mb-3">Requirements</h4>
							<ul class="tutor-course-segment__list-style-01">
								<li class="relative pl-6 mb-2 last:mb-0 before:absolute before:left-0 before:text-primary before:font-fontAwesome before:content-['\f00c'] before:font-bold">Basic understanding of data management concepts and constructs such as relational database tables</li>
								<li class="relative pl-6 mb-2 last:mb-0 before:absolute before:left-0 before:text-primary before:font-fontAwesome before:content-['\f00c'] before:font-bold">Know how different pieces of data logically relate to one another.</li>
							</ul>
						</div>

						<div class="mt-11">
							<h4 class="mb-3">Target Audience</h4>
							<ul class="pl-5">
								<li class="relative pl-6 before:absolute before:left-0 before:text-heading before:font-fontAwesome before:content-['\f30b'] before:font-bold mb-2 last:mb-0">A business analyst</li>
								<li class="relative pl-6 before:absolute before:left-0 before:text-heading before:font-fontAwesome before:content-['\f30b'] before:font-bold mb-2 last:mb-0">Data engineer, or database designer</li>
							</ul>
						</div>
					</div>

					<div class="course-curriculum pt-10">
						<div class="flex justify-between mb-5">
							<h4>Curriculum</h4>
							<div class="flex space-x-10">
								<div class="lessons">
									<p class="font-semibold text-heading">4 lessons</p>
								</div>
								<div class="duration">
									<p>16h 30m</p>
								</div>
							</div>
						</div>
						<CourseCurriculum />
					</div>
				</div>
				<div class="col-span-4">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		CourseCurriculum: () => import("~/components/courses/CourseCurriculum"),
	},
};
</script>
