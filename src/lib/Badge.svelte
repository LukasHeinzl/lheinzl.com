<script lang="ts">
    import type {Snippet} from "svelte";

    interface BadgeProps {
        color: string;
        textColor: string;
        icon: Snippet;
        children: Snippet;
    }

    const {color, textColor, icon, children}: BadgeProps = $props();
</script>

<div class="skill-badge" style:background-color={color} style:color={textColor}>
    {@render icon()}

    <span class="label">
        {@render children()}
    </span>
</div>

<style>
    .skill-badge {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        column-gap: .5rem;
        font-size: 1.1rem;
        padding: .3rem 1.25rem;
        border-radius: 1.5rem;
        max-width: fit-content;
    }

    .label {
        font-weight: bold;
    }
</style>