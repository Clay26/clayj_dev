<script lang="ts">
    import NavBar from './NavBar.svelte';
    let logo = '/images/robot.png';
</script>

<div class="header flex justify-between px-10">
    <a href="/">
        <img src={logo} alt="Robot Mascot" class="max-h-12 w-auto"/>
    </a>
    <NavBar />
</div>

<style>
    .header {
        background-color: #ABDBB9;
    }
</style>