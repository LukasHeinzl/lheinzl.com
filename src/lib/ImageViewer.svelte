<script lang="ts">
    export let imageSrc: string;
    export let caption: string;

    let overlayVisible: boolean = false;

    function toggleOverlay() {
        overlayVisible = !overlayVisible;
    }
</script>

<div tabindex="0" role="button" on:click={toggleOverlay} on:keydown={(e) => e.key === "Enter" && toggleOverlay()}>
    <img src={imageSrc} alt={caption}/>
    <em>{caption}</em>
</div>

{#if overlayVisible}
    <div class="overlay" tabindex="0" role="button" on:click={toggleOverlay}
         on:keydown={(e) => e.key === "Enter" && toggleOverlay()}>
        <img src={imageSrc} alt={caption}/>
        <em>{caption}</em>
    </div>
{/if}

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
        cursor: pointer;
    }

    img {
        max-width: 80%;
        border-radius: .3rem;
        box-shadow: 5px 5px 40px black;
    }

    em {
        font-size: 1rem;
        margin-top: .4rem;
        opacity: .7;
    }

    div.overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        z-index: 100;
        margin: 0;
    }

    div.overlay img {
        max-width: 90%;
        max-height: 90%;
    }
</style>