<template>
	<div class='container'>
		<tabs>
			<tab title="Bengali">
				<div class="border p-5">
					<h5>Hello From Bengali</h5>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt officiis quidem enim totam culpa Bengali</p>
				</div>
			</tab>
			<tab title="English">
				<div class="border p-5">
					<h5>Hello From English</h5>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt officiis quidem enim totam culpa English</p>
				</div>
			</tab>
			<tab title="Germany">
				<div class="border p-5">
					<h5>Hello From Germany</h5>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt officiis quidem enim totam culpa Germany</p>
				</div>
			</tab>
		</tabs>
	</div>
</template>

<script>
export default {
	components: {
		Tabs: () => import("@/components/tabs/Tabs"),
		Tab: () => import("@/components/tabs/Tab"),
	},
};
</script>