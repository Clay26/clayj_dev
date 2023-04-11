<script lang="ts">
    export let href="https://google.com";
    export let Name: string;
    export let Description: string;
    export let Timeframe: string;
    export let Duties: [string];
</script>

<div class="text-lg md:text-xl">
    <a {href} class="font-bold text-banneraccent">{Name}:</a>
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