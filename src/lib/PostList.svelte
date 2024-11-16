<script lang="ts">
    import PostListEntry from "$lib/PostListEntry.svelte";
    import Pin from "svelte-material-icons/Pin.svelte";
    import ArrowUp from "svelte-material-icons/ArrowUp.svelte";
    import ArrowDown from "svelte-material-icons/ArrowDown.svelte";
    import NewspaperVariantOutline from 'svelte-material-icons/NewspaperVariantOutline.svelte';
    import Tags from "$lib/Tags.svelte";
    import type {IPostList} from "$lib/types";

    interface Props {
        title: string;
        data: IPostList;
    }

    let {title, data}: Props = $props();

    let sortOrder: string = $state("newest");
    let selectedTags: string[] = $state([]);

    function toggleSortOrder(): void {
        sortOrder = sortOrder === "newest" ? "oldest" : "newest";
    }

    function getPostsSortedAndFiltered(data: IPostList, order: string, tags: string[]) {
        let filtered = Object.entries(data.posts).filter(([_, postData]) => {
            if (tags.length === 0) return true;
            return postData.tags.some(tag => tags.includes(tag));
        });
        return order === "newest" ? filtered.reverse() : filtered;
    }

    function handleTagClick(tag: string): void {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
        } else {
            selectedTags = [...selectedTags, tag];
        }
    }
</script>

<div>
    <h1>{title}</h1>

    {#if data.hasOwnProperty("pinned") && data.posts.hasOwnProperty(data.pinned)}
        <p class="title h2">
            <span class="icon">
                <Pin/>
            </span>

            <span class="caption">
                Pinned post
            </span>
        </p>

        <div class="post pinned">
            <PostListEntry href={data.pinned} post={data.posts[data.pinned]} tagClicked={handleTagClick}/>
        </div>
    {/if}

    <p class="title h2">
        <span class="icon">
            <NewspaperVariantOutline/>
        </span>
        <span class="caption">
            Recent posts
        </span>
    </p>

    {#if selectedTags.length > 0}
        <Tags tags={selectedTags} tagClicked={handleTagClick}>Filtered tags:</Tags>
    {/if}

    <button onclick={() => toggleSortOrder()}>
        {#if sortOrder === "newest"}
            <ArrowDown/>
            <strong>Newest</strong> first
        {:else}
            <ArrowUp/>
            <strong>Oldest</strong> first
        {/if}
    </button>

    {#each getPostsSortedAndFiltered(data, sortOrder, selectedTags) as [href, post]}
        <div class="post">
            <PostListEntry {href} {post} tagClicked={handleTagClick}/>
        </div>
    {:else}
        Nothing to show
    {/each}
</div>

<style>
    .post {
        margin-bottom: 2rem;
        background-color: var(--bg-main);
        border-radius: .7rem;
        padding: 2rem;
        box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    }

    .title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: .7rem;
    }

    button {
        color: var(--link-col);
        background: transparent;
        border: 2px solid var(--link-col);
        border-radius: 0.2rem;
        margin-bottom: 0.5rem;
        padding: .5rem .8rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        transition: all 200ms ease-out;
    }

    button:hover {
        color: var(--bg-main);
        border-color: transparent;
        background-color: var(--link-col);
    }
</style>