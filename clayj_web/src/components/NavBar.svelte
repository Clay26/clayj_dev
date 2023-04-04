<script>
    import NavItem from "./NavItem.svelte"

    const pages = [
        { href:"/", text:"Home" },
        { href:"https://blog.clayjackson.dev", text:"Blog" },
        { href:"/about", text:"About" }
    ];
</script>

<div class="flex justify-between gap-10">
    {#each pages as page}
    <NavItem {...page} />
    {/each}
</div>