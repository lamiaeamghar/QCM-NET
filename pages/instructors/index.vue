<template>
	<div class="course-page">
		<BreadcrumbStyleTwo
			active-text="Instructors"
			page-title="Instructors"
		/>

		<div class="Instructors-wrapper py-section">
			<div class="custom-container">
				<p class="text-base text-light font-semibold -mt-2 mb-8">We found <strong class="text-heading">{{ instructors.length }}</strong> instructors available for you</p>
				<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5">
					<instructor
						v-for="(instructor, index) in instructors"
						:key="index"
						:instructor="instructor"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import instructors from "~/data/instructors.json";

export default {
	components: {
		BreadcrumbStyleTwo: () => import("~/components/elements/BreadcrumbStyleTwo"),
		Instructor: () => import("~/components/instructor/Instructor"),
	},

	data() {
		return {
			instructors,
		};
	},

	head() {
		return {
			title: "Instructors",
		};
	},
};
</script>