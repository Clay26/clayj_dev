<script>
    export let href="https://google.com";
</script>

<div>
    <span class="font-bold text-lg">
        <a {href}><slot name="CompanyName"/></a>
        <slot name="Position" />
        <slot name="Dates" />
    </span>
</div>