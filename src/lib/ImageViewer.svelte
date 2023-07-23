<script lang="ts">
    export let imageSrc: string;
    export let caption: string;

    let overlayVisible: boolean = false;

    function toggleOverlay() {
        overlayVisible = !overlayVisible;
    }
</script>

<p>
    <img tabindex="0" src={imageSrc} alt={caption} on:click={toggleOverlay} on:keydown={toggleOverlay}/>
    <em>{caption}</em>
</p>

{#if overlayVisible}
    <div tabindex="0" on:click={toggleOverlay} on:keydown={toggleOverlay}>
        <img src={imageSrc} alt={caption}/>
        <em>{caption}</em>
    </div>
{/if}

<style>
    p, div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
    }

    img {
        max-width: 80%;
        border-radius: .3rem;
        box-shadow: 5px 5px 40px black;
    }

    img, div {
        cursor: pointer;
    }

    em {
        font-size: 1rem;
        margin-top: .4rem;
        opacity: .7;
    }

    div {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        z-index: 100;
        margin: 0;
    }

    div img {
        max-width: 90%;
        max-height: 90%;
    }
</style>