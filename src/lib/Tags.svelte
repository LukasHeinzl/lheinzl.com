<script lang="ts">
    import Label from "$lib/icons/Label.svelte";
    import Pound from '$lib/icons/Pound.svelte';

    interface Props {
        tags: string[];
        tagClicked?: (tag: string) => void;
        children?: import('svelte').Snippet;
    }

    let {
        tags, tagClicked = () => {
        }, children
    }: Props = $props();
</script>

<div class="tags">
    <div class="title">
        <span class="icon"><Label/></span>
        <span class="label">{#if children}{@render children()}{:else}Tags:{/if}</span>
    </div>
    <ul class="list">
        {#each tags as tag}
            <li title="Tag: {tag}">
                <button class="tag" onclick={() => tagClicked(tag)}>
                    <span class="icon"><Pound/></span>
                    <span>{tag}</span>
                </button>
            </li>
        {:else}
            None
        {/each}
    </ul>
</div>

<style>
    .tags {
        margin: 1rem 0 1rem 0;
    }

    .title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem;
    }

    .list {
        margin-left: 0.5rem;
        display: flex;
        flex-flow: row wrap;
        gap: 0.5rem;
        list-style: none;
    }

    .tag {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: stretch;
        gap: .25rem;
        border: 3px solid var(--accent-col);
        color: var(--accent-col);
        background-color: transparent;
        padding: 0.3rem 0.7rem;
        border-radius: 0.4rem;
        font-weight: bold;
        opacity: .6;

        transition: all 200ms ease-out;
    }

    .tag:hover {
        opacity: 1;
        color: var(--bg-main);
        border-color: transparent;
        background-color: var(--accent-col);
        cursor: pointer;
    }

    .tag > .icon {
        margin-top: .1em;
        opacity: .4;
    }

    .title .label {
        font-weight: bold;
    }
</style>