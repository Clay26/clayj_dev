<script lang="ts">
    export let SectionName: string;
</script>

<div class="flex flex-col gap-2">
    <h2 class="text-2xl font-bold">{SectionName}</h2>
    <slot />
</div>  