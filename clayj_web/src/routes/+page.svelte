<script lang="ts">
	import WelcomeBanner from "../components/WelcomeBanner.svelte";
	import ContentItem from "../components/ContentItem.svelte";
</script>

<div class="flex flex-col grow bg-darkblue">
	<WelcomeBanner />
	<div class="flex flex-col grow gap-8 text-white mx-8 my-10 lg:justify-between lg:flex-row lg:items-baseline lg:gap-10 lg:mx-12">
		<ContentItem>
			<span slot="heading">High Availability Focused</span>

			<p slot="content">Within Microsoft's Azure Active Directory (AAD) organization, even a minor decrease in availability can significantly impact our numerous Fortune 500 clients globally. As such, we strive to achieve a 99.999% availability rate. I have extensive experience operating within these high-availability environments, skillfully designing migrations, mitigations, and modifications that contribute to achieving this ambitious availability target. I have sharpened my skills in live site troubleshooting and incident response. Utilizing tools such as Data Explorer, Postman, and Wireshark, I have successfully navigated numerous challenging live site problems to ensure the smooth recovery of AAD services.</p>
		</ContentItem>
		<ContentItem>
			<span slot="heading">Large-Scale Service Background</span>

			<p slot="content">As a software engineer on the Azure Active Directory (AAD) team, I manage and maintain some of Microsoft's largest and most essential services. My primary responsibility was as an engineer on the AAD Gateway team, a Level 7 reverse proxy that functions as an API Gateway for most AAD services. Handling a staggering 200 billion requests daily, the AAD Gateway demanded extensive large-scale service expertise. In this high-volume environment, I have gained invaluable experience designing scalable features, addressing edge cases, and ensuring optimal performance.</p>
		</ContentItem>
		<ContentItem>
			<span slot="heading">Build Out Expertise</span>

			<p slot="content">I have successfully expanded numerous regions for complex services such as AAD Gateway, ESTS (the token issuance service for AAD), and Azure MFA. These build-outs demanded extensive troubleshooting in the codebase to identify and resolve missing dependencies, including Azure resources, configurations, role assignments, and more. Throughout the build-out process, I have continuously refined my approach and implemented automation where possible to streamline the expansion of new regions or environments. As a result, each subsequent build-out has become increasingly efficient, ensuring a smooth deployment process with minimal setbacks.</p>
		</ContentItem>
	</div>
</div>