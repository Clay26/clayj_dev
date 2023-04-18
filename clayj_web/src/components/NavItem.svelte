<script lang="ts">
    export let href = "https://www.clayjackson.dev";
    export let text = "Home";

    import { toggleSideBar } from "../lib/utils.ts";
</script>

<a {href} on:click={toggleSideBar} class="text-center text-banneraccent hover:text-banneraccentlt hover:underline">
    {text}
</a>