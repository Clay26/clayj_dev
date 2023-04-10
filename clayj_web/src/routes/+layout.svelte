<script lang="ts">
    import "../app.css";
    import { isOpened } from "../stores/sidebar.js";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import SideBar from "../components/SideBar.svelte";

    let isSideBarOpen = false;

    isOpened.subscribe(value => {
        isSideBarOpen = value;
    });
</script>

<div class="flex flex-col min-h-screen w-full">
    <Header />
    <div class="flex-grow">
        <slot />
    </div>
    <Footer />
</div>
<div class="bg-bannerbg fixed top-0 h-full w-full md:w-56 lg:w-72 transistion-all ease-in-out duration-300 {isSideBarOpen ? 'right-0 opacity-100' : 'opacity-0 right-[-250px]'}">
    <SideBar />
</div>