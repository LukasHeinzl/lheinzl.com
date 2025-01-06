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
        "Finding Emo" immerses players in a mysterious virtual reality world crafted with Unity and Wwise, where sound,
        emotion, and environment seamlessly blend.
        This project emerged during the
        <a href="https://creativemediasummer.fhstp.ac.at/workshops/virtual-music-space" target="_blank">
            Virtual Music Space</a>
        workshop at the
        <a href="https://creativemediasummer.fhstp.ac.at/" target="_blank">Creative Media Summer School</a>
        at St. Pölten UAS, brought to life by a committed team of 13 composers and audio engineers, along with 3
        developers and software engineers, all within a mere 5 days.
    </p>

    <p>
        The adventure begins in a dark void, with players standing in shallow water.
        Ahead of them, a peculiar energy splits into seven glowing elements, each symbolizing a distinct emotion: anger,
        fear, joy, disgust, disdain, surprise, and grief.
    </p>

    <ImageViewer imageSrc="/posts/projects/2024/06/findingemo/all_elements.png"
                 caption="All elements positioned in an ominous circle"/>

    <p>
        The experience initiates with an immersive room tone.
        As players lift the glowing items from the water, each item unveils its own evocative soundtrack.
        Rotating the objects introduces up to three additional layers of sound, enriching the auditory landscape.
        Returning the objects to their original position simplifies the sound to its base layer, and submerging them
        back into the water mutes them entirely.
    </p>

    <p>
        In this dynamic sonic environment, players have the freedom to position and arrange the emotional elements as
        they desire, creating their own unique symphony.
        "Finding Emo" is not a game; it’s an exploration of emotion through sound and interaction, providing a deeply
        personal and reflective VR experience where every choice reshapes the auditory and visual surroundings.
    </p>

    <h2>Technical details</h2>

    <p>
        Finding Emo utilizes Unity with the XR Interaction Toolkit, incorporating hand tracking for enhanced
        interactivity.
        The audio environment is managed using Wwise as the audio middleware.
        Each emotional element continuously plays its soundtrack, which is low-passed and silenced when submerged
        underwater.
    </p>

    <ImageViewer imageSrc="/posts/projects/2024/06/findingemo/anger.webp"
                 caption="Interacting with the element of anger"/>

    <p>
        The rotational movement of each element is tracked and linked to a Wwise RTPC, modulating the intensity of
        additional sound layers.
        Spatial audio is achieved using the Reflect and Convolution Reverb plugins, with rendering and binauralization
        handled by the Meta XR Presence SDK, ensuring a fully immersive auditory experience.
    </p>

    <p>
        Each emotion has an assigned color, which is visualized through the element's texture and the single point light
        in the scene.
        The light's intensity and color is determined by how many and which elements are out of the water.
    </p>

    <p>
        You can watch an in game video of the project <a href="https://youtu.be/An6R6UQhaMo" target="_blank">here</a>.
    </p>

    <h2>Credits</h2>

    <p>
        Audio
    </p>

    <ul>
        <li>Kaiser Gabriel - Audio Lead</li>
        <li>Askar Ali & Pfeiffer Lukas - Disdain</li>
        <li>Dzehverovic Alma - Fear</li>
        <li>Kaiser Gabriel & Artner Dominik - Disgust</li>
        <li>Mayer Konstantin - Grief</li>
        <li>Moisl Jakob & Brandstetter Mario - Anger</li>
        <li>Schönfeldinger Leonie & Morgenroth Daniel - Surprise</li>
        <li>Weber Désirée - Joy</li>
    </ul>

    <p>
        Development & Implementation
    </p>

    <ul>
        <li>Heinzl Lukas (me) & Steinmetz Martin - Unity Development</li>
        <li><a href="https://cajetan.dev/" target="_blank">Grill Cajetan</a> - Audio Development & Implementation</li>
        <li>Pfeiffer Paul - Wwise Implementation</li>
    </ul>

    <p>
        Supervisors
    </p>

    <ul>
        <li>Aichinger Thomas</li>
        <li>Schmellenkamp Oliver</li>
    </ul>
</Post>