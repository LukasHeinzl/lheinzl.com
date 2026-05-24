<script>
    import Badge from "$lib/Badge.svelte";
</script>

<Badge color="#0092f6" textColor="white">
    {#snippet icon()}
        <svg width="24" height="24" viewBox="0 0 24 24" style="color: currentColor;" stroke-width="0" class=""
             role="img" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title>Windows</title>
            <path d="M0,0H11.377V11.372H0ZM12.623,0H24V11.372H12.623ZM0,12.623H11.377V24H0Zm12.623,0H24V24H12.623"></path>
        </svg>
    {/snippet}
    Windows
</Badge>