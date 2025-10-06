<template>
	<div class="py-section">
		<div class="container">
			<div class="section-title mb-13 text-center">
				<h2 class="-mt-2.5 mb-3 text-2xl md:text-3xl lg:text-[40px]">What's Happening In <mark class="bg-transparent relative inline-block before:content-titleShape before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2">EduMall</mark></h2>
				<p>Show all Featured courses and News for your students</p>
			</div>

			<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-7.5">
				<n-link
					to="/courses"
					class="rounded overflow-hidden"
				>
					<img
						src="/images/banner/banner-01.jpg"
						alt="banner_01"
					>
				</n-link>
				<n-link
					to="/courses"
					class="rounded overflow-hidden"
				>
					<img
						src="/images/banner/banner-02.jpg"
						alt="banner_02"
					>
				</n-link>
				<n-link
					to="/courses"
					class="rounded overflow-hidden"
				>
					<img
						src="/images/banner/banner-03.jpg"
						alt="banner_03"
					>
				</n-link>
			</div>
		</div>
	</div>
</template>