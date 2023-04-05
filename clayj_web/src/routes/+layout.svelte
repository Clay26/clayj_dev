<script lang="ts">
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
</script>

<div class="flex flex-col justify-between min-h-screen">
    <div class="header sticky top-0" >
        <Header />
    </div>
    <div class="content flex-grow">
        <slot />
    </div>
    <div>
        <Footer />
    </div>
</div>