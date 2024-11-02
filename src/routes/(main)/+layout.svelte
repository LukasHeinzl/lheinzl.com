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
        bottom: 0;
        padding: 2vh 10vw;
    }

    #content {
        overflow-y: auto;
        overflow-x: hidden;

        min-height: 100%;
        height: 100%;
        max-height: 100%;

        padding: 0.6rem;
    }

    @media screen and (max-width: 999px) {
        main {
            padding-left: 7vw;
            padding-right: 11vw;
        }
    }

    @media screen and (max-width: 599px) {
        main {
            padding-left: 5vw;
            padding-right: 13vw;
        }
    }

    @media screen and (max-width: 399px) {
        main {
            padding-left: 3vw;
            padding-right: 15vw;
        }
    }
</style>