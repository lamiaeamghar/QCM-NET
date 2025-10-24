<template>
	<div class="course-details">
		<CourseDetailsBreadcrumb
			url="/courses"
			url-text="Courses"
			:page-title="course.title"
		/>
		<div class="bg-[#f5f7fd] py-section">
			<div class="custom-container">
				<div class="grid grid-cols-12">
					<div class="col-span-12 lg:col-span-8">
						<div class="max-w-[600px]">
							<div class="mb-6">
								<span class="bg-primary text-white text-[11px] font-bold px-2 py-1 rounded-sm mr-4">-39%</span>
								<n-link
									:to="`/course-category/${course.categories.slug}`"
									class="text-primary font-semibold capitalize"
								>{{ course.categories.name }}</n-link>
							</div>
							<h1 class="text-2xl sm:text-[32px]">{{ course.title }}</h1>
							<div class="xs:flex items-center mt-5">
								<div class="flex items-center">
									<div class="border-2 border-white rounded-full overflow-hidden w-[38px] h-[38px]">
										<img
											:src="instructor.thumbnail"
											:alt="instructor.name"
											width="36"
											height="36"
										>
									</div>
									<div class="font-bold text-heading capitalize pl-2.5">{{ instructor.name }}</div>
								</div>
								<div class="xs:pl-4 xs:ml-4 mt-3 xs:mt-0 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[22px] before:bg-[#d9dee3] before:hidden xs:before:block">Last Update: {{ course.update }}</div>
							</div>
							<div class="mt-4 flex">
								<div class="flex items-center">
									<div class="mr-3">
										<span class="text-normal font-bold text-heading">{{ course.rating }}</span>
										<span class="text-normal font-semibold text-heading">/5</span>
									</div>
									<star-rating :current="course.rating"></star-rating>
								</div>
								<div class="text-[13px] text-[#7e7e7e] font-semibold pl-4 ml-2 relative before:absolute before:contents-[] before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[22px] before:bg-[#d9dee3]">
									<i class="fas fa-user-alt mr-2.5"></i>
									{{ course.enroll }} already enrolled
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="py-section">
			<div class="custom-container">
				<div class="grid grid-cols-12 gap-7.5 lg:gap-15">
					<div class="col-span-12 lg:col-span-8">
						<div class="about-course-wrapper">
							<div class="about-course">
								<h4 class="mb-3 -mt-2">About This Course</h4>
								<div class="desc">
									<p>In this course, I take you from the fundamentals and concepts of data modeling all the way through a number of best practices and techniques that you'll need to build data models in your organization. You'll find many examples that clearly demonstrate the key concepts and techniques covered throughout the course.</p>
									<p>By the end of the course, you'll be all set to not only put these principles to work, but also to make the key data modeling and design decisions required by the "art" of data modeling that transcend the nuts-and-bolts techniques and design patterns.</p>
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
							<div class="border border-gallery rounded mt-10 px-5 sm:px-7.5 py-3">
								<h4 class="mb-3">Learning Objectives</h4>

								<div class="flex flex-wrap -mx-5">
									<div class="sm:w-1/2 px-5 mb-3">
										<div class="pl-7.5 relative">
											<div class="absolute top-0.5 left-0 inline-flex items-center justify-center text-[11px] w-5 h-5 border border-gallery rounded-full text-[#6cbd7e]">
												<i class="fas fa-check"></i>
											</div>
											<span class="font-semibold">Ready to begin working on real-world data modeling projects,</span>
										</div>
									</div>
									<div class="sm:w-1/2 px-5 mb-3">
										<div class="pl-7.5 relative">
											<div class="absolute top-0.5 left-0 inline-flex items-center justify-center text-[11px] w-5 h-5 border border-gallery rounded-full text-[#6cbd7e]">
												<i class="fas fa-check"></i>
											</div>
											<span class="font-semibold">Expanded responsibilities as part of an existing role</span>
										</div>
									</div>
									<div class="sm:w-1/2 px-5 mb-3">
										<div class="pl-7.5 relative">
											<div class="absolute top-0.5 left-0 inline-flex items-center justify-center text-[11px] w-5 h-5 border border-gallery rounded-full text-[#6cbd7e]">
												<i class="fas fa-check"></i>
											</div>
											<span class="font-semibold">Find a new position involving data modeling.</span>
										</div>
									</div>
								</div>
							</div>

							<div class="mt-11">
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

						<div class="instructor-info pt-10">
							<h4 class="mb-5">Your Instructors</h4>
							<InstructorInfoStyleOne :instructor="instructor" />
						</div>

						<div class="student-feedback pt-10">
							<h4 class="mb-5">Student Feedback</h4>

							<div class="xs:flex items-center">
								<div class="w-[200px] h-[190px] p-5 flex-shrink-0 bg-white shadow-[0_0_20px_rgba(51,51,51,0.10)] flex justify-center items-center flex-col mr-5 sm:mr-7.5">
									<div class="text-[40px] text-primary font-semibold">{{ course.rating.toFixed(1) }}</div>
									<div class="reviews-rating-star">
										<star-rating :current="course.rating"></star-rating>
									</div>
									<div class="text-light mt-2">{{ course.review }} Ratings</div>
								</div>
								<div class="flex-grow mt-5 xs:mt-0">
									<div class="flex items-center mb-2">
										<div class="pr-2.5">
											<star-rating :current="5"></star-rating>
										</div>
										<div class="bg-gray-200 h-1.5 flex-grow rounded-3xl overflow-hidden">
											<div
												class="bg-primary h-full"
												style="width: 70%"
											></div>
										</div>
										<div class="basis-auto flex-grow-0 flex-shrink-0 pl-5">75%</div>
									</div>
									<div class="flex items-center mb-2">
										<div class="pr-2.5">
											<star-rating :current="4"></star-rating>
										</div>
										<div class="bg-gray-200 h-1.5 flex-grow rounded-3xl overflow-hidden">
											<div
												class="bg-primary h-full"
												style="width: 25%"
											></div>
										</div>
										<div class="basis-auto flex-grow-0 flex-shrink-0 pl-5">25%</div>
									</div>
									<div class="flex items-center mb-2">
										<div class="pr-2.5">
											<star-rating :current="3"></star-rating>
										</div>
										<div class="bg-gray-200 h-1.5 flex-grow rounded-3xl overflow-hidden">
											<div
												class="bg-primary h-full"
												style="width: 15%"
											></div>
										</div>
										<div class="basis-auto flex-grow-0 flex-shrink-0 pl-5">15%</div>
									</div>
									<div class="flex items-center mb-2">
										<div class="pr-2.5">
											<star-rating :current="2"></star-rating>
										</div>
										<div class="bg-gray-200 h-1.5 flex-grow rounded-3xl overflow-hidden">
											<div
												class="bg-primary h-full"
												style="width: 0%"
											></div>
										</div>
										<div class="basis-auto flex-grow-0 flex-shrink-0 pl-5">0%</div>
									</div>
									<div class="flex items-center mb-2">
										<div class="pr-2.5">
											<star-rating :current="1"></star-rating>
										</div>
										<div class="bg-gray-200 h-1.5 flex-grow rounded-3xl overflow-hidden">
											<div
												class="bg-primary h-full"
												style="width: 10%"
											></div>
										</div>
										<div class="basis-auto flex-grow-0 flex-shrink-0 pl-5">10%</div>
									</div>
								</div>
							</div>
						</div>

						<div class="review-form pt-12">
							<h4 class="mb-5">Write a review</h4>
							<!-- <button
								class="text-base text-white px-10 py-4 font-semibold bg-primary rounded inline-block hover:text-heading hover:bg-secondary"
								@click="openForm = !openForm"
							>Write a review</button> -->
							<ContactFormOne
								v-if="openForm"
								:has-saved="true"
								class="mt-1"
							/>
						</div>
					</div>
					<div class="col-span-12 lg:col-span-4">
						<div class="lg:-translate-y-96">
							<div class="rounded border bg-white border-gallery shadow-[0_0_30px_rgba(0,0,0,0.05)] overflow-hidden mt-7.5 lg:mt-0">
								<div class="">
									<iframe
										src="https://www.youtube.com/embed/z_9Z9VWhaEQ?modestbranding=1"
										title="YouTube video"
										allowfullscreen
										class="w-full aspect-video"
									></iframe>
								</div>
								<div class="p-7 5">
									<h2
										v-if="course.price.toFixed(2) > 0"
										class="text-4xl font-bold mb-3"
									>${{ course.price.toFixed(2) }}</h2>
									<h2
										v-else
										class="text-4xl text-[#7e7e7e] font-bold mb-3"
									>Free</h2>
									<ul class="mt-5">
										<li class="flex justify-between items-center border-b border-gallery pb-3.5 last:pb-0 mb-3.5 last:mb-0 last:border-none">
											<div class="font-semibold">
												<span class="pr-1 text-light">
													<i class="fas fa-sliders-h"></i>
												</span>
												Level:
											</div>
											<span class="capitalize">{{ course.levels.name }}</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-3.5 last:pb-0 mb-3.5 last:mb-0 last:border-none">
											<div class="font-semibold">
												<span class="pr-1 text-light">
													<i class="fas fa-clock"></i>
												</span>
												Duration:
											</div>
											<span class="meta-value">{{ course.duration }} hours</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-3.5 last:pb-0 mb-3.5 last:mb-0 last:border-none">
											<div class="font-semibold">
												<span class="pr-1 text-light">
													<i class="fas fa-play-circle"></i>
												</span>
												Lectures:
											</div>
											<span class="meta-value">{{ course.lessons }} lectures</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-3.5 last:pb-0 mb-3.5 last:mb-0 last:border-none">
											<div class="font-semibold">
												<span class="pr-1 text-light">
													<i class="fas fa-tag"></i>
												</span>
												Subject:
											</div>
											<span class="capitalize">{{ course.categories.name }}</span>
										</li>
										<li class="flex justify-between items-center border-b border-gallery pb-3.5 last:pb-0 mb-3.5 last:mb-0 last:border-none">
											<div class="font-semibold">
												<span class="pr-1 text-light">
													<i class="fas fa-globe"></i>
												</span>
												Languages:
											</div>
											<span class="capitalize">{{ course.languages.name }}</span>
										</li>
									</ul>

									<h4 class="mt-6">Material Includes</h4>
									<ul class="mt-4 mb-4">
										<li class="relative pl-6 mb-2 last:mb-0 before:absolute before:left-0 before:text-primary before:font-fontAwesome before:content-['\f00c'] before:font-bold">Videos</li>
										<li class="relative pl-6 mb-2 last:mb-0 before:absolute before:left-0 before:text-primary before:font-fontAwesome before:content-['\f00c'] before:font-bold">Booklets</li>
										<li class="relative pl-6 mb-2 last:mb-0 before:absolute before:left-0 before:text-primary before:font-fontAwesome before:content-['\f00c'] before:font-bold">Interactive QCM</li>
									</ul>
									
									<!-- Start QCM Button -->
									<button
										class="text-base w-full text-white px-4 py-4 font-semibold bg-primary rounded hover:text-heading hover:bg-secondary"
										@click="startQCM"
									>
										<span class="pr-2">
											<i class="fas fa-play-circle"></i>
										</span>
										Start QCM Assessment
									</button>
									
									<button
										class="text-base w-full text-primary px-12 py-4 font-semibold bg-white-500 rounded hover:text-white hover:bg-primary mt-3"
										@click="addToWishlist"
									>
										<span class="pr-2">
											<i class="fas fa-bookmark"></i>
										</span>
										Save for Later
									</button>

									<div class="mt-6 text-center">
										<a
											href="https://twitter.com/"
											target="_blank"
											class="text-xl text-[#9aa5b3] inline-block text-center mr-6 last:mr-0 hover:text-primary"
										><i class="fab fa-twitter"></i>
										</a>
										<a
											href="https://www.facebook.com/"
											target="_blank"
											class="text-xl text-[#9aa5b3] inline-block text-center mr-6 last:mr-0 hover:text-primary"
										><i class="fab fa-facebook-f"></i>
										</a>
										<a
											href="https://www.skype.com/"
											target="_blank"
											class="text-xl text-[#9aa5b3] inline-block text-center mr-6 last:mr-0 hover:text-primary"
										><i class="fab fa-skype"></i>
										</a>
										<a
											href="https://www.linkedin.com/"
											target="_blank"
											class="text-xl text-[#9aa5b3] inline-block text-center mr-6 last:mr-0 hover:text-primary"
										><i class="fab fa-linkedin-in"></i>
										</a>
									</div>
								</div>
							</div>

							<div class="p-7.5 rounded border bg-white border-gallery mt-7.5">
								<h4 class="mb-4">Course Categories</h4>
								<ul>
									<li
										v-for="(category, i) in allCategories"
										:key="i"
									>
										<n-link
											:to="`/course-category/${category.slug}`"
											class="font-semibold capitalize block py-1.5 hover:text-primary"
										>{{ category.name }}</n-link>
									</li>
								</ul>
							</div>
							<div class="p-7.5 rounded border bg-white border-gallery mt-7.5">
								<h4 class="mb-5">Related Courses</h4>
								<RelatedCourse
									v-for="(item, i) in courses.slice(0, 4)"
									:key="i"
									:course="item"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Modal
			v-show="isModalVisible"
			@close="isModalVisible = !isModalVisible"
		>
			<template #header>
				<h2 class="text-xl">Start QCM Assessment</h2>
			</template>

			<template #body>
				<div class="text-center">
					<div class="text-primary text-[80px] mb-3">
						<i class="fas fa-file-alt"></i>
					</div>
					<h6 class="mb-2">Ready to begin your assessment?</h6>
					<p>This QCM will test your understanding of the course material. You'll have <strong>{{ course.duration }} minutes</strong> to complete it.</p>
					<div class="mt-4 p-4 bg-gray-50 rounded">
						<h6 class="font-semibold mb-2">Assessment Details:</h6>
						<ul class="text-sm text-left">
							<li class="mb-1">• Multiple choice questions</li>
							<li class="mb-1">• Immediate feedback</li>
							<li class="mb-1">• Score tracking</li>
							<li>• Certificate upon completion</li>
						</ul>
					</div>
				</div>
			</template>
			<template #footer>
				<div class="flex justify-center space-x-4">
					<button
						class="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
						@click="isModalVisible = false"
					>
						Cancel
					</button>
					<button
						class="px-6 py-2 bg-primary text-white rounded hover:bg-secondary"
						@click="confirmStartQCM"
					>
						Start Assessment
					</button>
				</div>
			</template>
		</Modal>
	</div>
