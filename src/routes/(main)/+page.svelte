<script>
    import Twitter from "svelte-material-icons/Twitter.svelte";
    import Instagram from "svelte-material-icons/Instagram.svelte";
    import Github from "svelte-material-icons/Github.svelte";
    import Youtube from "svelte-material-icons/Youtube.svelte";
    import Linkedin from "svelte-material-icons/Linkedin.svelte";
</script>

<div class="landing-page">
    <header>
        <img src="/Logo.png" alt="Logo" class="logo golden"/>
        <h1 id="wordMark">
            <span>Lukas Heinzl, BSc</span>
            <span class="subMark">he/they</span>
        </h1>
    </header>
    <article id="about">
        <section class="text">
            <h2>
                Hey there, I'm Lukas!<br/>
            </h2>
            <p>
                I am a developer from Austria that currently studies a master program focussed on AR/VR.
                Below you can find a list of links to my profiles on various platforms.
                On this website you can explore <a href="/projects/">projects</a> that I have been or currently am
                working on.
            </p>
            <p>
                You will also find my <a href="/blog/">personal blog</a> where I write more about my day-to-day life as
                well as whatever else I want to talk about.<br/>
            </p>
            <p class="quote">
                Have fun!
            </p>
        </section>
        <section class="picture">
            <img src="/lheinzl.jpg" alt="Avatar of Lukas Heinzl" class="photo"/>
        </section>
    </article>
    <ul class="link-list">
        <li>
            <a id="twitter" href="https://twitter.com/LukasHeinzl" target="_blank" rel="noreferrer">
                <Twitter width="32" height="32"/>
                Twitter
            </a>
        </li>
        <li>
            <a id="instagram" href="https://www.instagram.com/lukasheinzl/" target="_blank" rel="noreferrer">
                <Instagram width="32" height="32"/>
                Instagram
            </a>
        </li>
        <li>
            <a id="github" href="https://github.com/LukasHeinzl" target="_blank" rel="noreferrer">
                <Github width="32" height="32"/>
                Github
            </a>
        </li>
        <li>
            <a id="youtube" href="https://www.youtube.com/channel/UCZIL1AD1I0opSfmJZn3SJbA/" target="_blank"
               rel="noreferrer">
                <Youtube width="32" height="32"/>
                Youtube
            </a>
        </li>
        <li>
            <a id="linkedin" href="https://www.linkedin.com/in/lukas-heinzl-bsc-120217202/?locale=en_US" target="_blank"
               rel="noreferrer">
                <Linkedin width="32" height="32"/>
                LinkedIn
            </a>
        </li>
    </ul>
</div>

<style>
    div.landing-page {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        height: 100%;
        gap: 5vh;
    }


    header {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: sticky;
        top: 0;
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

    .photo {
        height: 240px;
        opacity: .7;
        box-shadow: 0 0 20px var(--bg-main);
        border-radius: 12px;
    }

    #about {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    #about .text {
        text-align: justify;
        flex-grow: 1;
        line-height: 1.5rem;
    }

    #about .picture {
        min-width: 240px;
    }

    .link-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        list-style: none;
    }

    .link-list > * {
        min-width: 5rem;
    }

    .link-list a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        text-decoration: none;
        color: var(--text-main);
        min-height: 3.6rem;
        opacity: 0.4;
        border: none;

        transition: opacity 300ms ease-out;
    }

    .link-list a:hover {
        opacity: 1;
    }

    .link-list a#twitter:hover {
        color: #1c93e4;
    }

    .link-list a#instagram:hover {
        color: #b400a1;
    }

    .link-list a#github:hover {
        color: #f2f2f2;
    }

    .link-list a#youtube:hover {
        color: #f20000;
    }

    .link-list a#linkedin:hover {
        color: #0961b8;
    }

    img.golden {
        filter: sepia(1) hue-rotate(5deg) saturate(2);
    }
</style>