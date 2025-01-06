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
        In the lecture "Information Design", in the third semester of my Media Technology studies, we were tasked with
        picking any topic of our liking and visualize it.
        Based on <a href="https://dkriesel.com/spiegelmining" target="_blank">a project from David Kriesel</a> we chose
        to visualize one of Austria's biggest newspapers: <a href="https://krone.at" target="_blank">Kronen Zeitung</a>.
        This involved downloading <em>all</em> articles that were published on their website in 2020.
        Then, we parsed them, or more specifically their metadata, and visualized them in various ways.
        These visualizations are in german.
    </p>

    <h2>The visualizations</h2>

    <h3>Interactive word cloud</h3>

    <ImageViewer imageSrc="/posts/projects/2021/11/kronemining/wordcloud.webp"
                 caption="An interactive word cloud, showing the top tags per day"/>

    <p>
        The first interactive visualization was a word cloud, which can be explored <a
            href="https://cdn.lheinzl.com/static/km/wordcloud/" target="_blank">here</a>.
        It serves two purposes: The timeline view shows the top-used keywords on every single day of the year.
        Using the playback controls, the timeline can be automatically scrubbed through.
        Furthermore, by clicking on any given keyword, a few more details are listed.
        There, you can also find a link to a second page, where you can view statistics about different keyword
        categories.
        Alternatively, you can get to this sub-page directly by clicking <a
            href="https://cdn.lheinzl.com/static/km/wordcloud/rankings.html" target="_blank">this</a> conveniently
        placed link.
    </p>

    <h3>Map</h3>

    <ImageViewer imageSrc="/posts/projects/2021/11/kronemining/map.webp"
                 caption="A graph showing how tags are related to each other"/>

    <p>
        The second interactive visualization is a zoomable map of the keywords.
        It shows multiple aspects in one visualization, making it quite powerful.
        The size of each circle shows how often the given keyword appears in the dataset.
        The color represents the dominant category in which the keyword was used.
        Lastly, the position is the most interesting component of the visualization.
        The closer together two keywords are, the more often they have been used together in articles.
        This allows the viewer to determine interesting connections between keywords / topics, that would otherwise not
        be possible.
        The map was created using an open source software called <a href="https://gephi.org/" target="_blank">Gephi</a>.
        You can view the map <a href="https://cdn.lheinzl.com/static/km/map/" target="_blank">here</a>.
        Furthermore, you can read the post from
        <a
                href="https://dkriesel.com/blog/2016/1028_spiegelmining_think_big._die_artikellandschaft_der_letzten_zwei_jahre_zum_selberforschen#readmore_blog_2016_1028_spiegelmining_think_big_die_artikellandschaft_der_letzten_zwei_jahre_zum_selberforschen"
                target="_blank">David</a>,
        where he goes into much more detail on how he created his map,
        and therefore how our map was created as well.
    </p>

    <h3>Info sheet</h3>

    <p>
        The third visualization comes in the form of a static PDF file.
        It contains all sorts of information, condensed into a single file.
        It also follows the style of Krone's web presence at the time.
        If you want to scroll through it, <a href="/posts/projects/2021/11/kronemining/static.pdf" target="_blank">here
        you go</a>.
    </p>

    <h2>How does this work?</h2>

    <p>
        The first step of course was data collection.
        At first, inspired by David's SpiegelMining, I started having a script check every five minutes, if a new
        article has been posted.
        If so, it would download the raw HTML file and store it for later use.
        Using a second script, I would run through a batch of HTML files, parse out the most important information and
        save it to a database.
        However, midway through I gave up on the project and stopped collecting data.
        Once the lecture in the third semester came by, I reactivated the project. To collect the missing data, I
        switched gears.
        Now using Krone's JSON-API, I was able to directly download the metadata, without having to parse raw HTML.
        Because this was done in fall of 2021, downloading was straightforward: Starting from the article ID which I had
        last downloaded as HTML, up until the last article of 2020, go through each ID (they are sequential) and
        download the JSON.
        This turned out to yield an interesting insight:
        Krone seems to reuse old articles with new IDs, because some publish dates did not match up.
        The rest was easy:
        Once everything was inside a PostgreSQL database, it was as simple as crafting some queries and then using the
        data to build our visualizations.
    </p>

    <h2>Team</h2>

    <ul>
        <li>Robin Backnecht</li>
        <li>Erik Grielenberger</li>
        <li><a href="https://cajetan.dev/" target="_blank">Cajetan Grill</a></li>
        <li>Sebastian Grün</li>
        <li>Lukas Heinzl (me)</li>
    </ul>
</Post>