<script>
    import Nav from '$lib/Nav.svelte';
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<main>
    <div id="content">
        {@render children?.()}
    </div>
</main>

<Nav/>

<style>
    main {
        top: 0;
        left: 0;
        right: 0;
        bottom: 4rem;
        padding: 5vh 10vw;
    }


    #content {
        overflow-y: auto;
        overflow-x: hidden;

        min-height: 100%;
        height: 100%;
        max-height: 100%;

        padding: 0.6rem;
    }

    #content:last-child {
        margin-bottom: 4rem;
    }
</style>