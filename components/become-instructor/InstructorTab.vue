<template>
	<div class="py-section">
		<div class="custom-container">
			<div class="text-center md:max-w-[670px] mx-auto mb-6">
				<h2 class="text-2xl md:text-[40px] mb-5 -mt-3">How to Become an Instructor</h2>
			</div>
			<tabs>
				<tab title="Become an Instructor">
					<div class="grid grid-cols-12">
						<div class="col-span-12 md:col-span-6">
							<div class="become-an-instructor__content">
								<h3 class="text-xl md:text-[28px] mb-4 md:mb-7">Become an Instructor</h3>
								<div class="mb-5 last:mb-0">
									<h4 class="text-sm mb-2.5">Plan your course</h4>
									<p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
								</div>
								<div class="mb-5 last:mb-0">
									<h4 class="text-sm mb-2.5">How we help you</h4>
									<p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egeeque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
								</div>
							</div>
						</div>
						<div class="col-span-12 md:col-span-6">
							<div class="text-[400px] flex justify-center md:justify-end mt-5 lg:mt-0">
								<inline-svg
									src="/images/svg/laptop.svg"
									class="w-[1em] h-auto"
								></inline-svg>
							</div>
						</div>
					</div>
				</tab>
				<tab title="Instructor Rules">
					<div class="grid grid-cols-12">
						<div class="col-span-12 md:col-span-6">
							<div class="become-an-instructor__content">
								<h3 class="text-xl md:text-[28px] mb-4 md:mb-7">Instructor Rules</h3>
								<div class="mb-5 last:mb-0">
									<h4 class="text-sm mb-2.5">Plan your course</h4>
									<p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
								</div>
								<div class="mb-5 last:mb-0">
									<h4 class="text-sm mb-2.5">How we help you</h4>
									<p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egeeque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
								</div>
							</div>
						</div>
						<div class="col-span-12 md:col-span-6">
							<div class="text-[400px] flex justify-center md:justify-end mt-5 lg:mt-0">
								<inline-svg
									src="/images/svg/instructor-rules.svg"
									class="w-[1em] h-auto"
								></inline-svg>
							</div>
						</div>
					</div>
				</tab>
			</tabs>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		tabs: () => import("@/components/elements/tab/Tabs"),
		tab: () => import("@/components/elements/tab/Tab"),
	},
};
</script>
