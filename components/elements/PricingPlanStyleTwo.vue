<template>
	<div class="bg-white-500 pt-section pb-section md:pb-28">
		<div class="custom-container">
			<div class="text-center mb-12 md:mb-24">
				<span class="text-light uppercase font-bold block mb-9 -mt-1.5">style 02</span>
				<h2 class="-mt-2.5 text-2xl md:text-[32px]">Great <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Price</mark> Plan for You!</h2>
			</div>

			<div class="grid md:grid-cols-3 gap-7.5 md:gap-0">
				<div
					v-for="item in pricing"
					:key="item.id"
					class="text-center bg-white p-7.5 rounded relative overflow-hidden"
					:class="{'md:shadow-[0px_29px_53px_0px_rgba(0,0,0,0.08)] md:-mx-2.5 md:-my-10 z-10': item.active}"
				>
					<div
						v-if="item.isPopular"
						class="absolute top-0 right-0 w-[88px] h-[88px] leading-[88px] text-center before:absolute before:top-0 before:right-0 before:content-[''] before:w-0 before:h-0 before:border-t-[88px] before:border-t-[#2dd4de] before:border-b-[88px] before:border-b-transparent before:border-l-[88px] before:border-l-transparent"
					>
						<span class="relative top-2 right-2.5 z-20 w-full h-1/2 text-[10px] font-bold uppercase leading-[14px] block text-white origin-center rotate-45 translate-x-[20%] translate-y-[15%]">Popular Choice</span>
					</div>
					<div class="mb-3">
						<h3 class="mb-5">{{ item.plan }}</h3>
						<div class="w-40 h-40 leading-[160px] rounded-full text-center mx-auto bg-gradient-to-b from-white-500">
							<inline-svg :src="item.icon"></inline-svg>
						</div>
					</div>
					<div class="text-sm font-semibold text-[#ababab] inline-flex leading-none mb-8">
						<span class="self-start mr-1">$</span>
						<span class="text-[48px] text-heading font-normal leading-[0.8]">{{ item.price }}</span>
						<span class=" self-end">/{{ item.duration }}</span>
					</div>
					<div>
						<button
							class="text-base px-10 py-3 font-semibold inline-block rounded text-heading bg-transparent border-2 border-gallery hover:text-white hover:border-primary hover:bg-primary"
							:class="{'!bg-primary !border-primary !text-white hover:!bg-secondary hover:!text-heading hover:!border-secondary' : item.active}"
						>Get started</button>
					</div>
					<ul class=" text-light space-y-3 mt-6">
						<li
							v-for="(list, i) in item.features"
							:key="i"
						>{{ list }}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pricing: [
				{
					id: 1,
					plan: "Basic",
					isPopular: false,
					active: false,
					icon: "/images/svg/rocket.svg",
					price: "19",
					duration: "mo",
					features: ["Courses included: 1", "Individual Course", "Full Access to Single Course", "Try for free, forever!"],
				},
				{
					id: 2,
					plan: "Advanced",
					isPopular: true,
					active: true,
					icon: "/images/svg/earth.svg",
					price: "49",
					duration: "mo",
					features: ["Courses included: 1", "Individual Course", "Full Access to Single Course", "Try for free, forever!"],
				},
				{
					id: 3,
					plan: "Optimal",
					isPopular: false,
					active: false,
					icon: "/images/svg/diamond.svg",
					price: "29",
					duration: "mo",
					features: ["Courses included: 1", "Individual Course", "Full Access to Single Course", "Try for free, forever!"],
				},
			],
		};
	},
};
</script>