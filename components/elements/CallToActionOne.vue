<template>
	<div class="call-to-action">
		<div class="container">
			<div class="sm:max-w-[510px] md:max-w-[630px] mx-auto relative bg-[#F4F9FF] z-10 rounded">
				<div class="w-16 h-16 text-2xl text-white leading-[64px] text-center bg-primary rounded-full absolute -top-8 left-5 sm:-left-8 z-10">
					<i class="fas fa-bolt"></i>
				</div>

				<div class="px-9 py-[30px] rounded overflow-hidden relative sm:flex items-center justify-between text-center sm:text-left">
					<div class="caption">
						<h6 class="text-sm text-primary leading-normal">Let Us Help</h6>
						<h5 class="mt-2.5 leading-relaxed">Finding Your <b>Right Courses</b></h5>
					</div>
					<n-link
						to="/contact-us"
						class="text-base px-9 py-3.5 font-bold bg-secondary rounded inline-block hover:text-white hover:bg-primary mt-5 sm:mt-0"
					>Get started</n-link>
					<div class="w-[100px] h-[100px] rounded-full border-1 border-primary border-opacity-20 absolute -left-12 -bottom-15 -z-10"></div>
					<div class="w-[100px] h-[100px] rounded-full border-1 border-primary border-opacity-20 absolute right-5 -top-[75px] -z-10"></div>
					<div class="w-[268px] h-[268px] rounded-full border-1 border-primary border-opacity-20 absolute -right-16 -bottom-[230px] -z-10"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>
