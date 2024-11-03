<script lang="ts">
    import Tags from "$lib/Tags.svelte";
    import ArrowLeftThin from "svelte-material-icons/ArrowLeftThin.svelte";
    import ArrowRightThin from "svelte-material-icons/ArrowRightThin.svelte";
    import {TextUtils} from "$lib/utils";
    import {page} from "$app/stores";
    import type {IPost, IPostList} from "$lib/types";

    interface Props {
        data: IPostList;
        prefix: string;
        showPostList?: boolean;
        children?: import('svelte').Snippet;
    }

    let {data, prefix, showPostList = false, children}: Props = $props();
    let currentPostParts = $derived($page.url.toString().split("/").reverse());
    let currentPost = $derived(currentPostParts[3] + "/" + currentPostParts[2] + "/" + currentPostParts[1]);

    interface IExtendedPost extends IPost {
        previousPost?: IPost;
        previousPostHref?: string;
        nextPost?: IPost;
        nextPostHref?: string;
    }

    async function loadPost(): Promise<IExtendedPost> {
        let post = data.posts[currentPost] as IExtendedPost;
        let keys = Object.keys(data.posts);
        let idx = keys.indexOf(currentPost);

        if (idx > 0) {
            post.previousPost = data.posts[keys[idx - 1]];
            post.previousPostHref = keys[idx - 1];
        }

        if (idx > -1 && idx < keys.length - 1) {
            post.nextPost = data.posts[keys[idx + 1]];
            post.nextPostHref = keys[idx + 1];
        }

        return post;
    }
</script>

{#await loadPost() then post}
    <h1>{post.title}</h1>
    <div id="metadata">
        <span class="published">Published: {post.published}</span>
        <Tags tags={post.tags}/>
    </div>
    <div class="post-content">
        {@render children?.()}

        {#if showPostList}
            <ul>
                {#each Object.entries(data.posts) as [p, postData]}
                    {#if postData.tags[0] === post.tags[0]}
                        {#if p === currentPost}
                            <li><em><strong>[You are here]</strong> {postData.title}</em></li>
                        {:else}
                            <li>
                                <a href="/blog/{p}/">{postData.title}</a>
                            </li>
                        {/if}
                    {/if}
                {/each}
            </ul>
        {/if}
    </div>

    <div class="prevNext">
        {#if post.previousPost}
            <a href="/{prefix}/{post.previousPostHref}/" class="prev"
               title="Go to previous post: '{post.previousPost.title}'">
                <span class="arrow"><ArrowLeftThin/></span>
                <span class="caption">
                    <span class="title">{TextUtils.limit(post.previousPost.title, 40)}</span>
                    <span class="type">Previous</span>
                </span>
            </a>
        {:else}
            <span></span>
        {/if}

        {#if post.nextPost}
            <a href="/{prefix}/{post.nextPostHref}/" class="next" title="Go to next post: '{post.nextPost.title}'">
                <span class="caption">
                    <span class="title">{TextUtils.limit(post.nextPost.title, 40)}</span>
                    <span class="type">Next</span>
                </span>
                <span class="arrow"><ArrowRightThin/></span>
            </a>
        {:else}
            <span></span>
        {/if}
    </div>
{:catch e}
    An error occurred during loading: {e}
{/await}

<style>
    #metadata {
        margin-bottom: 1rem;
    }

    .post-content :global(> ul) {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        margin-top: 2rem;
        line-height: 1.4rem;
    }

    .prevNext {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        gap: .5rem;
        margin-top: 2rem;
    }

    .prevNext > a {
        color: var(--accent-col);
        border-color: var(--accent-col);
        display: flex;
        flex-flow: row nowrap;
        gap: .7rem;
        padding-bottom: .5rem;
        align-items: center;

        transition: all 200ms ease-out;
    }

    .prevNext > a:hover {
        filter: brightness(.8);
    }

    .prevNext .caption {
        display: flex;
        flex-flow: column nowrap;
        gap: .2rem;
    }

    .prevNext .prev {
        min-width: 10rem;
    }

    .prevNext .next {
        text-align: right;
    }

    .prevNext .type {
        font-weight: bold;
    }

    .prevNext .title {
        font-size: 1rem;
        opacity: .8;
        font-style: italic;
    }

    .prevNext .arrow {
        font-size: 1.5rem;
    }
</style>