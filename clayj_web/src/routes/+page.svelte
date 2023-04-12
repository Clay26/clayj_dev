<script lang="ts">
	import WelcomeBanner from "../components/WelcomeBanner.svelte";
	import ContentItem from "../components/ContentItem.svelte";
</script>

<div class="flex flex-col grow bg-darkblue">
	<WelcomeBanner />
	<div class="flex flex-col grow gap-8 text-white mx-8 my-10 lg:justify-between lg:flex-row lg:items-baseline lg:gap-10 lg:mx-12">
		<ContentItem>
			<span slot="heading">High Availability Focused</span>

			<p slot="content">Within Microsoft's Identity organization, even a minor decrease in availability can significantly impact our numerous Fortune 500 clients globally. As such, we strive to achieve a 99.999% availability rate. I have extensive experience operating within high-availability environments, skillfully designing migrations, mitigations, and modifications that contribute to achieving this ambitious availability target. I have sharpened my skills in live site troubleshooting and incident response. Utilizing tools such as Data Explorer, Postman, and Wireshark, I have successfully navigated numerous challenging live site problems to ensure the smooth recovery of AAD services.</p>
		</ContentItem>
		<ContentItem>
			<span slot="heading">Large-Scale Service Expertise</span>

			<p slot="content">As a software engineer on the Azure Active Directory (AAD) team, I have sharpened my skills in managing and maintaining some of Microsoft's largest and most essential services. My primary responsibility was as an engineer on the AAD Gateway team, a Level 7 reverse proxy that functions as an API Gateway for most AAD services. Handling a staggering 200 billion requests daily, the AAD Gateway demanded extensive large-scale service expertise. In this high-volume environment, I have gained invaluable experience designing scalable features, addressing edge cases, and ensuring optimal performance.</p>
		</ContentItem>
		<ContentItem>
			<span slot="heading">High-Volume API Gateway Management</span>

			<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
		</ContentItem>
	</div>
</div>