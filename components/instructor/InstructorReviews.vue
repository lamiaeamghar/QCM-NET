<template>
	<div class="sm:flex bg-white rounded border border-gallery p-5">
		<div class="rounded overflow-hidden w-[150px] h-[100px]">
			<img
				:src="review.thumbnail"
				:alt="review.courseTitle"
			>
		</div>
		<div class="sm:pl-7 mt-3 sm:mt-0">
			<h5>
				<span class="font-normal">Course:</span>
				<n-link
					to="/courses/successful-negotiation-master-your-negotiating-skills"
					class="hover:text-primary"
				>{{ review.courseTitle }}</n-link>
			</h5>
			<div class="mt-1">
				<StarRating :current="review.rating" />
				<p class="text-xs mt-1">{{ review.date }}</p>
			</div>
			<div class="mt-1">
				<p>{{ review.msg }}</p>
			</div>
		</div>
		<div class="ml-auto mt-3 sm:mt-0">
			<button
				class="text-primary"
				@click="$emit('openModal')"
			>
				<i class="far fa-pencil"></i>
				<span>Edit Feedback</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		StarRating: () => import("~/components/elements/StarRating"),
	},

	props: {
		review: {
			type: Object,
			default: () => {},
		},
	},
};
</script>
