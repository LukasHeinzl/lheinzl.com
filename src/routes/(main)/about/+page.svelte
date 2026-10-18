<script>
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
    import AnsibleBadge from "$lib/badges/AnsibleBadge.svelte";
</script>

<article id="intro">
    <section>
        <h1>Lukas Heinzl</h1>
        <span>Developer, creative mind</span>
        <span>Web, games, IT infrastructure</span>
        <span>Lecturer <a href="https://ustp.at/en/">@ustp</a></span>
    </section>

    <picture>
        <img src="/me.jpg" alt="Me in the Campus & City Radio St. Pölten studio"
             title="Me in the Campus & City Radio St. Pölten studio"/>
    </picture>
</article>

<h2>About me</h2>

<p>
    Technology as a whole has always fascinated me, especially computers.
    At the age of twelve I started learning Java because of the popular game Minecraft.
    Java was my main language for around six years, before shifting my focus to web development in 2018.
</p>

<p>
    I began studying <i>Media Technology</i> at St. Pölten UAS in 2020, specializing in <i>Interactive Media</i> and
    <i>Digital Game Production</i>.
    I added Unity/C# game development to my focus on web development and, with a team of five, created the 3D game <a
        href="/projects/2022/09/nftp/">Notes from the Past</a>. I graduated in 2023 with a bachelor's thesis on <i>Educational
    escape rooms</i>.
    I continued at St. Pölten UAS with a master's in <i>Interactive Technologies</i>, specializing in <i>Augmented /
    Virtual Reality</i>. Projects included the VR game <a href="/projects/2024/03/apophis/">Apophis</a> and VR
    experience <a href="/projects/2024/06/findingemo/">Finding Emo</a>, which was made in five days.
    I graduated in October 2025 with a thesis on <i>Evaluating hand tracking based locomotion methods in VR</i>.
</p>

<p>
    In August 2023 I started working at my university, being part of the <a href="https://labs.ustp.at/"
                                                                            target="_blank">labs team</a>.
    I'm responsible for the IT infrastructure of our labs, code various internal tools and services, and teach software
    development.
    Furthermore, I am the vice technical supervisor of the <a href="https://www.cr944.at/" target="_blank">Campus & City
    Radio St. Pölten</a>.
</p>

<h2>Skills & CV</h2>
<h3>Programming / markup languages</h3>

<section class="badges">
    <PhpBadge/>
    <CSharpBadge/>
    <TsBadge/>
    <HtmlBadge/>
    <CssBadge/>
    <KotlinBadge/>
    <JavaBadge/>
    <CBadge/>
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
    <AnsibleBadge/>
    <CaddyBadge/>
    <WindowsBadge/>
    <UbuntuBadge/>
    <UnifiBadge/>
</section>

<h3>Soft skills</h3>

<ul>
    <li>Team leader</li>
    <li>Good listener</li>
    <li>Eager to always learn and improve</li>
    <li>Solution oriented</li>
    <li>Always happy to joke around</li>
</ul>

<h3>Work experience</h3>
<article>
    <div class="cv-card highlight">
        <div>
            <h4>Technical head Interactive Media, Lab-IT and Server Infrastructure</h4>
            <span>University of Applied Sciences St. Pölten</span>
        </div>
        <span>Since 08/2023</span>
    </div>

    <div class="cv-card">
        <div>
            <h4>Student assistant and intern</h4>
            <span>University of Applied Sciences St. Pölten</span>
        </div>
        <span>02/2021 - 07/2023</span>
    </div>
</article>

<h3>Education</h3>
<article>
    <div class="cv-card">
        <div>
            <h4>Interactive Technologies (Dipl.-Ing.)</h4>
            <span>University of Applied Sciences St. Pölten</span>
        </div>
        <span>09/2023 - 10/2025</span>
    </div>

    <div class="cv-card">
        <div>
            <h4>Media Technology (BSc)</h4>
            <span>University of Applied Sciences St. Pölten</span>
        </div>
        <span>09/2020 - 06/2023</span>
    </div>

    <div class="cv-card">
        <div>
            <h4>Computer Science</h4>
            <span>HTBLuVA St. Pölten</span>
        </div>
        <span>09/2014 - 06/2019</span>
    </div>
</article>

<section class="badges hashtags">
    <span>#Coding</span>
    <span>#Games</span>
    <span>#Creative</span>
    <span>#Teamleader</span>
    <span>#Kindness</span>
</section>

<style>
    #intro {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 2rem;
        margin-bottom: 1rem;
        border-width: 0;
        border-bottom-width: 3px;
        border-style: solid;
        border-image: linear-gradient(90deg, transparent 10%, var(--bg-main) 50%, transparent 90%) 1;
    }

    #intro section {
        display: flex;
        flex-direction: column;
    }

    #intro h1 {
        margin-top: 0;
    }

    picture img {
        max-height: 240px;
        max-width: 30vw;
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

    .cv-card {
        display: flex;
        align-items: center;
        gap: 1rem;
        border-left: 1px solid var(--text-secondary);
        padding: .7rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .cv-card div {
        flex: 1;
    }

    .cv-card h4 {
        margin: 0;
        font-size: 1.4rem;
    }

    .cv-card.highlight h4 {
        color: var(--accent-col);
    }

    .hashtags {
        color: var(--text-secondary);
        font-size: 1.4rem;
        font-style: italic;
    }
</style>