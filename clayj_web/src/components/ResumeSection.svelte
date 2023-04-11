<script lang="ts">
    export let SectionName: string;
</script>

<div class="flex flex-col gap-2">
    <h2 class="text-lg md:text-xl font-bold">{SectionName}</h2>
    <slot />
</div>  