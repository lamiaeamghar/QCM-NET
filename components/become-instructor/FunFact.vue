<template>
	<div class="bg-[#F4F9FF] py-section relative z-10 overflow-hidden">
		<div class="custom-container">
			<div
				v-observe-visibility="{callback: visibilityChanged, once: true}"
				class="grid grid-cols-12 gap-7.5"
			>
				<div
					v-for="(counter, i) in counters"
					:key="i"
					class="col-span-12 sm:col-span-4"
				>
					<div
						v-if="isVisible"
						class="text-center"
					>
						<div class="flex justify-center min-h-[82px]">
							<inline-svg
								:src="counter.icon"
								class="w-10 md:w-auto"
							></inline-svg>
						</div>
						<countTo
							:end-val='counter.count'
							:duration='5000'
							class="text-2xl md:text-[34px] font-semibold text-primary block mt-0 md:mt-7.5 mb-2"
						></countTo>
						<p class="uppercase font-semibold text-light">{{ counter.title }}</p>
					</div>
				</div>
			</div>
		</div>
		<ShapeWithAnimation
			data-depth="3"
			class-list="absolute top-0 lg:top-16 left-0 lg:left-16 -z-10 w-[100px] lg:w-auto"
			img-src="/images/shape/EduMall-shape-01.png"
		/>
		<ShapeWithAnimation
			data-depth="1"
			class-list="absolute -top-[80px] lg:-top-[220px] -left-[120px] lg:-left-[320px] -z-10"
			shape-style-class-list="rounded-full border border-primary/20 w-[270px] lg:w-[670px] h-[270px] lg:h-[670px]"
		/>
		<ShapeWithAnimation
			data-depth="5"
			class-list="absolute top-0 -left-[70px] -z-10"
			shape-style-class-list="rounded-full border border-primary/20 w-[150px] lg:w-[218px] h-[150px] lg:h-[218px]"
		/>
		<ShapeWithAnimation
			data-depth="0.6"
			class-list="absolute -top-[132px] left-auto right-[5%] -z-10"
			shape-style-class-list="rounded-full border border-primary/20 w-[194px] h-[194px]"
		/>
		<ShapeWithAnimation
			data-depth="1"
			class-list="absolute top-auto -bottom-[100px] lg:-bottom-[370px] left-auto -right-[50px] lg:-right-[200px] -z-10"
			shape-style-class-list="rounded-full border border-primary/20 w-[270px] lg:w-[570px] h-[270px] lg:h-[570px]"
		/>
	</div>
</template>

<script>
import countTo from "vue-count-to";
export default {
	components: {
		countTo,
		ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
	},
	data() {
		return {
			isVisible: false,
			counters: [
				{
					id: 1,
					count: 2030,
					title: "students enrolled",
					icon: "/images/svg/students-enroll.svg",
				},
				{
					id: 2,
					count: 1250,
					title: "courses",
					icon: "/images/svg/courses.svg",
				},
				{
					id: 3,
					count: 127,
					title: "countries",
					icon: "/images/svg/globe.svg",
				},
			],
		};
	},
	methods: {
		visibilityChanged(isVisible) {
			this.isVisible = isVisible;
		},
	},
};
</script>
