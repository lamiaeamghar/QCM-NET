<template>
	<div class="banner-section">
		<div class="container">
			<div
				class="relative pl-[15px] lg:pl-20 bg-white-200 rounded-lg bg-left-top lg:bg-right-bottom bg-no-repeat"
				:style="`backgroundImage: url('images/banner/banner-image-03.jpg')`"
			>
				<div class="sm:max-w-[400px] lg:max-w-[470px] px-[15px] py-10">
					<h3 class="-mt-2">Achieve Your Goals With QCM-NET</h3>
					<p class="mt-3">Create an account to receive our newsletter, course recommendations and promotions.</p>
					<ButtonStyleOne
						label="Register for free"
						link="/register"
						class="mt-2"
					/>
				</div>
				<img
					src="/images/others/curve-arrow.png"
					alt="icon"
					class="absolute left-9 bottom-14 hidden lg:block"
				>
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