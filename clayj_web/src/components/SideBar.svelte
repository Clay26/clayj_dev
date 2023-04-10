<script>
    import { toggleSideBar } from "../lib/utils.ts";
	import NavItem from "./NavItem.svelte";

    const pages = [
        { href:"/", text:"Home" },
        { href:"https://blog.clayjackson.dev", text:"Blog" },
        { href:"/resume", text:"Resume" }
    ];
</script>

<div class="flex flex-col justify-start items-center gap-10 font-bold">
    <button on:click={toggleSideBar} class="self-start text-banneraccent hover:text-banneraccentlt mx-5 my-3">
        X
    </button>
    {#each pages as page}
        <div>
            <NavItem {...page} />
        </div>
    {/each}
</div>