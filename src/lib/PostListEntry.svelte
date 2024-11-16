<script lang="ts">
    import Tags from "$lib/Tags.svelte";
    import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';
    import {page} from "$app/stores";
    import type {IPost} from "$lib/types";

    interface Props {
        href: string;
        post: IPost;
        tagClicked: (tag: string) => void;
    }

    let {href, post, tagClicked}: Props = $props();

    let viewCaption: string = $derived($page.params.type === 'projects' ? 'View project' : 'Read post');
</script>

<article class="postListEntry">
    {#if post.previewImage}
        <a href="{href}/" class="previewImage">
            <img src={post.previewImage} alt={post.title}/>
        </a>
    {/if}

    <section>
        <h2 class="h3 title">
            <a href="{href}/">{post.title}</a>
        </h2>
        <div>
            {#if post.published}
                <div class="published">Published: {post.published}</div>
            {/if}

            {#if post.timeline}
                <div class="published">
                    Timeline:

                    {#if typeof (post.timeline) === 'string'}
                        {post.timeline}
                    {:else if !post.timeline.to}
                        since {post.timeline.from}
                    {:else}
                        {post.timeline.from} - {post.timeline.to}
                    {/if}
                </div>
            {/if}

            <Tags tags={post.tags} {tagClicked}/>
        </div>
        <a href="{href}/" class="view-post">
            <ChevronRight/> {viewCaption}
        </a>
    </section>
</article>

<style>
    article {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;
        align-items: center;
    }

    .previewImage {
        display: block;
        flex: 1 0 12rem;
        height: 12rem;
        border: none;
    }

    .previewImage img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .7rem;
        box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    }

    section {
        flex: 5;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        padding: unset;
    }

    .title {
        font-weight: bold;
        padding: 0;
        margin-top: 0;
    }

    .title a {
        color: var(--text-main);
        border-color: transparent;
    }

    .title a:hover {
        color: var(--accent-col);
        border-color: var(--accent-col);
    }

    .published {
        opacity: .7;
        font-size: .9rem;
    }

    .view-post {
        color: var(--accent-col);
        border-color: var(--accent-col);
        margin-top: 1rem;

        transition: filter 200ms ease-out;
    }

    .view-post:hover {
        filter: brightness(.8);
    }

</style>