<template>
	<ul class='mobile-menu'>
		<li
			v-for='(link, index) in menus'
			:key='index'
			class="relative group border-b last:border-b-0 border-white border-opacity-20"
		>
			<n-link
				:to="link.uri"
				class="font-semibold py-4 capitalize text-white group-hover:text-primary block"
			>
				{{ link.label }}
			</n-link>
			<span
				v-if="link.submenu"
				class='submenu-toggle text-white text-lg top-0 translate-y-4 right-0 absolute text-center cursor-pointer inline-block'
			>
				<i class="fas fa-angle-down"></i>
			</span>
			<ul
				v-if="link.submenu"
				class="submenu hidden pt-1.5 pl-4"
			>
				<li
					v-for='(submenuLink, i) in link.submenu'
					:key='i'
					class="text-white hover:text-primary"
				>
					<n-link
						:to="submenuLink.uri"
						class="py-2 block"
					> {{ submenuLink.label }} </n-link>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
import menus from "~/data/navigation.json";
export default {
	data() {
		return {
			menus,
		};
	},
	mounted() {
		const getSiblings = function (e) {
			const siblings = [];
			if (!e.parentNode) {
				return siblings;
			}
			let sibling = e.parentNode.firstChild;
			while (sibling) {
				if (sibling.nodeType === 1 && sibling !== e) {
					siblings.push(sibling);
				}
				sibling = sibling.nextSibling;
			}
			return siblings;
		};

		const subMenuToggle = document.querySelectorAll(".submenu-toggle");
		subMenuToggle.forEach(function (btn) {
			btn.addEventListener("click", function () {
				if (!this.classList.contains("active")) {
					this.classList.add("active");
					this.nextElementSibling.classList.add("active");
					this.closest("li").classList.add("active");
					getSiblings(this.closest("li")).forEach(function (item) {
						item.classList.remove("active");
						item.querySelectorAll("li, .submenu-toggle, .submenu").forEach(function (child) {
							child.classList.remove("active");
						});
					});
				} else {
					this.closest("li").classList.remove("active");
					this.closest("li")
						.querySelectorAll("li, .submenu-toggle, .submenu")
						.forEach(function (child) {
							child.classList.remove("active");
						});
				}
			});
		});
	},
};
</script>

<style lang='scss' scoped>
.submenu.active {
	@apply block;
}
.submenu-toggle.active i {
	@apply -rotate-180 inline-block transition-all;
}
</style>
