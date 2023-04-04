<script>
    import NavItem from "./NavItem.svelte"

    const pages = [
        { href:"/", text:"Home" },
        { href:"https://blog.clayjackson.dev", text:"Blog" },
        { href:"/about", text:"About" }
    ];
</script>

{#each pages as page}
<NavItem {...page} />
{/each}