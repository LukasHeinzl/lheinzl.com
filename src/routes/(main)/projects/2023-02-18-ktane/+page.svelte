<script>
    import Post from "$lib/Post.svelte";
    import ImageViewer from "$lib/ImageViewer.svelte";

    // from +layout.ts
    export let data;
</script>

<Post data={data.postData}>
    <p>
        For my university lecture "physical computing" I created a physical game inspired by the popular game "Keep
        talking and nobody explodes".
        Using Unity is a host, Arduinos for the modules, cardboard and a lot of tape I was able to create a fun
        prototype.
        In the end the game was enjoyable to play and got me an A as the final grade in the course.
    </p>

    <ImageViewer imageSrc="/posts/projects/2023-02-18-ktane/orig_game.jpg" caption="Screenshot of the original game"/>

    <h2>How did we get here?</h2>

    <p>
        The first draft consisted of a controller software on a PC and a single Arduino.
        The controller would handle the on-screen UI for displaying relevant game information.
        The Arduino would handle all the game logic and control all sensors and actors.
        Due to a lack of enough ports on a single Arduino the concept was changed to how it was eventually implemented:
    </p>

    <ul>
        <li>One controller software for handling the UI and game-state</li>
        <li>One Arduino per module for handling the module logic</li>
    </ul>

    <ImageViewer imageSrc="/posts/projects/2023-02-18-ktane/diagram.png" caption="Diagram of the original concept"/>

    <h2>The modules</h2>

    <p>
        Initially there were four modules planned, however only three got implemented.
    </p>

    <ul>
        <li>Simon says - Press the buttons in the right order</li>
        <li>The button - Press the button and see what happens ;)</li>
        <li>Word puzzle - Guess the word from the available letters</li>
    </ul>

    <h2>Implementation</h2>

    <p>
        Unity was used to code the controller software.
        It is a simple interface for communicating with the individual modules and displaying their state on-screen.
        The UI contained all instructions required to solve each module.
        It also featured a start button to start the countdown.
    </p>

    <p>
        Each module was self-contained and built around an Arduino Leonardo.
        The code was written in VS code using PlatformIO.
        The modules were connected via USB-cables to the PC.
        When the controller software started it scanned for all connected serial devices and started a handshake with
        the modules.
        Each module registered itself with a unique module ID to signal to the controller that it is active.
        After initialization all modules would be ready and wait for a "start game" signal.
        Once received, the modules could be played.
        When a module was "defused" it sent a signal to the controller.
        When this happens, the controller checks if all modules have been completed.
        If so, then the game has ended in the "win" state.
        If the countdown runs out before all modules have been completed then the game ended in the "failed" state.
        Whenever the game ends, the controller sends a reset signal to all modules.
        This allows the game to be played over and over again.
    </p>

    <h2>Further information</h2>

    <p>
        If interested you can download the source code <a href="/posts/projects/2023-02-18-ktane/source.zip">here</a>.
        Furthermore, you can watch a demo of the finished prototype <a href="https://youtu.be/x1h7p23W19w">here</a>.
    </p>
</Post>