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
        Very early on I was interested in games and how they are developed.
        So, rest assured, once I got into Java due to Minecraft, I searched for game development tutorials.
        And I found a small gem (at least for the time):
        <a href="https://www.youtube.com/playlist?list=PL8CAB66181A502179" target="_blank">
            Java 2D Game Engine Development by vanZeben
        </a>
    </p>

    <p>
        I followed the tutorial closely and the result was "The Music of Ghosts".
        It was intended to be a horror-like game.
        Alas, I never got there.
        However, I did manage to get multiplayer running briefly, albeit very laggy.
        You can skim through the videos to get an idea of the game and code.
        In the options you were able to reset the save game, change the username (which would have been used for
        multiplayer), and view the controls.
    </p>

    <ImageViewer imageSrc="/posts/projects/2014/07/tmog/main_menu.webp" caption="Main menu of the game"/>

    <p>
        I did add a few of my own twists.
        For example, in the main menu there was a constant flicker and random sounds that played - spoooky.
        The main menu also ended up being a fun in-between of two forms of input: keyboard and mouse.
        All controls were done with the keyboard, therefore also the menu item selection.
        I wanted to be <i>fancy</i> and make the menu items clickable.
        It did work, however, it was a frankenstein of code between mouse and keyboard interactions.
        You had to click on the menu item you wanted to go into and then still press enter to actually go into it.
        Never let them know your next move!
    </p>

    <ImageViewer imageSrc="/posts/projects/2014/07/tmog/level1.webp" caption="The beginning of level 1"/>

    <p>
        The levels were sprite based and aligned on a perfect grid.
        Oh, and they were extremely simple.
        Each pixel in the level PNG represented a tile, with the pixel color determining which tile it was.
        All tiles were inside a single PNG, each tile being 8x8 pixels.
        Tiles were either solid or walkable.
        Water was a special tile, having both an animation and causing only the players head to rendered.
        To complete a level, all you had to do was collect keys to unlock new parts of the level in order to reach the
        crown and continue to the next level.
        There was <i>a lot</i> of backtracking - game design who?
        In total, there were four levels.
        However, the game itself crashes after completing level two (at least in the build that I found).
    </p>

    <p>
        Inspired by Minecraft, I added a debug screen, displayed while holding down F3.
        It wasn't the most useful and some stats weren't even accurate, but ey, you gotta try.
        There was also a way to enable fullscreen, which only made it into the engine, but not the original game.
    </p>

    <ImageViewer imageSrc="/posts/projects/2014/07/tmog/debug.webp" caption="A simple in-game debug screen"/>

    <h2>From game to engine</h2>

    <p>
        Speaking of engine...
        After the idea of the game was scrapped, I wanted to turn it into a standalone 2D engine.
        Therefore, the "Glass Engine 2D" was born - GE2D for short.
        Instead of all game resources (sounds, PNGs, etc.) being hardcoded, they were now loaded from a folder.
        Similar, the menus were now loaded from a custom text file format (who needs XML or JSON).
        First step was to get the original game to work with the new engine design.
        The next step would have been to add a couple new features and then actually design a new game.
        However, I instead moved on to other projects.
        One of the last things I implemented was a generic error screen, which would be displayed if the game crashed.
        I learned that you can use a global exception handler in Java, which sounds very unorthodox, yet here we are.
    </p>

    <ImageViewer imageSrc="/posts/projects/2014/07/tmog/error_screen.webp" caption="Error screen as a last resort"/>

    <p>
        This was my first major project after starting to learn how to program.
        It was a fun challenge and I gained a lot of experience from it.
        It also marked the beginning of my interest in game development.
        After a lot of years of wandering through various other topics, I've finally come back to game development
        during my studies.
        Those projects can be found here on my website.
        If you still want to read through the code of this ancient project, you can find it on
        <a href="https://github.com/LukasHeinzl/GlassEngine2D-OLD" target="_blank">GitHub</a>.
    </p>
</Post>