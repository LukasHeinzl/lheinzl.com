<script>
    import Post from "$lib/Post.svelte";
    import ImageViewer from "$lib/ImageViewer.svelte";

    // from +layout.ts
    export let data;
</script>

<Post data={data.postData}>
    <p>
        In celebration of me graduating from university, my parents and I went on a trip to Switzerland.
        Originally I made three suggestions for the destination:
    </p>

    <ul>
        <li>Zürich, Switzerland</li>
        <li>Copenhagen, Denmark</li>
        <li>Lisbon, Portugal</li>
    </ul>

    <p>
        Eventually we decided on Switzerland, not just Zürich, because we could travel by car and explore the country.
        This meant that we covered a big chunk of the country in just five days.
        We mostly stayed in the german-speaking central and northern part.
        We also visited the western, french-speaking part, as well as France itself.
        On our way home we made a quick pit-stop in Vaduz, the capital of Liechtenstein.
        The following map shows all the cities we visited.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/map.png"
                 caption="Overview of all cities we visited on openstreetmap.org"/>

    <h2>Day 1 - Arrival, Zürich and Luzern</h2>
    <p>
        Day 1 started at 1:30am.
        The goal was clear and simple:
        Our next destination will be Bregenz for breakfast.
        After a small thing to eat and a nice but cold walk through the city, we continued westwards.
        We arrived in Zürich at around 10am.
        As far as first impressions go, Zürich was a bit underwhelming.
        Don't get me wrong, the inner/old city is quite nice.
        But it's not as impressive as I expected it to be.
        Perhaps, that can also be partially attributed to the mediocre weather.
        That sadly meant that we did not travel up the Uetliberg, which would have given us an amazing view over the
        city and the lake.
        We walked around the city for a bit, had lunch and then continued to our next destination, one definitely worth
        visiting: Luzern!
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day1-1.webp"
                 caption="The inner city of Zürich, viewed from the Grossmünster"/>

    <p>
        Luzern is a beautiful city.
        It's located at the Vierwaldstättersee and surrounded by mountains.
        The city itself is quite small, but it's very nice to walk around.
        Notable sights include the Kapellbrücke, the Lion Monument and the Spreuerbrücke.
        If you've got time, you can walk around the castle walls and enjoy the view.
        By boat and rail you can visit the Pilatus, a mountain with a height of 2128m.
        Alternatively, you can visit the Bürgenstock by boat.
        Either way, you'd get an incredible view of the city and the lake.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day1-2.webp"
                 caption="View of the city and the river Reuss, next to the weir at the Spreuerbrücke"/>

    <p>
        At this point it was already about 5pm.
        Therefore, it was time to get to our BnB, in the middle of nowhere.
        While driving, a pattern started to emerge:
        Whenever we were in the car it started pouring down <em>a lot</em>.
        Apart from that it rained next to never, so no complaints there.
        It was quite an exhausting and long day, but the impressions of Switzerland were already amazing.
        Now, it was time to get some rest, with constant mooing of cows in the background.
    </p>

    <h2>Day 2 - Jungfraujoch and the mountains</h2>
    <p>
        On day two, it was time to head for the mountains.
        The destination: Jungfraujoch, the highest train station in Europe at 3454m.
        Spoiler alert: The weather was absolutely amazing, and so were the views.
        The journey began in Grindelwald, taking the train to Kleine Scheidegg.
        From there, after a short wait, we changed trains and continued straight through the mountains.
        After about a total of 1,5 hours we arrived at the top, or rather inside the top.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day2-1.webp"
                 caption="View from Kleine Scheidegg. Above the green box, on the mountain ridge, you can see our destination"/>

    <p>
        Once at the top, we had three hours to explore everything.
        First, we took a walk through the tunnels and visited the ice palace.
        A nice and fun easter egg can be seen in the next picture.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day2-2.webp"
                 caption="Scrat from ice age"/>

    <p>
        Next on the list: The Sphinx Observatory.
        It's located at the very top of the mountain and offers a 360° view of the surrounding mountains.
        By now, the sun was coming out and the clouds were clearing up.
        The view was absolutely amazing, though it was quite windy up there.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day2-3.webp"
                 caption="View from the Sphinx Observatory"/>

    <p>
        After a quick lunch, we went outside and walked around the mountain.
        It was getting quite warm when the sun was shining.
        There were people on a small flying fox line, which looked like a lot of fun.
        After exploring everything and buying a couple gifts (you know, gotta act like a tourist), the three hours were
        almost over.
        You could speed-run it in about half the time, but it was quite relaxing to explore it at a slower pace.
        Now, it was time to head back down.
        After arriving back in Grindelwald we decided to take a small detour and visit Lauterbrunnen.
        It is the second starting point for the train to the Jungfraujoch.
        After that, we stopped on our way home in Interlaken.
        There, we went up the Harder Kulm, a mountain with a perfect view of the Mönch/Eiger/Jungfrau mountain range.
        As it was getting late, the sun started to set.
        This made for a beautiful view.
        Now, it definitely was time to head back home.
        We arrived at 11pm and immediately fell asleep.
        If you get the chance (and have the money, shits expansive), definitely visit the Jungfraujoch!
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day2-4.webp"
                 caption="View from the Harder Kulm. In the middle, when you zoom in a lot, you can see the Sphinx"/>

    <h2>Day 3 - Bern and French Switzerland</h2>
    <p>
        Day three, half way.
        It was an overall quite chill day, and, as always, the weather was nice.
        We started the day by visiting Bern, the de-facto capital of Switzerland.
        We started off by visiting the Rosengarten, a park with a nice view of the city.
        Then, it was time to pass by the bears and head for the inner city.
        It's a really lovely city, but not quite as nice as Luzern, I have to say.
        Though, it did have a lot of rainbow flags hanging around because of an event, so that does award some extra
        points.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day3-1.webp"
                 caption="Kramgasse in Bern's city center"/>

    <p>
        Next up, we headed further west into the french part of Switzerland.
        We stopped in Murten, a small city at the Murten lake.
        It's a very small town, but has a nice center, with some of the old city walls still intact.
        You can even walk on a small portion of them, giving you a nice view.
        Our actual destination was Neuchatel.
        Here, a cliche quickly became apparent:
        The people <em>only</em> speak french, and they don't like it when you speak german or english.
        It's probably not everyone there, but it was quite annoying.
        The city itself is quite nice.
        When standing at the lake shore, you can even see the Jungfraujoch in the distance, if the weather allows it.
        We ended the day by driving back to the small town of our BnB to have dinner.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day3-2.webp"
                 caption="Inner city of Neuchatel"/>

    <h2>Day 4 - Basel, France and the sunken-cost-fallacy</h2>
    <p>
        Day four, the last full day.
        We had planned to visit Basel, but knew that we needed more to do.
        Therefore, we decided to visit Colmar, in France.
        That was the start of quite an adventure.
        But first, Basel.
        The age-old pattern of beautiful old city, mediocre rest continued.
        Overall, I'd rate it second-to-last place, before Zürich.
        It's not bad, but it's not great either.
        Though, on top of the Müster, you get a nice view over the city.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day4-1.webp"
                 caption="View from the Müster in Basel"/>

    <p>
        Next, it was time to head to the border between Switzerland, France and Germany.
        There isn't really anything interesting to look at, but hey, I can now say "been there, done that".
        After that, we headed to Colmar.
        I never expected to get all the way to France on this trip.
        This was the first time I've been to France, and it was quite interesting.
        The city, even the entire Elsass region, is really beautiful.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day4-2.webp"
                 caption="Little Venice, in Colmar"/>

    <p>
        After lunch and a stroll through the city, we had a look at the map.
        Either, we could head back and enjoy a chill evening, or we could head even further.
        And so it was decided:
        It's just another 40 minutes to Strasbourg, so why not?
        A classic example of the sunken-cost-fallacy.
        Overall, the trip was over 2,5 hours of driving, just broken up into a couple smaller parts.
        But: It was totally worth it.
        Sadly, this time we were a bit more unlucky with the weather.
        It wasn't too much rain, but it was enough to be annoying.
        On the way back to Switzerland, we did a loop through the city and stopped by the European Parliament.
        Then, it was time to head back home, this time through Germany, bringing our day to an end.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day4-3.webp"
                 caption="Little France, in Strasbourg"/>

    <h2>Day 5 - Going home, Liechtenstein</h2>
    <p>
        Last day, time to head home.
        Fitting the theme of "quickly stop by somewhere, so that you've seen it", we decided to visit Liechtenstein.
        Therefore, our first pit stop was Vaduz, the capital.
        It is a really small town, and sadly, the weather wasn't great at all when we got there.
        Also, the castle was currently being renovated, so we couldn't see it either.
        We stayed for maybe 20 minutes, so this really marks a speed record on this trip.
    </p>

    <ImageViewer imageSrc="/posts/blog/2023-08-13-travel1/day5-1.webp"
                 caption="Government building in Vaduz, the capital of Liechtenstein"/>

    <p>
        With heavy rain fall accompanying us for most of the remaining way, we arrived back home in the evening.
        Needless to say, this was an absolutely amazing trip.
        I am extremely thankful that I got the chance to see all these amazing places.
        Overall, I'd say that Luzern was my favorite city, and the Jungfraujoch was my favorite experience.
        I'd really like to visit Switzerland again, especially Geneva and the southern, italian part.
        For anyone interested, I'd recommend visiting the Jungfraujoch, Luzern, and Bern.
        Basel and Zürich are nice, but not really worth it.
        And with that, I say thank you for reading.
        This was my first time writing stuff like this, so I hope that it was at least somewhat interesting to read.
        Byeee.
    </p>
</Post>