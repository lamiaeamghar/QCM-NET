<template>
	<div class="mt-7 pt-5 border-t ">
		<h6 class="mb-5 text-xs uppercase">Language</h6>
		<ul class="space-y-5">
			<li
				v-for="(language, i) in languages"
				:key="i"
				class="font-semibold text-light capitalize"
			>
				<div class="form-check">
					<label class="form-check-label inline-block text-light cursor-pointer hover:text-primary">
						<input
							:id="language.slug"
							v-model="selected"
							class="form-check-input appearance-none h-[18px] w-[18px] border border-[#cacaca] rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-sub bg-no-repeat bg-center bg-contain mr-2 cursor-pointer hover:border-primary"
							type="checkbox"
							:value="language.slug"
						>
						{{ language.name }} ({{ `${language.count}`.padStart(2, 0) }})
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
			slug: this.$route.query.language,
		};
	},

	computed: {
		languages() {
			const languages = this.courses.map((lang) => lang.languages);
			const languageList = [];

			languages.forEach((level) => {
				const index = languageList.findIndex((el) => el.slug === level.slug);

				if (index === -1) {
					languageList.push({ ...level, count: 1 });
				} else {
					languageList[index] = {
						...languageList[index],
						count: languageList[index].count + 1,
					};
				}
			});
			return languageList;
		},
	},

	watch: {
		selected() {
			this.$router.push({ query: { ...this.$route.query, language: this.selected.join(",") } });
		},
	},

	mounted() {
		const selectedLanguages = this.slug;
		if (selectedLanguages) {
			this.selected = selectedLanguages.split(",");
		}
	},
};
</script>