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
        Imagine a world suspended in the vast void of space, shaped by surreal organic forms and shimmering crystalline
        structures.
        In Apophis, players don’t just explore this mysterious landscape—they unravel a tale of discovery, survival,
        and innovation.
        This VR adventure combines exploration, resource management, and immersive storytelling to create an experience
        like no other.
    </p>

    <ImageViewer imageSrc="/posts/projects/2024/03/apophis/Rendering.webp" caption="A rendering of the in-game world"/>

    <p>
        At the heart of Apophis lies the desire to create a fresh and captivating VR experience.
        Players take on the role of a scientist piloting a versatile vehicle designed for exploration and resource
        collection.
        Their journey?
        To traverse an alien world filled with obstacles, puzzles, and secrets, all while facing a looming threat
        embodied by a mischievous off-screen antagonist.
    </p>

    <p>
        Designed for the Meta Quest 3 VR headset, Apophis prioritizes simple, intuitive gameplay to ensure accessibility
        for new VR players while still captivating seasoned explorers.
        The single-player experience offers a smooth and immersive world that encourages players to advance at their own
        pace.
    </p>

    <ImageViewer imageSrc="/posts/projects/2024/03/apophis/Vehicle.webp" caption="A look at the player's vehicle"/>

    <p>
        The gameplay in Apophis revolves around three primary elements:
    </p>

    <ol>
        <li>
            <b>Exploration:</b> Navigate four distinct areas, each presenting unique environments, dangers, and
            opportunities.
        </li>
        <li>
            <b>Resource Management:</b> Destroy certain parts of the world to gather resources and unlock new paths.
            Players can use harvested materials to replicate key items, progressing further into the game.
        </li>
        <li>
            <b>Obstacle Navigation:</b> Utilize the vehicle’s various modes, including a gravity gun, laser, and
            flamethrower, to overcome different challenges.
        </li>
    </ol>

    <p>
        Each obstacle requires players to think critically and leverage their resources wisely. Tutorials guide players
        when encountering new mechanics, ensuring a seamless and engaging learning curve.
    </p>

    <h2>Project overview</h2>

    <p>
        Apophis was developed as part of the master class in Augmented & Virtual Reality within the Interactive
        Technologies program at St. Pölten UAS during the 2024 summer and winter semesters.
        I personally was the project and development lead.
        I was responsible for developing all vehicle mechanics, such as the gun, movement and vehicle modules.
        As for tools, everything was developed in Unity using C#.
        The audio was implemented using the Wwise middleware.
        The 3D team used a combination of Maya and Blender for creating our assets.
        Furthermore, Notion was used for keeping track of tasks and notes.
    </p>

    <h3>Team</h3>

    <ul>
        <li><a href="https://cajetan.dev/" target="_blank">Cajetan Grill</a>: Audio Lead, Development, UI</li>
        <li>Lukas Heinzl (me): Project lead, development lead</li>
        <li>Dawid Lewandowski: World building, level design, 3D</li>
        <li>Srdjan Pajic: Story lead, animation, 3D</li>
        <li>Ewelina Pawlik: 3D lead</li>
        <li>Martin Steinmetz: Game design lead, development</li>
        <li>Isabella Willmann: Story, marketing, graphics</li>
    </ul>

    <p>
        Supported by:
    </p>

    <ul>
        <li>Alma Dzehverovic: Audio / sound design</li>
        <li>Arno Enk: 3D modelling</li>
        <li>Finn Schneppenheim: Logo, UI design</li>
    </ul>

    <h3>Further information</h3>

    <p>
        If you are interested, you can find more information about the game here:
    </p>

    <ul>
        <li>
            <a href="/posts/projects/2024/03/apophis/GDD.pdf" target="_blank">
                Game design document with all the details about the game
            </a>
        </li>
        <li>
            <a href="https://youtu.be/s0e1s9sfgR4" target="_blank">
                Game trailer on YouTube
            </a>
        </li>
        <li>
            <a href="/posts/projects/2024/03/apophis/apophis.apk" target="_blank">
                Playable APK for the Meta Quest 3
            </a>
        </li>
    </ul>

</Post>