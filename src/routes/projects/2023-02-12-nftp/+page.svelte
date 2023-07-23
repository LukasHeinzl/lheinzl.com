<script>
    import Post from "$lib/Post.svelte";

    // from +layout.ts
    export let data;
</script>

<Post data={data.postData}>
    <p>
        Notes from the Past explores human culture through the lens of an alien lifeform.
        Discovering the Voyager probe and deciphering the Golden Record led these aliens to find music.
        Enthralled by melodies never thought possible, they began their journey to Earth.
        While exploring an abandoned house and its surroundings an alien discovers the story of the family that lived
        there and of humanity’s sudden end.
        Explore an expansive house filled with puzzles.
        Collect artefacts of humanity and find out what caused civilization to end.
        Listen to recordings of the people that lived there and learn about their fate.
    </p>

    <p>
        <a href="/posts/projects/2023-02-12-nftp/logo.png">
            <img src="/posts/projects/2023-02-12-nftp/logo.png" alt="NFTP Logo"/>
        </a>
        <em>Our logo, designed by Cajetan Grill</em>
    </p>

    <p>
        You are playing one of the aliens that had just crash-landed on planet Earth.
        Your goal is to send out a distress signal in order to get rescued.
        The game is played in first person using traditional keyboard and mouse controls.
        At this point in time it is only available on Windows.
    </p>

    <p>
        The core mechanics involve walking around the map and interacting with objects.
        Certain artefacts can be picked up and examined in greater detail.
        To make the game more immersive and realistic the player can only carry a single item at a time.
        The game features three distinct minigames: cleaning, repairing and the transponder.
    </p>

    <p>
        Cleaning involves, well... cleaning certain objects.
        This can grant the player access to a new area, unlock a new ability or reveal more about the story.
        Artefacts can be picked up and repaired.
        This can turn seemingly useless things into useful and functional tools.
    </p>

    <p>
        <a href="/posts/projects/2023-02-12-nftp/repair.jpg">
            <img src="/posts/projects/2023-02-12-nftp/repair.jpg" alt="Repairing a helmet"/>
        </a>
        <em>Repairing an artefact</em>
    </p>

    <p>
        Lastly the transponder functions as our main plot device.
        You have to match a signal by tuning the transponder's frequency, amplitude and wave type.
        When correctly tuned you can tap into a signal and advance in your conquest to sending a distress call to get
        help.
        It can be accessed in the "archive" - a data management system built into the alien's helmet.
        It contains logs for all story-related dialogs, an overview of the current objectives and a database of all
        artefacts
        the player has found so far.
    </p>

    <p>
        <a href="/posts/projects/2023-02-12-nftp/archive.jpg">
            <img src="/posts/projects/2023-02-12-nftp/archive.jpg" alt="An artefact in the archive's database"/>
        </a>
        <em>n artefact in the archive's database</em>
    </p>

    <p>
        Now onto some hard-facts.
        The game was developed using Unity and WWise for sound.
        The team consisted of five people, each with their own specialization.
        I was the project lead and also main developer.
        My focus was on the interaction system as well as implementing all minigames and story-related mechanics.
        Basically anything that you can interact with, apart from the UI, runs on my code.
        Furthermore, I coded our save game system, some of the archive backend, a state manager as well as a couple
        in-game debugging tools.
        We used Visual Studio as our IDE and collaborated with git using a private GitLab instance.
        This project was developed from october 2022 until january 2023 as part of the "MediaLab" at the St. Pölten UAS.
        It won first place in its category at the university's project vernissage in january 2023.
        If you want to know more, here are a few interesting links:
    </p>

    <ul>
        <li>
            <a href="/posts/projects/2023-02-12-nftp/GDD.pdf">
                Game design document with all the details about the game
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com/watch?v=ny_d_gdzw3s">
                Teaser video - this contains minor spoilers for the start of the game, read the video description!
            </a>
        </li>
        <li>
            <a href="https://bit.ly/m/nftp">
                Link list with the most important links - and maybe someday a download-link!
            </a>
        </li>
    </ul>
</Post>