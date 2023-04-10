<script lang="ts">
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
</script>

<div class="flex flex-col min-h-screen w-full">
        <Header />
    <div class="flex-grow">
        <slot />
    </div>
    <Footer />
</div>