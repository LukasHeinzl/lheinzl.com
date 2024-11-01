<script lang="ts">
    let state: 'start' | 'playing' | 'end' = $state('start');
    let shareButtonText: string = $state('Copy link to share');
    let music: HTMLAudioElement | null = null;
    let currentLyric: string = $state('');
    let currentLyricIndex: number = 0;
    let lyrics = [
        {text: "Hey! I've got nothing to say but I'm lonely", at: 0},
        {text: "Coming through to let you know you're on my mind", at: 4.2},
        {text: "Sorry I'm a little insane when I'm lonely", at: 7.5},
        {text: "I'm just like you", at: 11},
        {text: "Let them know they're on your mind!", at: 12.4},
        {text: "", at: 14.3},
    ];

    function play() {
        if (music !== null) return;

        state = 'playing';
        music = new Audio('/ltktoym.wav');
        music.addEventListener('canplaythrough', () => {
            music?.play();
            showNextLyrics();
        });
        music.load();
    }

    function showNextLyrics() {
        let currentAt = lyrics[currentLyricIndex].at;
        currentLyric = lyrics[currentLyricIndex].text;
        currentLyricIndex++;

        if (currentLyricIndex === lyrics.length) {
            state = 'end';
            return;
        }

        setTimeout(() => {
            showNextLyrics();
        }, (lyrics[currentLyricIndex].at - currentAt) * 1000);
    }

    async function copyShare() {
        try {
            await navigator.clipboard.writeText('https://lheinzl.com/ltktoym/');
            shareButtonText = 'Copied!';
        } catch {
            shareButtonText = 'Failed to copy';
        }
    }
</script>

<main>
    {#if state === 'start'}
        <span>Hey, I wanted to let you know this:</span>
        <button onclick={play}>Click for surprise</button>
    {:else if state === 'playing'}
        <div class="notes">
            <span style="--time: 1s">🎵</span>
            <span style="--time: 1.2s">🎵</span>
            <span style="--time: 0.8s">🎵</span>
        </div>
        <span>{currentLyric}</span>
    {:else}
        <span>The person who sent you this wanted to let you know, that you are on their mind! ❤️</span>
        <span>They also want you to check out Cavetown's new song and EP <a
                href="https://cavetown.komi.io/" target="_blank">here</a>!</span>
        <br/>
        <span>Share this with someone close, to let them know, they're on your mind!</span>
        <br/>
        <button onclick={copyShare}>{shareButtonText}</button>
    {/if}
</main>

<style>
    * {
        font-size: 1.1rem;
    }

    :global(html, body) {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    main {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 5rem;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    button {
        background: #152b31;
        color: white;
        border: none;
        padding: .7rem 1rem;
    }

    button:hover {
        cursor: pointer;
        background: #1e3e44;
    }

    .notes {
        display: flex;
        column-gap: 1rem;
    }

    .notes span {
        font-size: 2.2rem;
        animation: ease-in-out var(--time) infinite notes;
    }

    @keyframes notes {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
</style>