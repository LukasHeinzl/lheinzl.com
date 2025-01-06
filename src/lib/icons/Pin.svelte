<script lang="ts">
    interface Props {
        width?: string;
        height?: string;
    }

    const {width = "1em", height = "1em"}: Props = $props();
</script>

<svg viewBox="0 0 24 24" {width} {height}>
    <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" fill="currentColor"/>
</svg>