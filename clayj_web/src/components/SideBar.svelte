<script>
    import { toggleSideBar } from "../lib/utils.ts";
	import NavItem from "./NavItem.svelte";

    const pages = [
        { href:"/", text:"Home" },
        { href:"https://blog.clayjackson.dev", text:"Blog" },
        { href:"/resume", text:"Resume" }
    ];
</script>

<div class="flex flex-col justify-start items-start px-4 gap-5 font-bold text-2xl">
    <button on:click={toggleSideBar} class="self-start text-banneraccent hover:text-banneraccentlt text-3xl my-3">
        Menu
    </button>
    {#each pages as page}
        <div>
            <NavItem {...page} />
        </div>
    {/each}
</div>