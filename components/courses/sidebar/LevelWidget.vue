<template>
	<div class="mt-7 pt-5 border-t ">
		<h6 class="mb-5 text-xs uppercase">Level</h6>
		<ul class="space-y-5">
			<li
				v-for="(level, i) in levelList"
				:key="i"
				class="font-semibold text-light capitalize"
			>
				<div class="form-check">
					<label class="form-check-label inline-block text-light cursor-pointer hover:text-primary">
						<input
							:id="level.slug"
							v-model="selected"
							class="form-check-input appearance-none h-[18px] w-[18px] border border-[#cacaca] rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-sub bg-no-repeat bg-center bg-contain mr-2 cursor-pointer hover:border-primary"
							type="checkbox"
							:value="level.slug"
						>
						{{ level.name }} ({{ `${level.count}`.padStart(2, 0) }})
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
			slug: this.$route.query.levels,
		};
	},

	computed: {
		levelList() {
			const levels = this.courses.map((level) => level.levels);
			const newLevels = [];

			levels.forEach((level) => {
				const index = newLevels.findIndex((el) => el.slug === level.slug);

				if (index === -1) {
					newLevels.push({ ...level, count: 1 });
				} else {
					newLevels[index] = {
						...newLevels[index],
						count: newLevels[index].count + 1,
					};
				}
			});
			return newLevels;
		},
	},

	watch: {
		selected() {
			this.$router.push({ query: { ...this.$route.query, levels: this.selected.join(",") } });
		},
	},

	mounted() {
		const selectedLevels = this.slug;
		if (selectedLevels) {
			this.selected = selectedLevels.split(",");
		}
	},
};
</script>
