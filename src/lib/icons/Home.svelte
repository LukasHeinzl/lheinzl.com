<script lang="ts">
    interface Props {
        width?: string;
        height?: string;
    }

    const {width = "1em", height = "1em"}: Props = $props();
</script>

<svg viewBox="0 0 24 24" {width} {height}>
    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" fill="currentColor"/>
</svg>