<template>
	<div class="head-main">
		<div
			class="header-main py-5 md:py-2.5 bg-white shadow-[0_10px_26px_rgba(0,0,0,5%)] relative"
			:class="{ '!fixed top-0 left-0 w-full bg-white z-50 transition-all shadow-md animate-fadeInDown xl:!py-0' : isSticky }"
		>
			<div class="container">
				<div class="flex items-center justify-between">
					<div class="header-logo w-36 mr-7">
						<n-link to="/">
							<img
								src="/images/logo/dark-logo.png"
								alt="Logo"
							>
						</n-link>
					</div>

					<div class="hidden lg:block pl-7 relative before:contents-[] before:absolute before:w-[1px] before:h-8 before:bg-[#d9dee3] before:top-1/2 before:left-0 before:-translate-y-1/2">
						<button class="flex items-center text-tangaroa text-normal font-semibold group hover:text-primary">
							<div class="mr-4">
								<inline-svg
									src="/images/svg/category-bar.svg"
									class="group-hover:fill-primary"
								></inline-svg>
							</div>
							<span>Category</span>
							<ul class="top-full left-0 absolute min-w-[250px] bg-white py-4 rounded border-gallery shadow-[0_0_30px_rgba(0,0,0,12%)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-7 group-hover:translate-y-3 z-30 before:absolute before:-top-2.5 before:left-7.5 before:content-[''] before:border-b-[10px] before:border-white before:border-l-transparent before:border-r-transparent before:border-l-8 before:border-r-8">
								<li
									v-for="(cat, index) in categories"
									:key="index"
								>
									<n-link
										:to="`/course-category/${cat.slug}`"
										class=" text-sm font-semibold text-left text-light block py-2 px-[30px] capitalize hover:text-primary"
									>{{ cat.name }}</n-link>
								</li>
							</ul>
						</button>
					</div>

					<div class="header-inner flex items-center justify-end flex-grow">
						<HeaderSearchBox />

						<div class="header-navigation hidden xl:block">
							<Navigation />
						</div>

						<!-- <div class="header-action ml-5">
						<button class="relative block w-8 h-8 text-tangaroa text-lg hover:text-primary transition-all">
							<i class="far fa-shopping-cart"></i>
							<span class="absolute -top-1 -right-1.5 w-5 h-5 leading-5 rounded-full text-white bg-primary text-[12px] text-center">3</span>
						</button>
					</div> -->

						<div class="header-toggle flex items-center">
							<button
								class="ml-5 xl:hidden group"
								@click="navOpen = !navOpen"
							>
								<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
								<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
								<span class="block w-6 h-0.5 my-1.5 bg-tangaroa group-hover:bg-primary"></span>
							</button>
							<button
								class="ml-5 flex md:hidden group"
								@click="searchOpen = !searchOpen"
							>
								<span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-tangaroa group-hover:bg-primary"></span>
								<span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-tangaroa group-hover:bg-primary"></span>
								<span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-tangaroa group-hover:bg-primary"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<OffCanvasMobileMenu
			:class="{'show-mobile-menu' : navOpen}"
			@toggleAsideMenu="navOpen = !navOpen"
		/>
		<OffcanvasSearchBox
			:class="{'show-search-box' : searchOpen}"
			@searchToggle="searchOpen = !searchOpen"
		/>
	</div>
</template>

<script>
import courses from "~/data/courses.json";
export default {
	components: {
		Navigation: () => import("~/components/header/Navigation"),
		HeaderSearchBox: () => import("~/components/elements/HeaderSearchBox"),
		OffCanvasMobileMenu: () => import("~/components/header/OffCanvasMobileMenu"),
		OffcanvasSearchBox: () => import("~/components/header/OffcanvasSearchBox"),
	},
	data() {
		return {
			isSticky: false,
			navOpen: false,
			searchOpen: false,
			courses,
		};
	},
	computed: {
		categories() {
			const categories = this.courses.map((el) => el.categories);
			return [...new Map(categories.map((item) => [item.name, item])).values()];
		},
	},
	watch: {
		$route() {
			this.navOpen = false;
			this.searchOpen = false;
		},
	},
	mounted() {
		window.addEventListener("scroll", () => {
			const scroll = window.scrollY;
			if (scroll >= 100) {
				this.isSticky = true;
			} else {
				this.isSticky = false;
			}
		});
	},
};
</script>