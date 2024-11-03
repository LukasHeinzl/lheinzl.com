<script lang="ts">
    import Home from "svelte-material-icons/Home.svelte";
    import NewsPaperVariant from "svelte-material-icons/NewspaperVariant.svelte";
    import AccountBox from "svelte-material-icons/AccountBox.svelte";
    import MonitorCellphoneStar from 'svelte-material-icons/MonitorCellphoneStar.svelte';
    import {page} from "$app/stores";

    //  RegExp used to match the current url path. Not 100% accurate, but enough for now..
    const pathPattern: RegExp = /^(?<root>\/)(?<base>\w+)?(?<tail>.*)?$/gi;

    //  Page names matching url path names, stripped by any leading slash and trailing path
    const pages: string[] = ['', 'about', 'projects', 'blog'];
    let pageIdx: number = $derived(Math.max(0, pages.findIndex(p => p === $page.url.pathname.replace(pathPattern, '$<base>'))));
</script>

<nav>
    <a href="/" class:active={pageIdx === 0} title="Home">
        <Home size="1.7em"/>
        <span class="nav-link-title">Home</span>
    </a>

    <a href="/about/" class:active={pageIdx === 1} title="About me">
        <AccountBox size="1.7em"/>
        <span class="nav-link-title">About me</span>
    </a>

    <a href="/projects/" class:active={pageIdx === 2} title="Projects">
        <MonitorCellphoneStar size="1.7em"/>
        <span class="nav-link-title">Projects</span>
    </a>

    <a href="/blog/" class:active={pageIdx === 3} title="Blog">
        <NewsPaperVariant size="1.7em"/>
        <span class="nav-link-title">Blog</span>
    </a>
</nav>

<style>
    nav {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        gap: 1.6rem;
        padding: .6rem;
        background: #88888805;
        backdrop-filter: blur(.25rem);
    }

    nav > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .3rem;
        color: var(--text-main);
        text-transform: uppercase;
        border-bottom: 3px solid transparent;
        text-shadow: 2px 3px 15px black;
    }

    nav > a.active {
        color: var(--accent-col);
        filter: brightness(.9);
        border-color: var(--accent-col);
    }

    nav > a:hover {
        color: var(--link-col);
        filter: brightness(1.2);
        border-color: var(--link-col);
    }

    .nav-link-title {
        font-size: .8rem;
    }
</style>