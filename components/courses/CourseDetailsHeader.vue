<template>
	<div class="bg-[#f5f7fd] py-section">
		<div class="container">
			<div class="grid grid-cols-12">
				<div class="col-span-8">
					<div class="max-w-[600px]">
						<div class="mb-6">
							<span class="bg-primary text-white text-[11px] font-bold px-2 py-1 rounded-sm mr-4">-39%</span>
							<n-link
								:to="`/course-category/${course.categories.slug}`"
								class="text-primary font-semibold capitalize"
							>{{ course.categories.name }}</n-link>
						</div>
						<h1 class="text-[32px]">{{ course.title }}</h1>
						<div class="flex items-center mt-5">
							<div class="flex items-center">
								<div class="border-2 border-white rounded-full overflow-hidden w-[38px] h-[38px]">
									<img
										:src="course.instructor.thumbnail"
										:alt="course.instructor.name"
										width="36"
										height="36"
									>
								</div>
								<div class="font-bold text-heading capitalize pl-2.5">{{ course.instructor.name }}</div>
							</div>
							<div class="pl-4 ml-4 relative before:absolute before:contents-[] before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[22px] before:bg-[#d9dee3]">Last Update: {{ course.update }}</div>
						</div>
						<div class="mt-4">
							<div class="text-[13px] text-[#7e7e7e] font-semibold">
								<i class="fas fa-user-alt mr-2.5"></i>
								{{ course.enroll }} already enrolled
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import instructors from "~/data/instructors.json";

export default {
	props: {
		course: {
			type: Object,
			default: () => {},
		},
	},

	/* computed: {
		instructor() {
			return instructors.find(
				(instructor) => instructor.id === this.course.instructor.id
			);
		},
	}, */
};
</script>