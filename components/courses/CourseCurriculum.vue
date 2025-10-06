<template>
	<div class="wrapper">
		<div
			v-for="(item, i) in items"
			:key="i"
			class="border border-gallery rounded mb-5 last:mb-0"
		>
			<button
				class="text-primary text-base font-semibold flex items-center text-left px-5 md:px-9 py-5 w-full"
				:class='{ "active": activeIndex === i }'
				@click='activeIndex = activeIndex === i ? null : i'
			>
				<span
					class="w-3.5 mr-3 min-w-max flex-shrink-0 relative before:absolute before:w-3.5 before:h-0.5 before:content-[''] before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-primary after:absolute after:w-0.5 after:h-3.5 after:content-[''] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:-translate-y-1/2"
					:class='{ "after:h-0 after:w-0": activeIndex === i }'
				></span>
				{{ item.title }}
			</button>

			<div v-if='i === activeIndex'>
				<ul class="content">
					<li
						v-for="(list, index) in item.content"
						:key="index"
						class="px-7.5 py-3.5 odd:bg-white-800 flex sm:items-center justify-between"
					>
						<div class="list">
							<span class="pr-2">
								<i class="far fa-file-alt"></i>
							</span>
							{{ list }}
						</div>
						<span>
							<i class="fas fa-lock"></i>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: 0,
			items: [
				{
					id: 1,
					title: "Descriptive Statistics",
					content: ["The importance of data nowsaday", "Why my organization should know about data", "Calculate basic probability"],
				},
				{
					id: 2,
					title: "Apply the principles",
					content: ["The importance of data nowsaday", "Why my organization should know about data", "Calculate basic probability"],
				},
			],
		};
	},
};
</script>