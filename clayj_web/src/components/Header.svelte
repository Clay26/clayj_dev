<script lang="ts">
    import NavBar from './NavBar.svelte';
    let logo = '/images/robot.png';
</script>

<div class="flex justify-between px-4 bg-header-green sticky top-0">
    <a href="/">
        <img src={logo} alt="Robot Mascot" class="max-h-16 w-auto"/>
    </a>
    <NavBar />
</div>