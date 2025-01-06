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
        For the elective module "Game Design and Experience" in the fourth semester of my Media Technology studies, we
        had to create a game.
        In a late night Discord call, I mentioned
        <a href="https://store.steampowered.com/app/1369340/Cats_Organized_Neatly/" target="_blank">
            Cats Organized Neatly
        </a>
        to the others.
        Based on that we had an idea for a game we could create for the lecture: Cat themed Tetris, aka. Catris.
        With the idea pitched and approved in the lecture, we got to working.
    </p>

    <ImageViewer imageSrc="/posts/projects/2022/03/catris/main_menu.webp" caption="A look around the cute main menu"/>
    <ImageViewer imageSrc="/posts/projects/2022/03/catris/howto.webp" caption="Game explanation and controls"/>

    <p>
        Since Tetris is pretty self-explanatory (if not, have you been living under a rock?), I will briefly explain
        what we did differently and leave you with some screenshots from the game.
        The twist we came up with was different themes, called catpacks.
        By collecting points while playing, you were able to unlock catpacks as you went along.
        Since this was only a semester project, we only had two cat packs: default and classic.
        The classic catpack had just regular looking Tetris pieces.
        However, the code was structured in a way, to allow as many catpacks as we would have liked.
    </p>

    <ImageViewer imageSrc="/posts/projects/2022/03/catris/catpacks.webp" caption="Selecting a new catpack"/>
    <ImageViewer imageSrc="/posts/projects/2022/03/catris/ingame.webp"
                 caption="A round of Catris with the default catpack selected"/>

    <p>
        I also ventured into the realm of music production for the first time ever and created two sound tracks that
        would play in the background while playing.
        We also spent an entire afternoon in the studio recording various sounds for the game.
        Everything you hear, all music and sound effects, were created by us.
        The game itself was coded in Unity and used WWise as an audio middleware.
        You can watch a video containing most of what the game had to offer
        <a href="https://youtu.be/ls-iKvrdJ80" target="_blank">
            here
        </a>.
    </p>

    <h2>Team</h2>

    <ul>
        <li>Robin Backnecht: Sound</li>
        <li>Anna Bruckner: Art</li>
        <li>Lukas Heinzl (me): Development, sound & music, project lead</li>
        <li>Sandra Rabba: Art</li>
    </ul>
</Post>