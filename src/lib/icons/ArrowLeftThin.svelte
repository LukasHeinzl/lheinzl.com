<script lang="ts">
    interface Props {
        width?: string;
        height?: string;
    }

    const {width = "1em", height = "1em"}: Props = $props();
</script>

<svg viewBox="0 0 24 24" {width} {height}>
    <path d="M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z" fill="currentColor"/>
</svg>