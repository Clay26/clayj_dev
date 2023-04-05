<script lang="ts">
    import NavItem from "./NavItem.svelte";

    const contacts = [
        { href:"https://github.com/Clay26", text:"Clay26 - GitHub" },
        { href:"https://twitter.com", text:"Twitter" },
        { href:"https://github.com/Clay26/clayj_dev", text:"clayj_dev" }
    ];
</script>

<div class="footer flex justify-between px-10 h-10">
    {#each contacts as contact}
    <NavItem {...contact} />
    {/each}
</div>

<style>
    .footer {
        background-color: #071F24;
        color: white;
    }
</style>
