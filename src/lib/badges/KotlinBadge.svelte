<script>
    import Badge from "$lib/Badge.svelte";
</script>

<Badge color="#a32ae6" textColor="white">
    {#snippet icon()}
        <svg width="24" height="24" viewBox="0 0 24 24" style="color: currentColor;" stroke-width="0" class=""
             role="img" stroke="currentColor" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg"><title>Kotlin</title>
            <path d="M24 24H0V0h24L12 12Z"></path>
        </svg>
    {/snippet}
    Kotlin
</Badge>