<script>
	import Header from "../components/Header.svelte";
	import WelcomeBanner from "../components/WelcomeBanner.svelte";
	import ContentItem from "../components/ContentItem.svelte";
</script>

<Header />
<WelcomeBanner>
	Welcome to Clay J dev!
</WelcomeBanner>
<ContentItem>
	<span slot="heading">Brand Design</span>

	<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
</ContentItem>
<ContentItem>
	<span slot="heading">Marketing</span>

	<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
</ContentItem>
<ContentItem>
	<span slot="heading">Venture Captial</span>

	<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.</p>
</ContentItem>