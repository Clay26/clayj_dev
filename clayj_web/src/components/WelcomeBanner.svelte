<script lang="ts">
    export let backgroundImage = "/images/BannerPhoto.png";
</script>

<div class="min-w-fit h-28"style="background-image: url({backgroundImage});">
    <div>
        <slot></slot>
    </div>
</div>