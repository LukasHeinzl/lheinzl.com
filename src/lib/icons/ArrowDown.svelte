<script lang="ts">
    interface Props {
        width?: string;
        height?: string;
    }

    const {width = "1em", height = "1em"}: Props = $props();
</script>

<svg viewBox="0 0 24 24" {width} {height}>
    <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" fill="currentColor"/>
</svg>