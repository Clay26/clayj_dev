<script lang="ts">
	import { onMount } from "svelte";
	import { isOpened } from "../stores/sidebar.ts";
	import WelcomeBanner from "../components/WelcomeBanner.svelte";
	import ContentItem from "../components/ContentItem.svelte";

    onMount(() => {
        isOpened.set(false);
    });
</script>

<div class="flex flex-col grow bg-darkblue">
	<WelcomeBanner />
	<div class="flex flex-col grow gap-8 text-white mx-8 my-10 lg:justify-between lg:flex-row lg:items-baseline lg:gap-10 lg:mx-12">
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