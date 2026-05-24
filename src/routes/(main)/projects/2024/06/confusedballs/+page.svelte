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
        During the second semester of my master studies, inside our master class, we had to create an AR app.
        I decided on making a small game and landed on an Angry Birds-esque game.
        It was implemented in Unity using AR Foundation and the XR Interaction Toolkit.
        Since I have an iPhone, I built the app on top of ARKit and deployed it to iOS.
    </p>

    <ImageViewer imageSrc="/posts/projects/2024/06/confusedballs/start_screen.webp"
                 caption="Start screen with all the important information"/>

    <p>
        The game had a start screen, showing the most important information of the game.
        Inside, you were put into an AR view.
        By moving around your phone, the game would detect flat surfaces and visualize them.
        Once a floor or table top has been detected, you can tap your screen to place the game on top of it.
        Then, you had to destroy the tower in front of you.
        Since it is an AR app, you can move around and shoot from all angles.
        Once the entire tower has been destroyed, the game celebrates with fireworks and a chime, before giving you the
        option to place a new tower.
    </p>

    <ImageViewer imageSrc="/posts/projects/2024/06/confusedballs/ingame.webp"
                 caption="In-game screenshot, shooting the tower"/>
</Post>