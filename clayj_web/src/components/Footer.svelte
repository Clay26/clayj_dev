<script lang="ts">
    import NavItem from "./NavItem.svelte";

    const contacts = [
        { href:"https://github.com/Clay26", text:"Clay26 - GitHub" },
        { href:"https://twitter.com", text:"Twitter" },
        { href:"https://github.com/Clay26/clayj_dev", text:"clayj_dev" }
    ];
</script>

<div class="self-end flex justify-between min-w-full px-10 h-10 bg-footer text-white">
    {#each contacts as contact}
    <NavItem {...contact} />
    {/each}
</div>
