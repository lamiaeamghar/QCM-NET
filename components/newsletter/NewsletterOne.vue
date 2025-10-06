<template>
	<div class="relative z-10 overflow-hidden">
		<div class="container">
			<div class="bg-[#E6EDF6] py-10 px-5 relative overflow-hidden">
				<div class="max-w-[990px] mx-auto md:flex justify-between items-center relative z-10">
					<div class="flex-shrink-0 text-center md:text-left">
						<h2 class="text-2xl lg:text-3xl text-primary font-bold">Subscribe <span class="font-normal md:block">Our Newsletter</span></h2>
					</div>
					<div class="max-w-[465px] mx-auto md:ml-auto md:mr-0 w-full relative flex-grow mt-5 md:mt-0">
						<form>
							<input
								type="text"
								placeholder="Your e-mail"
								class="w-full h-15 xs:pr-40 bg-white px-5 py-1 rounded text-sm focus:outline-none"
							>
							<button class="text-heading bg-secondary font-bold xs:absolute h-12 rounded top-1/2 right-1.5 px-7.5 xs:-translate-y-1/2 hover:bg-primary hover:text-white mt-3 xs:mt-0 w-full xs:w-auto">Subscribe</button>
						</form>
					</div>
				</div>

				<ShapeWithAnimation
					data-depth="-0.4"
					class-list="absolute -top-[80px] lg:-top-[220px] -left-[257px] lg:-left-[257px]"
					shape-style-class-list="rounded-full border border-primary/20 w-[270px] lg:w-[465px] h-[270px] lg:h-[465px] -z-10"
				/>
				<ShapeWithAnimation
					data-depth="0.4"
					class-list="absolute -top-[30px] -left-[85px]"
					shape-style-class-list="rounded-full border border-primary/20 w-[150px] lg:w-[180px] h-[150px] lg:h-[180px] -z-10"
				/>
				<ShapeWithAnimation
					data-depth="-0.5"
					class-list="absolute -top-[42px] left-auto right-[205px]"
					shape-style-class-list="rounded-full border border-primary/20 w-[180px] h-[180px] -z-10"
				/>
				<ShapeWithAnimation
					data-depth="0.5"
					class-list="absolute top-auto -bottom-[100px] lg:-bottom-[315px] left-auto -right-[20px]"
					shape-style-class-list="rounded-full border border-primary/20 w-[270px] lg:w-[465px] h-[270px] lg:h-[465px] -z-10"
				/>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	components: {
		ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
	},
};
</script>
