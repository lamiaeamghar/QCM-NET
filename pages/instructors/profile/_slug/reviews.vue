<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="my-courses pt-11 pb-section">
			<div class="container">
				<h1 class="text-[28px] mb-7.5">Reviews</h1>
				<div class="grid grid-cols-1 gap-5">
					<InstructorReviews
						v-for="(review, i) in reviews"
						:key="i"
						:review="review"
						@openModal="isModalVisible = !isModalVisible"
					/>
				</div>
				<Modal
					v-show="isModalVisible"
					@close="isModalVisible = !isModalVisible"
				>
					<template #header>
						<h2 class="text-xl">Edit reviews</h2>
					</template>

					<template #body>
						<form>
							<div class="mb-5 last:mb-0">
								<label class="font-semibold block mb-2">Edit your message</label>
								<textarea
									type="text"
									class="text-heading border h-40 w-full rounded p-5 text-sm focus:outline outline-primary outline-1 "
								>
								</textarea>
							</div>
						</form>
					</template>

					<template #footer>
						<button
							type="button"
							class="text-white bg-primary rounded font-semibold px-7 py-2.5 hover:bg-secondary hover:text-heading"
							aria-label="Close modal"
						>
							Save
						</button>
					</template>
				</Modal>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		InstructorReviews: () => import("~/components/instructor/InstructorReviews"),
		Modal: () => import("~/components/elements/Modal"),
	},
	layout: "InstructorDashboard",

	data() {
		return {
			isModalVisible: false,
			reviews: [
				{
					id: 1,
					courseTitle: "Overview of Exercise",
					rating: 4.5,
					date: "4 months ago",
					msg: "Wow it's amazing !",
					thumbnail: "/images/courses/courses-14.jpg",
				},
				{
					id: 2,
					courseTitle: "Introduction to Probability and Statistics",
					rating: 5,
					date: "5 months ago",
					msg: "Wow great course!",
					thumbnail: "/images/courses/courses-15.jpg",
				},
				{
					id: 3,
					courseTitle: "Consulting Approach to Problem Solving",
					rating: 4,
					date: "6 months ago",
					msg: "Helpful content",
					thumbnail: "/images/courses/courses-16.jpg",
				},
			],
		};
	},

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