<script>
    import Post from "$lib/Post.svelte";
    import ImageViewer from "$lib/ImageViewer.svelte";


    /**
     * @typedef {Object} Props
     * @property {any} data - from +layout.ts
     */

    /** @type {Props} */
    let {data} = $props();
</script>

<Post data={data.postData} prefix="projects">
    <p>
        This project was created as part of the lecture "360° audio / video" during my master studies.
        In a team of seven, we had to create an interactive 360° video.
        The interactive part was an extra, specifically for our team, because of the large group size and our background
        in VR.
        Therefore, while all other groups "just" had to record and edit a short video, ours had to be an interactive
        app, built for the Meta Quest 2.
        It was implemented in Unity, using the XR Interaction Toolkit, as well as WWise for the audio.
        The videos were rendered into a skybox and the interactions were hand-coded by me.
        After the monolog of the guide (me) was finished, icons would appear.
        There are two different types: information and navigation.
        Information icons can be clicked to reveal more information in the form of a textbox and voice over (spoken by
        me).
        Clicking on a navigation icon switches the scene to the next location.
        We used an Insta 360 Pro and a Sennheiser AMBEO VR microphone for recording.
        The audio was edited in REAPER, the video in Premiere Pro.
    </p>

    <p>
        Originally we had planned to record the path between the train station and the university, serving as an
        interesting walking guide between the two.
        Due to weather and hardware issues (we planned on using an Insta 360 Pro 2, which failed) we had to reschedule
        our shoot.
        At this point, winter approached and we decided to move our production indoors.
        It was easier to record indoors and we were more flexible, because recording on our university campus didn't
        require us to get shooting permissions.
        So, we decided to do a campus tour, showing the most interesting rooms and labs of our university.
        The tour was hosted by me.
        You can find all video clips (in german!) on
        <a href="https://www.youtube.com/playlist?list=PL34g2o67BEXw42XDwvK2orj-Svc7chE3x" target="_blank">
            YouTube
        </a> (although the audio got messed up by YouTube).
    </p>

    <h2>Team</h2>

    <ul>
        <li><a href="https://cajetan.dev/" target="_blank">Cajetan Grill</a>: Audio production & mixing, publishing</li>
        <li>Lukas Heinzl (me): Project lead, Unity development & build, moderation</li>
        <li>Dawid Lewandowski: Concept & idea creation, production assistant</li>
        <li>Srdjan Pajic: Audio assistant, final cut, presentation</li>
        <li>Ewelina Pawlik: Video post production & correction</li>
        <li>Martin Steinmetz: Stitching, director, cut</li>
        <li>Isabella Willmann: Concept & idea creation, production assistant</li>
    </ul>

    <h2>Gallery</h2>

    <ImageViewer imageSrc="/posts/projects/2023/11/360av/first_floor.webp"
                 caption="The guide explaining everything there is to explore on the first floor"/>
    <ImageViewer imageSrc="/posts/projects/2023/11/360av/hover.webp"
                 caption="Hovering over an info icon - clicking reveals more information"/>
    <ImageViewer imageSrc="/posts/projects/2023/11/360av/hover_text.webp" caption="Box with detailed information"/>
    <ImageViewer imageSrc="/posts/projects/2023/11/360av/navigate.webp"
                 caption="Navigating to the next floor"/>
</Post>