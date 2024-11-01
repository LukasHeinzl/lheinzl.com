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
        Another post, another year.
        Right now I am busy with my bachelor thesis, hence the lack of posts.
        In the story, we are standing right in front of the year 2022.
        What an eventful and great year it was.
        Spoiler: There will be some negativity as well, my problems haven't magically disappeared.
        But most of the stuff I will write about will be positive, which is a nice change, if you ask me.
    </p>

    <p>
        I started, for the first timer ever, with setting myself a theme for this year.
        Actually, I set myself two themes, but one thing after the other.
        Basically, instead of a new-years-resolution where you set an unreachable goal that you try to reach for a week
        before you give up, you do things a little different.
        You define yourself a theme and a timeframe - in this case, an entire year.
        My two themes were "Year of Music" and "Year of Travel."
        Instead of saying that "I want to produce x number of songs" or "travel to x number of cities" or something like
        that, you define a broader goal - a theme.
        For example, I was originally focussed on music production, but because I had a broad theme, I could adapt and
        still "succeed" in my plans.
    </p>

    <p>
        So let's start with "The year of music."
        I started playing around with Ableton and was completely overwhelmed.
        I quickly gave up again, but I got back my acoustic guitar that I got for my 18th birthday.
        I never learned how to play it, and so I lent it to my aunt.
        But I got it back and I started practicing two songs.
        They were easy songs, but I still learned them rather quickly, which was a nice accomplishment.
        That is as far as I got, though.
        Over in the digital department, I managed to make two songs for the game we developed in the summer semester of
        that year.
        The game was "Catris" - cat-themed Tetris - and the theme song was a remake of the Tetris theme song.
        Motivated by my remake not sounding like complete garbage, I created a second background song which also turned
        out ok.
    </p>

    <p>
        Another success for this theme was the consumption of music.
        I started listening to music more in my free time.
        However, the two biggest events have yet to come:
        I went to my first ever festival in August and to my first ever concert in October.
        Both times because of Cavetown, who I absolutely love, like I mentioned in
        <a href="/blog/2023-03-27-mental14/">14. The dark thoughts return</a>.
        I was blasted away by these experiences, especially the festival because of the theme and design of the
        location.
        As I said before, nothing too special for anyone else, but for me this was groundbreaking and a stunning
        experience.
    </p>

    <p>
        We are jumping around a bit in the year.
        We started with the beginning and have gone all the way to August and October.
        Now for a brief sad part, we will switch back to about March.
        The semester began and I stayed at home.
        Why?
        Because I caught Covid-19 for the first time.
        I was fine and only had mild symptoms, but I was very upset that I did not get to hang around with everyone else
        on-campus.
        This semester was mostly on-campus due to covid-restrictions being lifted.
        With a bit of isolation from the semester break, it was even sadder that I had to spend more time at home.
        Eventually I got through it, but then the even more important thing happened.
        Well, more important in regard to me having a stupid brain.
        One after the other, the others from my group caught Covid-19 and had to stay at home.
        Some of them due to them going out together to the club.
        And there it is again, our old friend FOMO.
        Such a big thing in my life, that I dedicated <a href="/blog/2023-02-26-mental11/">11. On the Subject of
        FOMO</a> to it.
        Long story short, I felt left out again because I wasn't part of the group even though I still don't even like
        going to clubs.
    </p>

    <p>
        Continuing along in the semester...
        It was quite enjoyable overall, especially the game production course I took.
        We did go out eating as a group a couple of times, and I was part of that, which was nice.
        But there is one more sad story to mention before we continue with the positive stuff.
        One day two people from my project group from the game-dev course talked about meeting up afterward.
        They were heading to the apartment of someone else from our class to hang out.
        I, again, felt left out.
        I wasn't that close to the "hosts" but I still would have liked to join.
        I even said something then, and one of them responded with "I am sure that you can just come with - they
        wouldn't mind."
        But since I am stubborn, I said no - I wasn't invited after all.
        So I felt alone because I wasn't invited, and I actively denied myself the chance to come along and befriend
        these people for real.
        What a champion my past self was.
        Spoiler and fun fact, to brighten up the mood: At the time of writing I am actually friends with the
        above-mentioned owners of the apartment.
        In fact, one of the two is now my best friend - how the tables have turned.
    </p>

    <p>
        Now let's continue with the second theme - "The year of travel".
        I enjoy traveling - <em>a lot</em>.
        In the future, I'd like to do day/weekend-travels like once a month at least.
        In addition to that, I'd like to travel abroad at least once a year.
        Nothing too crazy but still probably more than average.
        In the past, and especially during covid, I did not get to travel that much.
        Oh boy, has this changed in this year.
        I had three major trips: Berlin in June, the Netherlands in July, Italy in September.
        For my birthday, I went on a day trip with some friends which was also nice.
        In total, I have been on the same number of planes within about three months that I previously was in five
        years.
        It was my first time in Berlin, and on our way home by car, we also stayed in Dresden for a small break.
        In the Netherlands we mostly stayed in Amsterdam, which I had already visited once.
        However, we also went to Utrecht and Rotterdam, which was new to me.
        In Italy, we stayed in Bologna and visited Florence for a day - both new to me.
        So, all-in-all I consider this a gigantic success.
        Couldn't be happier and more thankful for this year and all these experiences.
    </p>

    <p>
        To round this off, I have to say that this post does not cover the entire year.
        The last two months take a bit of a turn, but not much.
        But, they do kind of start a new era in my life - and what that is will be part of the next post.
        My life has been more of a roller coaster again, but in an overall good way.
        But enough teasing for now.
        Thank you as always for reading, see you next time!
    </p>
</Post>