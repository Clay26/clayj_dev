<script lang="ts">
    import { toggleSideBar } from "../lib/utils.ts";

</script>

<label for="check" class="flex flex-col cursor-pointer w-12 justify-center gap-2">
    <button on:click={toggleSideBar} class="text-bannerbg text-3xl">&#9776</button>
</label>