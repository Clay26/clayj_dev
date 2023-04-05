<script>
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
</script>

<div class="flex flex-col justify-between min-h-screen">
    <div>
        <Header />
    </div>
    <div class="flex-grow">
        <slot />
    </div>
    <div>
        <Footer />
    </div>
</div>