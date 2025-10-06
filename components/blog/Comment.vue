<template>
	<div class="comment pt-12">
		<Disqus shortname="admin" />
	</div>
</template>

<script>
import { Disqus } from "vue-disqus";

export default {
	components: {
		Disqus,
	},
};
</script>