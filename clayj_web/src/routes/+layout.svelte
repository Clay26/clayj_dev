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
<div class="bg-bannerbg top-0 h-full w-48 {isSideBarOpen ? 'fixed right-0' : 'hidden right-[-250px]'}">
    <SideBar />
</div>