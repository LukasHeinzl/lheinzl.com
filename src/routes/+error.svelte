<script lang="ts">
    import {page} from '$app/stores';
</script>


<main>
    <div id="content">

        <div class="landing-page">
            <header>
                <img src="/Logo.png" alt="Logo" class="logo golden"/>
                <h1 id="wordMark">
                    <span>Lukas Heinzl, BSc</span>
                    <span class="subMark">he/they</span>
                </h1>
            </header>

            <article id="about">
                <h2>
                    {$page.status} {$page?.error?.message}<br/>
                </h2>
                <p class="quote">
                    You done goofed!
                </p>
                <p>
                    <a href="/">Go Home</a>
                </p>
            </article>
        </div>
    </div>
</main>

<style>
    main {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 2vh 10vw;
    }

    #content {
        overflow-y: auto;
        overflow-x: hidden;

        min-height: 100%;
        height: 100%;
        max-height: 100%;

        padding: 0.6rem;
    }

    div.landing-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5vh;
    }

    header {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    #wordMark {
        display: flex;
        flex-direction: column;
    }

    #wordMark .subMark {
        color: var(--text-secondary);
        font-size: 1.2rem;
    }

    .logo {
        height: 10rem;
    }

    .quote {
        font-style: italic;
        font-size: 1.8rem;
        padding-left: 1rem;
        color: var(--text-secondary);
    }

    .quote::before {
        content: '― '
    }

    article {
        padding-top: 2rem;
        border-width: 3px;
        border-style: solid;
        border-image: linear-gradient(90deg, transparent 10%, var(--bg-main) 50%, transparent 90%) 1;
    }

    p {
        text-align: center;
    }

    img.golden {
        filter: sepia(1) hue-rotate(5deg) saturate(2);
    }
</style>