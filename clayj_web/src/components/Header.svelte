<script lang="ts">
    import Hamburger from './Hamburger.svelte';
    let logo = '/images/robot.png';
</script>

<div class="flex justify-between px-4 bg-header-green sticky top-0">
    <a href="/">
        <img src={logo} alt="Robot Mascot" class="max-h-16 w-auto"/>
    </a>
    <Hamburger />
</div>