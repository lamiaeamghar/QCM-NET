<template>
	<div class="bg-white py-4 lg:py-7.5 shadow-[0_2px_15px_rgba(51,51,51,0.05)] lg:ml-[320px]">
		<div class="container">
			<div class="flex items-center">
				<div class=" leading-none lg:hidden">
					<button
						class="text-primary mr-5"
						@click="$emit('toggleMainNav')"
					>
						<svg
							width="20px"
							height="18px"
							fill="currentColor"
							viewBox="0 0 20 18"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<path d="M18.7179688,2.60581293 L1.28207031,2.60581293 C0.573828125,2.60581293 0,2.02491559 0,1.30798783 C0,0.591060076 0.573828125,0.0101231939 1.28207031,0.0101231939 L18.7179688,0.0101231939 C19.4261719,0.0101231939 20,0.591020532 20,1.30798783 C20,2.02495513 19.4261719,2.60581293 18.7179688,2.60581293 Z"></path>
							<path d="M11.5384766,10.5957293 L1.28207031,10.5957293 C0.573828125,10.5957293 2.91322522e-13,10.0147924 2.91322522e-13,9.29786464 C2.91322522e-13,8.58093688 0.573828125,8 1.28207031,8 L11.5384766,8 C12.2466797,8 12.8205469,8.58089734 12.8205469,9.29786464 C12.8205469,10.0148319 12.2466797,10.5957293 11.5384766,10.5957293 Z"></path>
							<path d="M18.7179688,17.6 L1.28207031,17.6 C0.573828125,17.6 0,17.0628683 0,16.4 C0,15.7371317 0.573828125,15.2 1.28207031,15.2 L18.7179688,15.2 C19.4261719,15.2 20,15.7370952 20,16.4 C20,17.0628683 19.4261719,17.6 18.7179688,17.6 Z"></path>
						</svg>
					</button>
				</div>
				<div class="flex items-center flex-grow min-w-[145px]">
					<div class="w-12 sm:w-15 lg:w-[90px] h-12 sm:h-15 lg:h-[90px] rounded-full overflow-hidden">
						<img
							:src="instructor.thumbnail"
							:alt="instructor.name"
						>
					</div>
					<div class="pl-6">
						<h4 class="text-sm sm:text-normal lg:text-xl">
							<span class="text-[#9b9b9b] hidden sm:inline-block">Howdy,</span>
							{{ instructor.name }}
						</h4>
						<div class="flex items-center mt-1 sm:mt-3">
							<star-rating :current="instructor.rating" />
							<p>
								<span class="font-semibold">{{ instructor.rating }}</span>
								<span class="hidden sm:inline-block">({{ instructor.reviews }} Reviews)</span>
							</p>
						</div>
					</div>
				</div>

				<div class="space-x-2 sm:space-x-4">
					<button
						class="text-base font-bold text-primary border-2 border-gallery rounded w-10 sm:w-[52px] md:w-auto md:px-9 h-10 sm:h-[52px] hover:text-white hover:bg-primary hover:border-primary transition-all"
						@click="isModalVisible = !isModalVisible"
					>
						<i class="text-xl edumi edumi-content-writing"></i>
						<span class="pl-3 hidden md:inline-block">Add A New Course </span>
					</button>
					<button
						class="h-10 sm:h-[52px] w-10 sm:w-[52px] border-2 border-gallery rounded text-[#858c99] text-lg hover:text-white hover:bg-primary hover:border-primary transition-all"
						@click="$emit('toggleNav')"
					>
						<i class="fas fa-bars"></i>
					</button>
				</div>
			</div>

			<Modal
				v-show="isModalVisible"
				@close="isModalVisible = !isModalVisible"
			>
				<template #header>
					<h2 class="text-xl">Add a new course</h2>
				</template>

				<template #body>
					<form>
						<div class="mb-5 last:mb-0">
							<label class="font-semibold block mb-2">Course Title</label>
							<input
								type="text"
								placeholder="Course name..."
								class="text-heading border h-12 w-full rounded px-3.5 text-sm focus:outline outline-primary outline-1"
							>
						</div>
						<div class="mb-5 last:mb-0">
							<label class="font-semibold block mb-2">Course Details</label>
							<textarea
								type="text"
								placeholder="Course details..."
								class="text-heading border h-40 w-full rounded px-3.5 text-sm focus:outline outline-primary outline-1"
							>
							</textarea>
						</div>
					</form>
				</template>

				<template #footer>
					<button
						type="button"
						class="text-white bg-primary rounded font-semibold px-7 py-2.5 hover:bg-secondary hover:text-heading"
						aria-label="Close modal"
					>
						Save
					</button>
					<button
						type="button"
						class="text-heading bg-white-500 rounded font-semibold px-7 py-2.5 hover:bg-secondary hover:text-heading"
						aria-label="Close modal"
						@click="isModalVisible = !isModalVisible"
					>
						Cancel
					</button>
				</template>
			</Modal>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		StarRating: () => import("~/components/elements/StarRating"),
		Modal: () => import("~/components/elements/Modal"),
	},

	props: {
		instructor: {
			type: Object,
			default: () => {},
		},
	},

	data() {
		return {
			isModalVisible: false,
		};
	},
};
</script>