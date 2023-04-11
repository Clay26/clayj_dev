<script lang="ts">
	import { onMount } from "svelte";
	import { isOpened } from "../../stores/sidebar.ts";
	import Header from "../../components/Header.svelte";

    onMount(() => {
        isOpened.set(false);
    });
</script>
