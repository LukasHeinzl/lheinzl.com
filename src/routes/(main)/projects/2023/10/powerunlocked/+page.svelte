<script>
    import Post from "$lib/Post.svelte";
    import ImageViewer from "$lib/ImageViewer.svelte";


    /**
     * @typedef {Object} Props
     * @property {any} data - from +layout.ts
     */

    /** @type {Props} */
    let {data} = $props();
</script>

<Post data={data.postData} prefix="projects">
    <p>
        "Power Unlocked" was my first ever VR project, being created in the first semester of my master studies.
        It is a VR escape room-like game, where you have to solve puzzles in order to escape.
        The game is set in an old power plant which used to be controlled by the military.
        There is only one way out: through the road tunnel which ends directly in front of the main entrance.
        Well, and you could climb through the hills underneath the power lines (not actually, but lore-wise).
    </p>

    <ImageViewer imageSrc="/posts/projects/2023/10/powerunlocked/outside.webp"
                 caption="An overview of the outside of the power plant"/>

    <h2>The story</h2>

    <p>
        As mentioned, the game is set in an old, now abandoned power plant.
        The player wakes up inside the fenced off area of the power plant, in front of the main entrance.
        They are awoken by a voice emitting from a headset they are wearing.
        This voice guides the player through the various parts of the facility and gives some insights about what used
        to be.
        Immediately after waking up, the voice does not seem to concerned about the player's well being.
        Instead, it simply focuses on guiding the player to execute its plan.
        In the end, after everything has been completed, the player is instructed to make their way to the main entrance
        for their escape.
        Once arriving there, the voice simply starts to laugh and rambles on about what is actually going on.
        The power plant used to be a secret military base containing atomic weapons.
        By starting the power plant back up, the player unleashed multiple nuclear war heads.
        The voice explains that it used to be one of the workers of this secret base.
        To make it seem like the power plant malfunctioned and to destroy any evidence, one of the nukes is launched to
        the facility.
        In the final moments, the voice tells the player to "look up and celebrate".
        Doing so yields to the player seeing a nuke rapidly descending towards them.
    </p>

    <ImageViewer imageSrc="/posts/projects/2023/10/powerunlocked/warehouse.webp"
                 caption="Climbing around inside the warehouse"/>

    <h2>Development</h2>

    <p>
        The game was created in Unity using the XR Interaction Toolkit and deployed as a standalone app for the Meta
        Quest 2.
        WWise was used as an audio middleware, not only allowing easy management of all sounds, but also the
        implementation of spacial audio into the game.
        The assets used were all bought from <a href="https://syntystore.com/collections/polygon" target="_blank">Synty
        Studios</a>.
        The dialog for the voice was generated using <a href="https://elevenlabs.io/" target="_blank">Eleven Labs</a>.
        The game, with all development, map / level design, and story, was created by me alone.
    </p>

    <ImageViewer imageSrc="/posts/projects/2023/10/powerunlocked/logo.webp" caption="Power Unlocked logo"/>
</Post>