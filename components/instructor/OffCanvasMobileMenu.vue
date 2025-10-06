<template>
	<div class="fixed h-screen text-left bg-white-800 transition-all duration-700 delay-500 w-full z-20 opacity-0 invisible">
		<button
			class="absolute top-5 sm:top-8 right-5 sm:right-8 w-15 h-15 text-3xl hover:text-primary"
			@click="$emit('toggleNav')"
		>
			<i class="fas fa-times"></i>
		</button>
		<div class="flex h-full w-full">
			<div class="w-full h-full flex-grow-0 py-[100px] px-7.5 lg:px-[100px] hidden sm:flex justify-center items-center">
				<img
					src="/images/others/canvas-menu-image.png"
					alt="image"
				>
			</div>
			<div class="w-[690px] max-w-full sm:max-w-[50vw] md:max-w-[40vw] overflow-y-auto px-7.5 xl:px-[100px] py-12 xl:py-[100px] shadow-[-2px_0_26px_rgba(0,0,0,0.05)] flex-shrink-0 flex flex-col justify-between">
				<MobileNavigation />

				<form class="relative">
					<input
						placeholder="Search..."
						class="h-15 w-full bg-transparent border-b-2 text-2xl text-heading pr-10 focus:outline-none"
					>
					<button
						type="submit"
						class="absolute h-full top-1/2 -translate-y-1/2 right-0 text-primary text-3xl bg-transparent"
					>
						<i class="fas fa-search"></i>
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		MobileNavigation: () => import("@/components/instructor/MobileNavigation"),
	},
};
</script>