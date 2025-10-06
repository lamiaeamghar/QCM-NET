<template>
	<div class="py-section bg-white-800">
		<div class="container">
			<div class="section-title mb-13 text-center">
				<h2 class="-mt-2.5 mb-3 text-2xl md:text-3xl lg:text-[40px]"><mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">Language</mark> Courses</h2>
				<p>Learning new languages, connect to the world and <br> become a global citizen with EduMall</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-7.5">
				<div
					v-for="(language, index) in languages"
					:key="index"
				>
					<n-link to="/courses">
						<div class="relative after:absolute after:block after:content-[''] after:inset-0 after:opacity-60 bg-gradient rounded overflow-hidden group">
							<img
								:src="language.thumbnail"
								:alt="language.name"
								class="w-full group-hover:scale-110 transition-all duration-300"
							>
							<div class="absolute bottom-0 w-full z-10 p-5">
								<h4 class="text-white font-normal capitalize group-hover:text-secondary transition-all">{{ language.name }} Courses</h4>
								<div class="flex mt-4">
									<div class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
										<img
											:src="language.flag"
											:alt="language.name"
										>
									</div>
									<div class="pl-2.5 flex-grow">
										<p class="font-semibold text-white">{{ language.count }} Programs</p>
									</div>
								</div>
							</div>
						</div>
					</n-link>
				</div>
			</div>
			<div class="text-center">
				<n-link
					to="/courses"
					class="text-sm sm:text-normal px-6 sm:px-15 py-3 sm:py-4 font-semibold inline-block rounded mt-8 md:mt-10 text-white bg-primary hover:text-heading hover:bg-secondary"
				>View All Courses</n-link>
			</div>
		</div>
	</div>
</template>

<script>
import courses from "@/data/courses.json";
export default {
	data() {
		return {
			courses,
		};
	},

	computed: {
		languages() {
			const languages = this.courses.map((lan) => lan.languages);
			const newLanguages = [];

			languages.forEach((level) => {
				const index = newLanguages.findIndex((el) => el.slug === level.slug);

				if (index === -1) {
					newLanguages.push({ ...level, count: 1 });
				} else {
					newLanguages[index] = {
						...newLanguages[index],
						count: newLanguages[index].count + 1,
					};
				}
			});
			return newLanguages;
		},
	},
};
</script>

<style lang="scss" scoped>
.bg-gradient {
	&::after {
		background-image: linear-gradient(180deg, transparent 42%, #000000 84%);
	}
}
</style>
