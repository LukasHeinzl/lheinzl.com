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
        ...therefore I'm the imposter.
        Does anyone still remember let alone play Among Us?
        Anyone?
        No?
        Okay, moving on.
        Thankfully this post isn't about the game.
        In this instance of sad white boi talks about this life, we're going to talk about impostor syndrome.
    </p>

    <p>
        In short, to bring everyone onto the same page, impostor syndrome is the feeling of being a fraud.
        It's the feeling that you're not good enough, that you're not qualified, that you're not worthy.
        It's the feeling that you're just pretending to be good at something.
        You are existing with a constant fear of not living up to the expectations of others.
        Taking compliments is hard, because you don't believe them.
        You cannot cherish your own accomplishments, because you don't believe you deserve the praise.
    </p>

    <p>
        Living in a state like this is really draining.
        Your overall mental health depends on the balance between good and bad.
        Not every single moment in your life will be great, but you need to have enough good moments to outweigh the
        bad.
        If you're constantly feeling like you're not good enough and you are unable to enjoy yourself when accomplishing
        something, you're going to have a bad time.
        Needless to say, this very much describes my life.
        As I stated multiple times throughout this series, I'm not a professional.
        I cannot provide you, or myself for that matter, with a diagnosis.
        However, I can make educated guesses as to what might be the cause of my problems.
        I am willing to say, that I believe I have impostor syndrome.
        For me there has always been an underlying fear of being viewed as a narcissist or bigheaded.
        I've always been afraid of being seen as someone who thinks they're better than everyone else.
        As stated all the way back in <a href="/blog/2023-02-05-mental2/">2. An insignificant person in an insignificant
        town</a>, I hate being called smart or anything similar by others.
        I don't feel like I deserve it.
    </p>

    <p>
        Nowadays I at least internally recognize that I do know quite a lot and possess a lot of skills.
        But often the negative thoughts are just louder.
        Moving on to a semi-recent example.
        A friend of mine spotted an opportunity when I left my laptop unlocked and walked away for a few moments.
        They opened up a notes file and wrote a list of compliments.
        When I came back, they were acting a bit weird and I knew they had done something.
        My first instinct of course was that they trolled me somehow.
        When I eventually read the note, after insisting they tell me what they did, I was surprised.
        On one hand I kind of felt like they were just trying to make me feel better, but on the other hand I knew they
        were being genuine.
        Yet still, I felt uneasy about it and couldn't really accept it.
        Fun fact: Even though the online-account where the note was saved in is gone, I copied the note to my new
        account.
        I still have it and I look at it every now and then.
        And maybe one day I actually believe it.
    </p>

    <p>
        Another possible origin of having impostor syndrome is that I have a strong tendency to want to stay in the
        background and not stick out.
        I do provide the funnies often, but more as an entertainment tool for myself and others.
        When it comes to being praised or being the center of attention in a similar way, I don't like it.
        I don't want to feel like a burden on others.
        And being praised feels like I'm put above others.
        So instead I try to shutdown the praise as quickly as possible and get out of the spotlight.
        This is probably a form of people pleasing and being low-maintenance, so that others will like me and not leave
        me.
        If you've been an avid reader you know that I struggle with rejection, loneliness and abandonment.
        So it has become a coping mechanism to try and be as low-maintenance as possible.
        Anyway, tangent over.
    </p>

    <p>
        I believe that this has gotten better in recent times.
        Mostly because I am more aware of it now, and awareness is always the first step of getting better.
        I'm also more aware of my accomplishments and I'm able to cherish them more.
        For example: I'm proud of this blog and take every chance I get to promote it to others I meet.
        However, there is still a lot ahead of myself to fully accepting my good qualities.
        I do believe that being humble is very important and I don't want to lose that.
        But being stuck just denying everything is not healthy and appears to others as being insecure.
        So maybe in the (not so distant) future I can write a follow-up post about how I've overcome this.
        Until then, I'll keep on trying to accept myself.
        Cheers!
    </p>
</Post>