<template>
	<div class="py-section">
		<div class="custom-container">
			<div class="text-center mb-12">
				<span class="text-light uppercase font-bold block mb-9 -mt-1.5">style 01</span>
				<h2 class="-mt-2.5 text-2xl md:text-[32px]">Great <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Price</mark> Plan for You!</h2>
			</div>

			<div class="text-center mb-12 flex justify-center">
				<button
					class="border-2 rounded px-8 py-3 text-base font-semibold capitalize -mx-0.5"
					:class="currentStatus === 'monthly' ? 'bg-primary text-white border-primary z-10' : ''"
					@click="currentStatus ='monthly'"
				>monthly</button>
				<button
					class="border-2 rounded px-8 py-3 text-base font-semibold capitalize -mx-0.5"
					:class="currentStatus === 'yearly' ? 'bg-primary text-white border-primary z-10' : ''"
					@click="currentStatus = 'yearly'"
				>yearly</button>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-7.5">
				<div
					v-for="plan in plans"
					:key="plan.title"
					class="text-center bg-white px-7.5 pt-9 pb-10 rounded relative overflow-hidden border-2"
					:class="{'!bg-primary border-none': plan.active}"
				>
					<div
						v-if="plan.isPopular"
						class="absolute -top-0.5 -right-0.5 w-[88px] h-[88px] leading-[88px] text-center before:absolute before:top-0 before:right-0 before:content-[''] before:w-0 before:h-0 before:border-t-[88px] before:border-t-[#2dd4de] before:border-b-[88px] before:border-b-transparent before:border-l-[88px] before:border-l-transparent"
					>
						<span class="relative top-2 right-2.5 z-20 w-full h-1/2 text-[10px] font-bold uppercase leading-[14px] block text-white origin-center rotate-45 translate-x-[20%] translate-y-[15%]">Popular Choice</span>
					</div>
					<div class="mb-3">
						<h3
							class="mb-5"
							:class="{'text-white': plan.active}"
						>{{ plan.title }}</h3>
					</div>
					<div class="text-sm font-semibold text-[#ababab] inline-flex leading-none mb-8">
						<span
							class="self-start mr-1"
							:class="{'text-white': plan.active}"
						>$</span>
						<span
							class="text-[48px] text-primary font-normal leading-[0.8]"
							:class="{'!text-white': plan.active}"
						>{{ plan.pricing[currentStatus].price }}</span>
						<span
							class="self-end"
							:class="{'text-white': plan.active}"
						>{{ plan.pricing[currentStatus].label }}</span>
					</div>
					<ul
						class="text-light space-y-3"
						:class="{'!text-white': plan.active}"
					>
						<li
							v-for="(benefit, i) in plan.benefits[currentStatus]"
							:key="i"
						>{{ benefit }}</li>
					</ul>
					<div class="mt-6">
						<button
							class="text-base px-10 py-3 font-semibold inline-block rounded text-white bg-primary hover:text-heading hover:bg-secondary"
							:class="{'bg-secondary text-heading hover:bg-white hover:text-primary': plan.active}"
						>Get started</button>
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
			currentStatus: "monthly",
			plans: [
				{
					title: "Free",
					active: false,
					isPopular: false,
					pricing: {
						monthly: {
							price: 0,
							label: "/mo",
						},
						yearly: {
							price: 0,
							label: "/yr",
						},
					},
					benefits: {
						monthly: ["Courses included: 1", "Individual Course", "Full Access to Single Course", "Try for free, forever!"],
						yearly: ["Courses included: 1", "Individual Course", "Full Access to Single Course", "Try for free, forever!"],
					},
				},
				{
					title: "Started",
					active: true,
					isPopular: true,
					pricing: {
						monthly: {
							price: 19.0,
							label: "/mo",
						},
						yearly: {
							price: 190.0,
							label: "/yr",
						},
					},
					benefits: {
						monthly: ["Courses included: 3", "Individual Course", "Full Access to Single Course", "Learner Record"],
						yearly: ["Courses included: 3", "Individual Course", "Full Access to Single Course", "Learner Record"],
					},
				},
				{
					title: "Team",
					active: false,
					isPopular: false,
					pricing: {
						monthly: {
							price: 29.0,
							label: "/mo",
						},
						yearly: {
							price: 290.0,
							label: "/yr",
						},
					},
					benefits: {
						monthly: ["Courses included: 10", "Individual Course", "Full Access to Single Course", "Learner Record"],
						yearly: ["Courses included: 10", "Individual Course", "Full Access to Single Course", "Learner Record"],
					},
				},
				{
					title: "Enterprise",
					active: false,
					isPopular: false,
					pricing: {
						monthly: {
							price: 39.0,
							label: "/mo",
						},
						yearly: {
							price: 390.0,
							label: "/yr",
						},
					},
					benefits: {
						monthly: ["Unlimited Courses", "Individual Course", "Full Access to Single Course", "Learner Record"],
						yearly: ["Unlimited Courses", "Individual Course", "Full Access to Single Course", "Learner Record"],
					},
				},
			],
		};
	},
};
</script>