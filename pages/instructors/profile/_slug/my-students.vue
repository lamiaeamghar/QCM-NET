<template>
	<div class="dashboard-wrapper bg-white-800 ml-0 lg:ml-[320px]">
		<div class="my-courses pt-11 pb-section">
			<div class="container">
				<h1 class="text-[28px] mb-7.5">My Students</h1>
				<div class="rounded overflow-x-auto">
					<table class="table-auto w-full">
						<thead class="hidden md:contents">
							<tr class="border-gallery border">
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Students</th>
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Courses</th>
								<th class="bg-[#f4f9ff] text-sm font-semibold text-heading px-2.5 py-3 whitespace-nowrap text-left first:pl-7.5 last:pr-7.5">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(student, i) in students"
								:key="i"
								class="border md:border-b border-gallery mb-5 md:mb-0 last:mb-0 p-5 bg-white block md:table-row"
							>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 sm:flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Students</label>
									<div class="flex items-center mt-2 sm:mt-0">
										<div class="w-[70px] rounded-full overflow-hidden">
											<img
												:src="student.thumbnail"
												:alt="student.name"
											>
										</div>
										<div class="pl-4">
											<h6 class="text-sm">{{ student.name }}</h6>
											<p>{{ student.date }}</p>
										</div>
									</div>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Courses</label>
									<p>{{ student.courseTitle }}</p>
								</td>
								<td class="md:px-2.5 py-1.5 md:py-5 md:first:pl-7.5 last:pr-7.5 flex items-start md:table-cell">
									<label class="font-semibold text-base md:hidden pr-4">Action</label>
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
						<h2 class="text-xl">Time Management Mastery</h2>
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

			students: [
				{
					id: 1,
					name: "Uzzal",
					date: "1 week ago",
					thumbnail: "/images/avatar/avatar-01.jpg",
					courseTitle: "Photography",
				},
				{
					id: 2,
					name: "Erik Jhonson",
					date: "2 week ago",
					thumbnail: "/images/avatar/avatar-02.jpg",
					courseTitle: "Consulting Approach to Problem Solving",
				},
				{
					id: 3,
					name: "Maria Rose",
					date: "3 week ago",
					thumbnail: "/images/avatar/avatar-03.jpg",
					courseTitle: "Time Management Mastery: Do More, Stress Less",
				},
				{
					id: 4,
					name: "Mayar",
					date: "4 week ago",
					thumbnail: "/images/avatar/avatar-04.jpg",
					courseTitle: "Consulting Approach to Problem Solving",
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