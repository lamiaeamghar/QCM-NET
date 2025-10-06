<template>
	<div class="shadow-[0_0_10px_rgba(51,51,51,0.1)] rounded-lg">
		<n-link :to="`/instructors/profile/${instructor.id}`">
			<div class="p-5 flex">
				<div class="w-20 h-20 rounded-full overflow-hidden">
					<img
						:src="instructor.thumbnail"
						:alt="instructor.name"
					>
				</div>
				<div class="ml-5">
					<h6 class="font-base font-bold">{{ instructor.name }}</h6>
					<p class="mt-1 mb-2 capitalize">{{ instructor.jobTitle }}</p>
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
					<span class="pl-1">{{ instructor.courses }} courses</span>
				</div>
				<div class="meta">
					<i class="far fa-user"></i>
					<span class="pl-1">{{ instructor.students }} students</span>
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