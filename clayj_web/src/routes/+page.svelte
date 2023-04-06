<script lang="ts">
	import WelcomeBanner from "../components/WelcomeBanner.svelte";
	import ContentItem from "../components/ContentItem.svelte";
</script>

<div class="homepage flex flex-col flex-grow min-h-screen">
	<WelcomeBanner />
	<div class="flex flex-col md:flex-row text-white mx-8 my-10 gap-4">
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

<style>
	.homepage {
        background-color: #1C444D;
	}
</style>