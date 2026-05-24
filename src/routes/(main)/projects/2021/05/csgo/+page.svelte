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
        In the lecture "Basics of Video Technology and Production", in the second semester of my Media Technology
        studies,
        we were tasked with creating a multi-camera live production.
        Naturally, we decided to host a game of CounterStrike, pitting two teams against each other in a best of three.
        This was livestreamed on Twitch, and the cut-down version, which was handed in for the assignment, was later
        posted
        to <a href="https://www.youtube.com/watch?v=WGOBdHmxHIs" target="_blank">YouTube</a>.
        Since this is a german speaking study program, the video is also in German!
    </p>

    <ImageViewer imageSrc="/posts/projects/2021/05/csgo/chicken.webp"
                 caption="A rare picture of the in-game protagonist"/>

    <h2>Behind the scenes</h2>

    <p>
        The entire production took two days to complete.
        The first day started after lunch with transforming the large assembly hall of our university into a mobile
        production "studio".
        It was split into four areas:
    </p>

    <ul>
        <li>The heart of the production at the center</li>
        <li>Commentators in front</li>
        <li>One team to the left</li>
        <li>One team to the right</li>
    </ul>

    <ImageViewer imageSrc="/posts/projects/2021/05/csgo/overview.webp" caption="Overview of the production"/>

    <p>
        In the middle was where the control center was, containing audio and video mixing, streaming and the in-game
        cameras.
        From here, everything was coordinated.
        We used an assortment of equipment from the university's labs and equipment rental service.
        We used a Soundcraft EPM6 analog audio mixer and the Streamstar X7 running OBS for everything else.
        The PCs for the players and the in-game cameras were taken from a lab that was undergoing construction.
        Everything was connected through a couple of network switches, on a local network.
        It was ultimately connected to the university's network for a stable internet uplink.
        One of the two in-game camera PCs also served as a local game server.
    </p>

    <p>
        The commentators had headphones, on which they heard whats currently being streamed.
        They were equipped with wireless microphones.
        In front of them were three screens, showing what is currently being broadcast, as well as both in-game
        cameras.
    </p>

    <ImageViewer imageSrc="/posts/projects/2021/05/csgo/moderation.webp" caption="View of the commentators"/>

    <h2>The team</h2>

    <p>
        Overall, a total of eleven people were part of the production team, with three of them joining the other seven
        players during the games.
        The production was planned and overseen by myself.
    </p>

    <ul>
        <li>Video director, producer, planning: Lukas Heinzl (me)</li>
        <li>Audio director: Arno Enk</li>
        <li>Graphics: Sandra Rabba</li>
        <li>In-game cameras: Erik Grielenberger, Lukas Peter</li>
        <li>Assistant: Anna Bruckner</li>
        <li>Commentators: Robin Backnecht, <a href="https://cajetan.dev/" target="_blank">Cajetan Grill</a></li>
    </ul>

    <h3>Team EuroHoheiten</h3>

    <ul>
        <li>Michael Wagner (team leader)</li>
        <li>Simon Reimoser</li>
        <li>Philipp Parteder</li>
        <li>Lena Baumgartner</li>
        <li>Pierre-Luigi Gasciarino</li>
    </ul>

    <h3>Team Die Hoot-Hoots</h3>

    <ul>
        <li>Peter Stangl (team leader)</li>
        <li>Mara Rubak</li>
        <li>Andras Woltron</li>
        <li>Sergio Pajic</li>
        <li>Murat Ermis</li>
    </ul>

    <ImageViewer imageSrc="/posts/projects/2021/05/csgo/production.webp"
                 caption="Concentrated people at work, ignore my hair"/>
</Post>