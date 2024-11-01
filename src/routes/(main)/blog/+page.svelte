<script>
    import PostList from "$lib/PostList.svelte";

    
    /**
     * @typedef {Object} Props
     * @property {any} data - from +layout.ts
     */

    /** @type {Props} */
    let { data } = $props();
</script>

<!--<PostList data={data.postData} title="Personal blog"/>-->
Currently being reworked