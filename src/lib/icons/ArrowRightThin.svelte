<script lang="ts">
    interface Props {
        width?: string;
        height?: string;
    }

    const {width = "1em", height = "1em"}: Props = $props();
</script>

<svg viewBox="0 0 24 24" {width} {height}>
    <path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" fill="currentColor"/>
</svg>