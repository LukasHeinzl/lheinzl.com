<script>
    import Post from "$lib/Post.svelte";

    
    /**
     * @typedef {Object} Props
     * @property {any} data - from +layout.ts
     */

    /** @type {Props} */
    let { data } = $props();
</script>

<Post data={data.postData} showPostList>
    <blockquote>
        <p><strong><em>IMPORTANT</em></strong></p>

        <p>
            This post is part of a longer series.
            It is advised to at least read the disclaimer on the <a href="/blog/2023-02-03-mental1/">intro post</a>.
            As posts are mostly in chronological order and can reference past posts, it is highly recommended to read
            them in order starting on the <a href="/blog/2023-02-03-mental1/">intro post</a>.
        </p>
    </blockquote>

    <p>
        Throughout this series, I have mentioned my struggles at home.
        Basically, as years passed by, I grew more annoyed at my family, especially my parents.
        While I must admit that I am grateful for everything good they have done for me, the bad is just simply
        outweighing the good.
        Or at least that's how I perceived it in the last couple of years.
        However, this will not be the content of this post.
        Instead, I want to focus on one specific aspect that is making all of this more difficult for me.
    </p>

    <p>
        To sum it up quickly: I am living two separate lives - my normal life and the one at home.
        Ever since middle school, I started sharing less and less about my school life.
        With the change to the high school and me not having any friends that my parents would get to know, it was more
        or less done.
        Apart from the occasional info about tests and the like, I did not share a lot more.
        Since this was when puberty hit hard and I started to develop my personality and also started discovering who I
        am, one can imagine what effects this can have.
        If you can't imagine it, then don't worry, that's why I'm writing this post.
    </p>

    <p>
        Basically, at home I was the quiet member of the family - the young one who did not know how to participate in
        the adult conversations.
        But in school, I developed my extraverted side, always looking to tell a joke and talk to others.
        As you can see, these are to opposites.
        At home, I was perceived as someone who doesn't speak up and just quietly lives his life in his room.
        Since most of my social life was spent with my parents or other close family members, I always felt a bit weird
        that I only spend time with adults rather than people of my age.
        So I continued to stay quiet and just exist around them.
    </p>

    <p>
        As time went on these two personalities of mine drifted further and further apart.
        This meant one big mental hurdle for me:
        Once I started having friends and a social life, again I started hanging out with others.
        But if someone were to visit me at home, then they would get to know my parents - meaning that my two separate
        worlds would collide.
        And this was something that simply couldn't happen.
        Well, it did a couple of times over a few years, but not more than a handful amount.
    </p>

    <p>
        To this day I struggle with this separation of my two selves.
        I don't like participating in online meetings or phone calls when at home, because then I would have to be
        careful about how I act.
        I still don't invite any friends over or share a lot with them about my family / parents.
        This is still an ongoing thing and a big burden on my life.
        Yet, I do not currently have a plan on how to fix it other than doing something that I have been wanting to do
        for a long time: move out.
        But for now, I have to live with this situation since I certainly don't have the financial support needed to
        life on my own.
    </p>

    <p>
        So I guess maybe in a future post I can look back at this and tell the tale of how I managed to overcome this
        struggle.
        This post, however, will end here.
        A bit of a shorter one, but this topic didn't fit in anywhere else, so I decided to write a small intermission
        post to get it out of the way with.
        In the next post, we will finally be heading into the year of 2022, or at least the majority of it.
        It was the best year in my life so far, and I cannot wait to write about it.
        To an outsider, it might not be that big of a deal, but for me, it meant the world.
        So, thanks for sticking around and see you next time!
    </p>
</Post>