<template>
	<div class="py-section bg-[#EFF5F7]">
		<div class="container">
			<div class="grid grid-cols-12 items-center">
				<div class="col-span-12 lg:col-span-3">
					<div class="section-title mb-8 lg:mb-0 lg:max-w-[370px]">
						<h6 class="text-base text-primary uppercase mb-5">start to success</h6>
						<h2 class="-mt-2.5 text-2xl md:text-3xl">Achieve your goals with <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Edumall</mark></h2>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-9">
					<div class="grid sm:grid-cols-2 md:grid-cols-4 md:gap-y-0 md:gap-7.5 lg:pl-12">
						<div
							v-for="counter in counters"
							:key="counter.id"
							class="rounded-lg text-center bg-white p-7.5 bg-opacity-0 hover:bg-opacity-100 transition-all"
						>
							<div class="mb-5">
								<img
									:src="counter.icon"
									:alt="counter.title"
								>
							</div>
							<h4 class="font-bold mb-2">{{ counter.value }}</h4>
							<p>{{ counter.title }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counters: [
				{
					id: 1,
					title: "Students Enrolled",
					icon: "/images/icon/counter-media-01.png",
					value: "253,085",
				},
				{
					id: 2,
					title: "Classes Completed",
					icon: "/images/icon/counter-media-02.png",
					value: "18000",
				},
				{
					id: 3,
					title: "Learners report career benefits",
					icon: "/images/icon/counter-media-03.png",
					value: "88%",
				},
				{
					id: 4,
					title: "Courses from top instructors",
					icon: "/images/icon/counter-media-04.png",
					value: "4020",
				},
			],
		};
	},
};
</script>
