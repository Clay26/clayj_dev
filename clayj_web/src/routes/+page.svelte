<script lang="ts">
	import WelcomeBanner from "../components/WelcomeBanner.svelte";
	import ContentItem from "../components/ContentItem.svelte";
</script>

<div class="homepage flex flex-col gap-14 flex-grow min-h-screen">
	<WelcomeBanner>
		Welcome to Clay J dev!
	</WelcomeBanner>
	<div class="flex justify-between text-white py-40 gap-20">
		<div class="px-20 border-r-2 border-slate-500">
			<ContentItem>
				<span slot="heading">Cloud First Approach</span>

				<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
			</ContentItem>
		</div>
		<div class="px-20 border-r-2 border-slate-500">
			<ContentItem>
				<span slot="heading">Authentication Focused</span>

				<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
			</ContentItem>
		</div>
		<div class="px-20">
			<ContentItem>
				<span slot="heading">Networking Based</span>

				<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
			</ContentItem>
		</div>
	</div>
</div>

<style>
	.homepage {
        background-color: #1C444D;
	}
</style>