</template>

<script>
import courses from "~/data/courses.json";
import instructors from "~/data/instructors.json";

export default {
	components: {
		CourseDetailsBreadcrumb: () => import("~/components/courses/CourseDetailsBreadcrumb"),
		CourseCurriculum: () => import("~/components/courses/CourseCurriculum"),
		RelatedCourse: () => import("~/components/courses/sidebar/RelatedCourse"),
		StarRating: () => import("~/components/elements/StarRating"),
		ContactFormOne: () => import("~/components/contact/ContactFormOne"),
		Modal: () => import("~/components/elements/Modal"),
	},

	data() {
		return {
			courses,
			instructors,
			slug: this.$route.params.slug,
			openForm: true,
			isModalVisible: false,
		};
	},

	computed: {
		course() {
			return this.courses.find((course) => course.slug === this.slug);
		},
		instructor() {
			return this.instructors.find((instructor) => instructor.id === this.course.instructor.id);
		},
		allCategories() {
			const categories = this.courses.map((el) => el.categories);
			return [...new Map(categories.map((item) => [item.name, item])).values()];
		},
	},

	methods: {
		startQCM() {
			this.isModalVisible = true;
		},
		
		confirmStartQCM() {
			// Redirect to QCM page or start the assessment
			this.$router.push(`/qcm/${this.course.slug}`);
			this.isModalVisible = false;
		},
		
		addToWishlist() {
			// Add to wishlist functionality
			console.log('Added to wishlist:', this.course.title);
			// You can implement your wishlist logic here
		}
	},
};
</script>