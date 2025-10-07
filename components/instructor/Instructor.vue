<template>
	<div class="shadow-[0_0_10px_rgba(51,51,51,0.1)] rounded-lg hover:shadow-[0_10px_50px_rgba(0,0,0,0.08)] transition-all">
		<n-link :to="`/instructors/profile/${instructor.id}`">
			<div class="text-center p-5">
<div class="w-[140px] h-[140px] rounded-full overflow-hidden mx-auto">
  <img
    :src="instructor.thumbnail"
    :alt="instructor.name"
    class="object-cover w-full h-full"
  >
</div>

				<div class="mt-5">
					<h5 class="font-semibold">{{ instructor.name }}</h5>
					<p class="my-1">{{ instructor.jobTitle }}</p>
					<div class="flex items-center justify-center">
						<star-rating :current="instructor.rating"></star-rating>
						<span class="font-semibold">{{ instructor.rating }}</span>
						<span class="text-light">/5</span>
					</div>
				</div>
			</div>
			<div class="flex justify-between px-5 py-3 border-t border-gallery text-xs text-light">
				<div class="meta">
					<i class="far fa-file-alt"></i>
					<span class="value">{{ instructor.courses }} courses</span>
				</div>
				<div class="meta">
					<i class="far fa-user"></i>
					<span class="value">{{ instructor.students }} students</span>
				</div>
			</div>
		</n-link>
	</div>
</template>

<script>
export default {
	components: {
		StarRating: () => import("~/components/elements/StarRating"),
	},

	props: {
		instructor: {
			type: Object,
			default: () => {},
		},
	},
};
</script>