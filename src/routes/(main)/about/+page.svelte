<script>
    import Badge from "$lib/Badge.svelte";
    import CssBadge from "$lib/badges/CssBadge.svelte";
    import HtmlBadge from "$lib/badges/HtmlBadge.svelte";
    import KotlinBadge from "$lib/badges/KotlinBadge.svelte";
    import TsBadge from "$lib/badges/TsBadge.svelte";
    import CSharpBadge from "$lib/badges/CSharpBadge.svelte";
    import PhpBadge from "$lib/badges/PhpBadge.svelte";
    import JavaBadge from "$lib/badges/JavaBadge.svelte";
    import CBadge from "$lib/badges/CBadge.svelte";
    import UnityBadge from "$lib/badges/UnityBadge.svelte";
    import WwiseBadge from "$lib/badges/WwiseBadge.svelte";
    import NodeJsBadge from "$lib/badges/NodeJsBadge.svelte";
    import GitBadge from "$lib/badges/GitBadge.svelte";
    import PostgreSqlBadge from "$lib/badges/PostgreSqlBadge.svelte";
    import MySqlBadge from "$lib/badges/MySqlBadge.svelte";
    import ApacheBadge from "$lib/badges/ApacheBadge.svelte";
    import CaddyBadge from "$lib/badges/CaddyBadge.svelte";
    import WindowsBadge from "$lib/badges/WindowsBadge.svelte";
    import UbuntuBadge from "$lib/badges/UbuntuBadge.svelte";
    import UnifiBadge from "$lib/badges/UnifiBadge.svelte";
    import SvelteBadge from "$lib/badges/SvelteBadge.svelte";
</script>

<h1>About me</h1>

<h2>Humble beginnings</h2>

<p>
    Technology has always fascinated me.
    From an early age I was eager to find out how things work - even recreating certain things at home.
    "Like what?" you might ask.
    When I was I don't know how old (single digits), my family went skiing.
    I hated it with a passion, but I loved the ski lift.
    Just a long cable going round and round.
    Needless to say, I wanted to build one at home - out of yarn.
</p>

<p>
    Apart from my interest in technology in general, computers is definitely where it's at for me.
    At the age of twelve I started learning Java because of a small game you might have heard of: Minecraft.
    Through a little lie, YouTube and a lot of trial and error, I got into coding.
    I've been doing it ever since.
    Java has been my main language for almost eight years, but I've moved on to a brighter future.
    I ventured through many different aspects of programming, but starting in 2018 I've been focusing on web
    development.
    Later on, starting 2021, I shifted part of my attention to game development using Unity / C#.
    These two areas are where I now spend most of my time.
</p>

<p>
    In September 2020 I started my bachelor studies in <i>Media Technology</i> at the St. Pölten University of Applied
    Sciences.
    Starting with the third semester, I was in the <i>Interactive Media</i> specialization and chose <i>Digital Game
    Production</i> as my elective module.
    This was also what I did for the <i>Media Lab / Project semester</i> in the fifth semester.
    In a team of five, we worked on a 3D game called <a href="/projects/2022/09/nftp/">Notes from the Past</a>.
    I graduated in june 2023, writing my bachelor thesis on <i>Educational escape rooms</i>.
</p>

<h2>What's up?</h2>

<p>
    Right now, I'm in my last year of my master's degree in <i>Interactive Technologies</i>, master class <i>Augmented /
    Virtual Reality</i>, still at St. Pölten UAS.
    In august 2023 I started working part-time at my university, being part of the
    <a href="https://labs.fhstp.ac.at/" target="_blank">labs team</a>.
    I'm responsible for the IT infrastructure of our labs, code various internal tools and services, and teach software
    development (mostly web and game).
    Furthermore, I am the vice technical supervisor of the <a href="https://www.cr944.at/" target="_blank">Campus & City
    Radio St. Pölten</a>.
    For the various projects I have worked on, check out the <a href="/projects">projects page</a>.
    On my <a href="/blog/">blog</a> I try to post about various ongoing projects, among other things.
</p>

<h2>Skills & CV</h2>

<p>
    Over the years I have acquired a wide range of skills, mostly technical.
    You can find my detailed CV <a href="/CV_Public.pdf" target="_blank">here</a>.
    The following shows a list of technologies I have worked with, ranging from used once to having in-depth knowledge.
</p>

<h3>Programming / markup languages</h3>

<section class="badges">
    <PhpBadge/>
    <CSharpBadge/>
    <TsBadge/>
    <HtmlBadge/>
    <CssBadge/>
    <CBadge/>
    <KotlinBadge/>
    <JavaBadge/>
</section>

<h3>Technologies / frameworks</h3>

<section class="badges">
    <UnityBadge/>
    <WwiseBadge/>
    <SvelteBadge/>
    <NodeJsBadge/>
    <GitBadge/>
</section>

<h3>Backend / server-side / infrastructure</h3>

<section class="badges">
    <PostgreSqlBadge/>
    <MySqlBadge/>
    <ApacheBadge/>
    <CaddyBadge/>
    <WindowsBadge/>
    <UbuntuBadge/>
    <UnifiBadge/>
</section>

<h3>Soft skills</h3>

<p>
    Hard skills alone ain't gonna get you that far.
    Therefore, I am happy to say that I have a good set of soft skills as well.
</p>

<ul>
    <li>Team leader</li>
    <li>Good listener</li>
    <li>Eager to always learn and improve</li>
    <li>Solution oriented</li>
    <li>Always happy to joke around</li>
</ul>

<picture>
    <img src="/me.jpg" alt="Me in the Campus & City Radio St. Pölten studio"
         title="Me in the Campus & City Radio St. Pölten studio"/>
</picture>

<style>
    picture {
        min-width: 240px;
        display: flex;
        justify-content: center;
    }

    picture img {
        height: 240px;
        opacity: .7;
        box-shadow: 0 0 20px var(--bg-main);
        border-radius: 12px;
    }

    .badges {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: .75rem;
        margin-bottom: 2rem;
    }
</style>