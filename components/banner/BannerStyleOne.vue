<template>
	<div class="banner-section">
		<div class="container">
			<div class="grid grid-cols-12 gap-[30px]">
				<div class="col-span-12 lg:col-span-6">
					<div class="p-[30px] pb-0 bg-[#F6F3ED] rounded-lg">
						<div class="grid grid-cols-12">
							<div class="col-span-12 md:col-span-7 xl:col-span-6">
								<div class="pt-[15px] pb-11">
									<h4 class="-mt-2">Become An Instructor</h4>
									<p class="mt-1.5">Top instructors from around the world teach millions of students on EduMall.</p>
									<ButtonStyleOne
										label="Start teaching today"
										link="/become-an-instructor"
										class="mt-2"
									/>
								</div>
							</div>
							<div class="col-span-12 md:col-span-5 xl:col-span-6">
								<div class="md:-mr-7 text-center md:text-left">
									<img
										src="/images/banner/banner-image-group-teachers.png"
										alt="Banner"
										width="350"
										height="201"
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-6">
					<div class="p-[30px] pb-0 bg-[#EEF0F4] rounded-lg">
						<div class="grid grid-cols-12">
							<div class="col-span-12 md:col-span-7">
								<div class="pt-[15px] pb-11">
									<h4 class="-mt-2">Access To Education</h4>
									<p class="mt-1.5">Create an account to receive our newsletter, course recommendations and promotions.</p>
									<ButtonStyleOne
										label="Register for free"
										link="/register"
										class="mt-2"
									/>
								</div>
							</div>
							<div class="col-span-12 md:col-span-5">
								<div class="text-center">
									<img
										src="/images/banner/banner-image-laptop.png"
										alt="Banner"
										width="260"
										height="199"
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		ButtonStyleOne: () => import("~/components/elements/ButtonStyleOne"),
	},
};
</script>