<template>
	<div class="pt-section">
		<div class="custom-container">
			<div class="section-top sm:flex justify-between mb-9">
				<div class="section-title">
					<h2 class="-mt-2.5 text-2xl md:text-3xl lg:text-[40px]"><mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Campus</mark> Life</h2>
				</div>
				<n-link
					to="/courses"
					class="text-base px-9 py-3.5 font-semibold inline-block rounded bg-white-500 text-primary hover:bg-primary hover:text-white mt-7.5 sm:mt-0"
				>More about campus life <i class="far fa-long-arrow-right"></i></n-link>
			</div>
			<div class="py-7.5 md:py-15 rounded relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full md:after:w-[70%] after:bg-[#EFF5F7] after:h-full after:-z-10">
				<div class="grid grid-cols-12 md:items-center">
					<div class="col-span-12 md:col-span-6 md:order-last">
						<div class="rounded overflow-hidden p-3.5 md:p-0 text-center">
							<img
								src="/images/about/home-university-image-campus-life.jpg"
								alt="image"
							>
						</div>
					</div>
					<div class="col-span-12 md:col-span-6 md:order-first">
						<div class="px-4 lg:px-15 mt-10 md:mt-0">
							<div
								v-for="item in items"
								:key="item.id"
								class="md:flex max-w-[400px] group mb-10 last:mb-0 text-center md:text-left ml-auto mr-auto md:ml-0 md:mr-0"
							>
								<div class="flex-shrink-0 inline-block">
									<inline-svg
										:src="item.icon"
										class="group-hover:fill-primary"
									></inline-svg>
								</div>
								<div class="md:pl-5 flex-grow">
									<h5 class="mb-2 group-hover:text-primary">{{ item.title }}</h5>
									<p>{{ item.desc }}</p>
								</div>
							</div>
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
			items: [
				{
					id: 1,
					icon: "/images/svg/student-life.svg",
					title: "Student Life",
					desc: "This is a valuable period where you learn and grow. School life can be tiring but it sets the foundation for your whole life.",
				},
				{
					id: 2,
					icon: "/images/svg/arts-clubs.svg",
					title: "Arts & Clubs",
					desc: "Connect with other students that share the same interests as you. From academic to adventure.",
				},
				{
					id: 3,
					icon: "/images/svg/sports-fitness.svg",
					title: "Sports and Fitness",
					desc: "Join a team for fun or competition and participate in a number off different activities that promote a healthy lifestyle.",
				},
			],
		};
	},
};
</script>
