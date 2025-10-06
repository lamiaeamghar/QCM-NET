<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="my-courses pt-11 pb-section">
			<div class="container">
				<h1 class="text-[28px] mb-7.5">Assignments</h1>
				<div class="rounded overflow-x-auto">
					<table class="table-auto w-full">
						<thead class="hidden md:contents">
							<tr class="border-gallery border">
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Course Name</th>
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Total Mark</th>
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Total Submit</th>
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5"></th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(student, i) in students"
								:key="i"
								class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row"
							>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 ">
									<label class="font-semibold text-base mb-1.5 block">Assignments</label>
									<p class="text-base font-semibold hover:text-primary"><span class="pr-1">Courses:</span>
										<n-link to="">{{ student.courseTitle }}</n-link>
									</p>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Total Mark</label>
									<p>{{ student.totalMark }}</p>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Total Submit</label>
									<p>{{ student.totalSubmit }}</p>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<button
										class="w-10 h-10 text-normal rounded bg-white-500 text-primary hover:text-white hover:bg-primary"
										@click="isModalVisible = !isModalVisible"
									>
										<i class="fas fa-angle-right"></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<Modal
					v-show="isModalVisible"
					@close="isModalVisible = !isModalVisible"
				>
					<template #header>
						<h2 class="text-xl">Consulting Approach for Problem</h2>
					</template>

					<template #body>
						<h6 class="mb-1">Time Management Mastery</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga a velit possimus laborum quam dignissimos nam recusandae deleniti Repudiandae voluptas.</p>
					</template>
				</Modal>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		Modal: () => import("~/components/elements/Modal"),
	},

	layout: "InstructorDashboard",

	data() {
		return {
			isModalVisible: false,
			navOpen: false,

			students: [
				{
					id: 1,
					courseTitle: "Consulting Approach to Problem Solving",
					totalMark: 10,
					totalSubmit: 1,
				},
				{
					id: 2,
					courseTitle: "Introduction to Environmental Science",
					totalMark: 10,
					totalSubmit: 0,
				},
				{
					id: 3,
					courseTitle: "Angular–The Complete Guide (2020 Edition)",
					totalMark: 10,
					totalSubmit: 1,
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
