<template>
	<div class="">
		<h6 class="mb-5 text-xs uppercase">Instructor</h6>
		<ul class="space-y-5">
			<li
				v-for="(instructor, i) in instructors"
				:key="i"
				class="font-semibold text-light capitalize"
			>
				<div class="form-check">
					<label class="form-check-label inline-block text-light cursor-pointer hover:text-primary">
						<input
							:id="instructor.id"
							v-model="selected"
							class="form-check-input appearance-none h-[18px] w-[18px] border border-[#cacaca] rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-sub bg-no-repeat bg-center bg-contain mr-2 cursor-pointer hover:border-primary"
							type="checkbox"
							:value="instructor.id"
						>
						{{ instructor.name }} ({{ `${instructor.count}`.padStart(2, 0) }})
					</label>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import courses from "~/data/courses";
export default {
	data() {
		return {
			courses,
			selected: [],
			slug: this.$route.query.instructor,
		};
	},

	computed: {
		instructors() {
			const instructors = this.courses.map((author) => author.instructor);
			const ins = [];

			instructors.forEach((element) => {
				const index = ins.findIndex((el) => el.id === element.id);
				if (index === -1) {
					ins.push({ ...element, count: 1 });
				} else {
					ins[index] = {
						...ins[index],
						count: ins[index].count + 1,
					};
				}
			});
			return ins;
		},
	},

	watch: {
		selected() {
			this.$router.push({ query: { ...this.$route.query, instructor: this.selected.join(",") } });
		},
	},

	mounted() {
		const selectedInstructors = this.slug;
		if (selectedInstructors) {
			this.selected = selectedInstructors.split(",");
		}
	},
};
</script>