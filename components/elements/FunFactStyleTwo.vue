<template>
	<div class="py-section overflow-hidden">
		<div class="container">
			<div class="section-title mb-20 text-center">
				<h2 class="-mt-2.5 mb-3 text-2xl md:text-3xl lg:text-[40px] text-primary">Why choose QCM-NET</h2>
				<h3 class="text-2xl">Language Academic?</h3>
			</div>
			<div
				v-observe-visibility="{callback: visibilityChanged, once: true}"
				class="grid grid-cols-12 gap-7.5"
			>
				<div
					v-for="(counter, i) in counters"
					:key="i"
					class="col-span-12 xs:col-span-6 lg:col-span-3"
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
						<p
							class="font-base font-semibold text-light"
							v-html="counter.title "
						></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import countTo from "vue-count-to";
export default {
	components: {
		countTo,
	},
	data() {
		return {
			isVisible: false,
			counters: [
				{
					id: 1,
					count: 15,
					title: "Years of Language <br> Education Experience",
					icon: "/images/svg/globe.svg",
				},
				{
					id: 2,
					count: 2500,
					title: "Learners Enrolled in <br> QCM-NET Courses",
					icon: "/images/svg/students-enroll.svg",
				},
				{
					id: 3,
					count: 1250,
					title: "Qualified teachers and <br> language experts",
					icon: "/images/svg/courses.svg",
				},
				{
					id: 4,
					count: 1250,
					title: "Innovative Foreign <br> Language Courses",
					icon: "/images/svg/courses.svg",
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
