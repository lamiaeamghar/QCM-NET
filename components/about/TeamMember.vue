<template>
	<div class="team-area py-section">
		<div class="custom-container">
			<div class="section-top lg:flex justify-between mb-8 lg:mb-8">
				<SectionTitleStyleOne
					title="Meet our"
					highlight-title="Team"
					class="mb-8 lg:mb-0"
				/>
				<ButtonDefault
					label="Join Our Team"
					link="/contact-us"
					variation-class="bg-primary text-white hover:bg-secondary hover:text-heading"
				/>
			</div>

			<div class="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5">
				<div
					v-for="(member, i) in teamMembers"
					:key="i"
					class="group"
				>
					<div class="relative rounded overflow-hidden">
						<img
							:src="member.imgSrc"
							:alt="member.name"
							class="w-full"
						>
						<div class=" bg-white text-center rounded absolute bottom-0 left-5 right-5 transition-all duration-300 opacity-0 invisible group-hover:-translate-y-5 group-hover:opacity-100 group-hover:visible">
							<a
								v-for="social in member.socialLink"
								:key="social.url"
								:href="social.url"
								target="_blank"
								class="text-normal hover:text-primary p-3 inline-block"
							>
								<i :class="social.icon"></i>
							</a>
						</div>
					</div>
					<div class="mt-4 text-center">
						<h5>{{ member.name }}</h5>
						<p class="text-light">{{ member.designation }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		ButtonDefault: () => import("~/components/elements/ButtonDefault"),
		SectionTitleStyleOne: () => import("~/components/elements/SectionTitleStyleOne"),
	},

	data() {
		return {
			teamMembers: [
				{
					id: 1,
					imgSrc: "/images/team/team-member-01.jpg",
					name: "Stephen Fleming",
					designation: "Manager",
					socialLink: [
						{
							url: "https://www.facebook.com",
							icon: "fab fa-facebook-f",
						},
						{
							url: "https://twitter.com",
							icon: "fab fa-twitter",
						},
						{
							url: "https://www.instagram.com",
							icon: "fab fa-instagram",
						},
						{
							url: "https://www.linkedin.com",
							icon: "fab fa-linkedin-in",
						},
					],
				},
				{
					id: 2,
					imgSrc: "/images/team/team-member-02.jpg",
					name: "Jonti Rodes",
					designation: "Marketing Manager",
					socialLink: [
						{
							url: "https://www.facebook.com",
							icon: "fab fa-facebook-f",
						},
						{
							url: "https://twitter.com",
							icon: "fab fa-twitter",
						},
						{
							url: "https://www.instagram.com",
							icon: "fab fa-instagram",
						},
						{
							url: "https://www.linkedin.com",
							icon: "fab fa-linkedin-in",
						},
					],
				},
				{
					id: 3,
					imgSrc: "/images/team/team-member-03.jpg",
					name: "Robart Carlos",
					designation: "Chief Designer",
					socialLink: [
						{
							url: "https://www.facebook.com",
							icon: "fab fa-facebook-f",
						},
						{
							url: "https://twitter.com",
							icon: "fab fa-twitter",
						},
						{
							url: "https://www.instagram.com",
							icon: "fab fa-instagram",
						},
						{
							url: "https://www.linkedin.com",
							icon: "fab fa-linkedin-in",
						},
					],
				},
				{
					id: 4,
					imgSrc: "/images/team/team-member-04.jpg",
					name: "Shan Williams",
					designation: "Engineer",
					socialLink: [
						{
							url: "https://www.facebook.com",
							icon: "fab fa-facebook-f",
						},
						{
							url: "https://twitter.com",
							icon: "fab fa-twitter",
						},
						{
							url: "https://www.instagram.com",
							icon: "fab fa-instagram",
						},
						{
							url: "https://www.linkedin.com",
							icon: "fab fa-linkedin-in",
						},
					],
				},
				{
					id: 5,
					imgSrc: "/images/team/team-member-05.jpg",
					name: "Dollie Horton",
					designation: "Project Manager",
					socialLink: [
						{
							url: "https://www.facebook.com",
							icon: "fab fa-facebook-f",
						},
						{
							url: "https://twitter.com",
							icon: "fab fa-twitter",
						},
						{
							url: "https://www.instagram.com",
							icon: "fab fa-instagram",
						},
						{
							url: "https://www.linkedin.com",
							icon: "fab fa-linkedin-in",
						},
					],
				},
				{
					id: 6,
					imgSrc: "/images/team/team-member-06.jpg",
					name: "Maria Merry",
					designation: "Marketing Specialist",
					socialLink: [
						{
							url: "https://www.facebook.com",
							icon: "fab fa-facebook-f",
						},
						{
							url: "https://twitter.com",
							icon: "fab fa-twitter",
						},
						{
							url: "https://www.instagram.com",
							icon: "fab fa-instagram",
						},
						{
							url: "https://www.linkedin.com",
							icon: "fab fa-linkedin-in",
						},
					],
				},
				{
					id: 7,
					imgSrc: "/images/team/team-member-07.jpg",
					name: "Erik Mayar",
					designation: "Chief Analyst",
					socialLink: [
						{
							url: "https://www.facebook.com",
							icon: "fab fa-facebook-f",
						},
						{
							url: "https://twitter.com",
							icon: "fab fa-twitter",
						},
						{
							url: "https://www.instagram.com",
							icon: "fab fa-instagram",
						},
						{
							url: "https://www.linkedin.com",
							icon: "fab fa-linkedin-in",
						},
					],
				},
				{
					id: 8,
					imgSrc: "/images/team/team-member-08.jpg",
					name: "Jara Tamanna",
					designation: "Database Engineer",
					socialLink: [
						{
							url: "https://www.facebook.com",
							icon: "fab fa-facebook-f",
						},
						{
							url: "https://twitter.com",
							icon: "fab fa-twitter",
						},
						{
							url: "https://www.instagram.com",
							icon: "fab fa-instagram",
						},
						{
							url: "https://www.linkedin.com",
							icon: "fab fa-linkedin-in",
						},
					],
				},
			],
		};
	},
};
</script>
