<script lang="ts">
    import "../app.css";
    import { isOpened } from "../stores/sidebar.js";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import SideBar from "../components/SideBar.svelte";
</script>

<div class="flex flex-col min-h-screen w-full">
    <Header />
    <slot />
    <Footer />
</div>
<div class="bg-bannerbg fixed top-0 right-0 h-full w-full md:w-56 lg:w-72 transistion-all ease-in-out duration-500 {$isOpened ? '' : 'translate-x-full'}">
    <SideBar />
</div>