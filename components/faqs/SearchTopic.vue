<template>
	<div class="pb-section">
		<div class="custom-container">
			<h2 class="text-2xl md:text-[28px] -mt-2.5 mb-10">Select a Topic to Search for Help</h2>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
				<div
					v-for="(topic, i) in topics"
					:key="i"
					class="text-center p-7.5 rounded shadow-[0_10px_50px_0_rgba(0,0,0,0.05)]"
				>
					<div class="flex justify-center mb-6 min-h-[65px]">
						<inline-svg :src="topic.icon"></inline-svg>
					</div>
					<h4 class="mb-3">{{ topic.title }}</h4>
					<p>{{ topic.desc }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			topics: [
				{
					id: 1,
					icon: "/images/svg/getting-started.svg",
					title: "Getting Started",
					desc: "Learn how Edumall works and how to start learning.",
				},
				{
					id: 2,
					icon: "/images/svg/profile.svg",
					title: "Account/Profile",
					desc: "Learn how to manage your account settings.",
				},
				{
					id: 3,
					icon: "/images/svg/troubleshooting.svg",
					title: "Troubleshooting",
					desc: "Experiencing a bug? Check here to learn troubleshooting",
				},
				{
					id: 4,
					icon: "/images/svg/course-taking.svg",
					title: "Course Taking",
					desc: "Everything about taking a course on EduMall.",
				},
				{
					id: 5,
					icon: "/images/svg/refunds.svg",
					title: "Purchase/Refunds",
					desc: "Learn about coupons, how to send gifts, and refunds.",
				},
				{
					id: 6,
					icon: "/images/svg/mobile.svg",
					title: "Mobile",
					desc: "On the go? Don't worry! Learn about our mobile app.",
				},
			],
		};
	},
};
</script>
