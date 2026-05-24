<script lang="ts">
    interface Props {
        width?: string;
        height?: string;
    }

    const {width = "1em", height = "1em"}: Props = $props();
</script>

<svg viewBox="0 0 24 24" {width} {height}>
    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor"/>
</svg>