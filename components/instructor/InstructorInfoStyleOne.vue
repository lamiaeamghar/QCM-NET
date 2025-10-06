<template>
	<div class="tutor-instructor">
		<div class="sm:flex">
			<div class="w-[200px] flex-shrink-0 rounded overflow-hidden">
				<n-link :to="`/instructors/profile/${instructor.id}`">
					<img
						:src="instructor.thumbnail"
						:alt="instructor.name"
						width="200"
						height="246"
					>
				</n-link>
			</div>
			<div class="sm:pl-7.5 mt-5 sm:mt-0 flex-grow">
				<h5>{{ instructor.name }}</h5>
				<div class="mt-1.5">
					<div class="flex items-center">
						<star-rating :current="instructor.rating"></star-rating>
						<div class="ml-1">
							<span class="text-normal">{{ instructor.rating }}</span>
							<span class="text-normal">/5</span>
						</div>
					</div>
				</div>
				<div class="text-light text-xs space-x-4 space-y-2.5">
					<span class="inline-block">
						<i class="pr-1 far fa-play-circle"></i> {{ instructor.courses }} Courses
					</span>
					<span class="inline-block">
						<i class="pr-1 far fa-comment-alt"></i> {{ instructor.reviews }} Reviews
					</span>
					<span class="inline-block">
						<i class="pr-1 far fa-user"></i> {{ instructor.students }} Students
					</span>
				</div>
				<n-link
					:to="`/instructors/profile/${instructor.id}`"
					class="mt-4 text-primary inline-block font-semibold hover:text-secondary"
				><i class="fas fa-plus"></i> See more</n-link>
			</div>
		</div>
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