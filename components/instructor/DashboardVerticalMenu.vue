<template>
	<div class="bg-white fixed left-0 top-0 z-20 h-full shadow-[0_2px_15px_rgba(51,51,51,.05)] opacity-0 invisible lg:opacity-100 lg:visible transition-all duration-500 -translate-x-full lg:translate-x-[none]">
		<div class="content w-[320px]">
			<div class="px-10 py-7.5 flex justify-between items-center">
				<div class="py-4">
					<n-link to="/">
						<img
							src="/images/logo/dark-logo.png"
							alt="Logo"
							width="148"
							height="62"
						>
					</n-link>
				</div>
				<div class="w-12 h-12 text-center lg:hidden">
					<button
						class="text-3xl hover:text-primary"
						@click="$emit('toggleMainNav')"
					>
						<i class="fas fa-times"></i>
					</button>
				</div>
			</div>

			<div class="offcanvas-body">
				<div class="px-5">
					<ul class="dashboard-menu-list">
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-layers"></i>
								<span class="pl-4 text-xs text-heading">My Profile</span>
							</n-link>
						</li>
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}/courses`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-follower"></i>
								<span class="pl-4 text-xs text-heading">My Courses</span>
							</n-link>
						</li>
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}/enrolled-courses`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-open-book"></i>
								<span class="pl-4 text-xs text-heading">Enrolled Course</span>
							</n-link>
						</li>
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}/reviews`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-star"></i>
								<span class="pl-4 text-xs text-heading">Reviews</span>
							</n-link>
						</li>
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}/wishlist`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-heart"></i>
								<span class="pl-4 text-xs text-heading">Wishlist</span>
							</n-link>
						</li>
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}/purchase-history`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-shopping-cart"></i>
								<span class="pl-4 text-xs text-heading">Purchase History</span>
							</n-link>
						</li>
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}/withdraw`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-wallet"></i>
								<span class="pl-4 text-xs text-heading">Withdrawals</span>
							</n-link>
						</li>
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}/my-students`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-users"></i>
								<span class="pl-4 text-xs text-heading">My Students</span>
							</n-link>
						</li>
						<li>
							<n-link
								:to="`/instructors/profile/${instructor.id}/assignments`"
								class="py-4 px-5 flex rounded text-primary text-xl font-semibold hover:bg-[#edf0f9] group"
							>
								<i class="edumi edumi-checklist"></i>
								<span class="pl-4 text-xs text-heading">Assignments</span>
							</n-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		instructor: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style lang="scss">
.dashboard-menu-list {
	.nuxt-link-exact-active {
		@apply bg-primary text-white;
		span {
			@apply text-white;
		}
	}
}
</style>