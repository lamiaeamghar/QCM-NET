<template>
	<div class="py-section">
		<div class="custom-container">
			<div class="text-center md:max-w-[670px] mx-auto mb-13">
				<h2 class="text-2xl md:text-[40px] mb-5 -mt-3">Discover Your Potential</h2>
				<p class="text-base text-light">Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
			</div>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
				<div
					v-for="(policy, i) in policies"
					:key="i"
					class="text-center p-7.5 rounded shadow-[0_10px_50px_0_rgba(0,0,0,0.05)]"
				>
					<div class="flex justify-center mb-6 min-h-[65px]">
						<inline-svg :src="policy.icon"></inline-svg>
					</div>
					<h4 class="mb-3">{{ policy.title }}</h4>
					<p>{{ policy.desc }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			policies: [
				{
					id: 1,
					icon: "/images/svg/earn-money.svg",
					title: "Earn Money",
					desc: "Earn money every time a student purchases your course. Get paid monthly through PayPal or Payoneer, it’s your choice.",
				},
				{
					id: 2,
					icon: "/images/svg/video-player.svg",
					title: "Inspire Students",
					desc: "Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge.",
				},
				{
					id: 3,
					icon: "/images/svg/community.svg",
					title: "Join Our Community",
					desc: "Take advantage of our active community of instructors to help you through your course creation process.",
				},
			],
		};
	},
};
</script>
