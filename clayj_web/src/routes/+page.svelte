<script lang="ts">
	import WelcomeBanner from "../components/WelcomeBanner.svelte";
	import ContentItem from "../components/ContentItem.svelte";
</script>

<div class="flex flex-col flex-grow items-stretch bg-darkblue">
	<div class="grow">
		<WelcomeBanner />
	</div>
	<div class="flex flex-col w-full lg:w-auto gap-8 max-w-sm lg:justify-between lg:flex-row lg:max-w-4xl lg:items-baseline lg:gap-10 text-white mx-8 my-10">
		<ContentItem>
			<span slot="heading">Cloud First Approach</span>

			<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
		</ContentItem>
		<ContentItem>
			<span slot="heading">Authentication Focused</span>

			<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
		</ContentItem>
		<ContentItem>
			<span slot="heading">Networking Based</span>

			<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
		</ContentItem>
	</div>
</div>