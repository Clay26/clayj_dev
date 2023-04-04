<script>
    import NavItem from "./NavItem.svelte"

    const pages = [
        { href:"https://www.clayjackson.dev", text:"Home" },
        { href:"https://blog.clayjackson.dev", text:"Blog" },
        { href:"/about", text:"About" }
    ];
</script>

{#each pages as page}
<NavItem {...page} />
{/each}