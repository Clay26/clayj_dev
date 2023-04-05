<script lang="ts">
    export let href="https://google.com";
    export let Name: string;
    export let Description: string;
    export let Timeframe: string;
    export let Duties: [string];
</script>

<div class="text-xl">
    <a {href} class="company font-bold">{Name}:</a>
    <span>
        {Description} {Timeframe}
    </span>
    <div class="px-10 py-1">
        {#each Duties as Duty}
        <li class="py-1">
            {Duty}
        </li>
        {/each}
    </div>
</div>

<style>
    a {
        color: #107A91;
    }
</style>