<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { isOpened } from '../stores/sidebar.js';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import SideBar from '../components/SideBar.svelte';
	import { toggleSideBar, closeSideBar } from '$lib/utils';

	let sidebarWidth:number;
    
    function calcSidebarWidth(windowWidth: number): number {
		// Small screen case: Sidebar takes up whole screen
		// Medium and Large screens: Sidebar takes up 25% of screen
		return windowWidth < 768 ? windowWidth : windowWidth * 0.25;
    }

	onMount(() => {
		sidebarWidth = calcSidebarWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            sidebarWidth = calcSidebarWidth(window.innerWidth);
        });
	});
</script>

<div class="flex flex-col min-h-screen w-full">
	<Header />
	<slot />
	<Footer />
</div>
{#if $isOpened}
	<div
		in:fly={{ x: sidebarWidth, duration: 500 }}
		out:fly={{ x: sidebarWidth, duration: 500 }}
		class="bg-bannerbg fixed top-0 right-0 h-full w-full md:w-[25%]"
        on:mouseleave={closeSideBar}
	>
		<SideBar />
	</div>
{/if}
