<template>
	<div id="support">
		<GmapMap
			:center="{lat:52.482900, lng:-1.893460}"
			:zoom="17"
			map-type-id="terrain"
			:class="mapHeight"
		>
		</GmapMap>
	</div>
</template>

<script>
export default {
	props: {
		mapHeight: {
			type: String,
			default: "h-[250px] md:h-[350px] lg:h-[500px]",
		},
	},
};
</script>