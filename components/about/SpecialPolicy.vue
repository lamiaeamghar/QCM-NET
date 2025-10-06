<template>
	<div class="py-section bg-white-800">
		<div class="custom-container">
			<div class="text-center sm:max-w-md md:max-w-[670px] mx-auto mb-9">
				<h2 class="text-2xl md:text-[40px] mb-2 -mt-3">What Make Us Special?</h2>
				<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipisc ing elit.</p>
			</div>

			<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-7.5">
				<div
					v-for="(policy, i) in policies"
					:key="i"
					class="text-center policy-item"
				>
					<div class="relative rounded overflow-hidden  block z-10 after:absolute after:block after:contents-[] after:inset-0 bg-gradient">
						<img
							:src="policy.imgSrc"
							:alt="policy.title"
							class="w-full"
						>
						<h4 class="absolute bottom-5 left-0 right-0 text-center text-white z-10">{{ policy.title }}</h4>
					</div>
					<div class="mt-5">
						<p v-html="policy.desc"></p>
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
			policies: [
				{
					id: 1,
					title: "Who we are",
					desc: "Lorem ipsum dolor sit amet, <strong>consectetuer adipiscing</strong> elit, sed diam nonummy ndisse suscipit sagittis",
					imgSrc: "/images/academics/event-thumbnail-01.jpg",
				},
				{
					id: 1,
					title: "What we do",
					desc: "Lorem ipsum dolor sit amet, <strong>consectetuer adipiscing</strong> elit, sed diam nonummy ndisse suscipit sagittis",
					imgSrc: "/images/academics/event-thumbnail-02.jpg",
				},
				{
					id: 1,
					title: "Our Mission",
					desc: "Lorem ipsum dolor sit amet, <strong>consectetuer adipiscing</strong> elit, sed diam nonummy ndisse suscipit sagittis",
					imgSrc: "/images/academics/event-thumbnail-03.jpg",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.bg-gradient {
	&::after {
		background-image: linear-gradient(180deg, transparent 40%, #000);
	}
}
.policy-item p {
	strong {
		@apply font-semibold;
	}
}
</style>

