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
        <h2>
            Hey there, I'm Lukas!<br/>
        </h2>

        <p>
            I am a developer from Austria that currently studies a master program focused on AR/VR.
            Furthermore, I work at <a href="https://fhstp.ac.at/" target="_blank">St. Pölten UAS</a> as a lecturer
            and lab infrastructure manager.
            If you want to read more about me, check out my <a href="/about/">about page</a>.
        </p>

        <p>
            On this website you can explore <a href="/projects/">projects</a> that I have been or currently am
            working on.
            You will also find my <a href="/blog/">personal blog</a> where I write more about my day-to-day life as
            well as whatever else I want to talk about.
        </p>

        <p>
            Below you can find a list of links to my profiles on various platforms.
        </p>

        <p class="quote">
            Have fun!
        </p>
    </article>

    <div class="link-list">
        <a id="twitter" href="https://twitter.com/LukasHeinzl" target="_blank" rel="noreferrer">
            <Twitter width="32" height="32"/>
            Twitter
        </a>

        <a id="instagram" href="https://www.instagram.com/lukasheinzl/" target="_blank" rel="noreferrer">
            <Instagram width="32" height="32"/>
            Instagram
        </a>

        <a id="github" href="https://github.com/LukasHeinzl" target="_blank" rel="noreferrer">
            <Github width="32" height="32"/>
            Github
        </a>

        <a id="youtube" href="https://www.youtube.com/channel/UCZIL1AD1I0opSfmJZn3SJbA/" target="_blank"
           rel="noreferrer">
            <Youtube width="32" height="32"/>
            Youtube
        </a>

        <a id="linkedin" href="https://www.linkedin.com/in/lukas-heinzl-bsc-120217202/?locale=en_US" target="_blank"
           rel="noreferrer">
            <Linkedin width="32" height="32"/>
            LinkedIn
        </a>
    </div>
</div>

<style>
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

    .link-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }

    .link-list a {
        min-width: 5rem;
        min-height: 3.6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        text-decoration: none;
        color: #999999;
        border: none;

        transition: color 300ms ease-out;
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