<script>
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
</script>

<div class="flex-col">
	<Header />
	<slot />
	<Footer />
</div>