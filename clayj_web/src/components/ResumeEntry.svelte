<script lang="ts">
    export let href="https://google.com";
    export let name: string;
    export let description: string;
    export let timeframe: string;
    export let duties: [string];
</script>

<div class="text-lg md:text-xl">
    <a {href} class="font-bold text-banneraccent hover:text-banneraccentlt">{name}:</a>
    <span>
        {description} {timeframe}
    </span>
    <ul class="px-10 py-1">
        {#each duties as duty}
        <li class="py-1">
            {duty}
        </li>
        {/each}
    </ul>
</div>