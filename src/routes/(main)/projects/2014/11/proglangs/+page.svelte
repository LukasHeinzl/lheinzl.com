<script>
    import Post from "$lib/Post.svelte";

    /**
     * @typedef {Object} Props
     * @property {any} data - from +layout.ts
     */

    /** @type {Props} */
    let {data} = $props();
</script>

<Post data={data.postData} prefix="projects">
    <p>
        Once upon a time, there was a curious Lukas who wanted to learn more about programming languages.
        Back then my main language was Java, and I was curious about how it worked under the hood.
        I new that there were compilers that translate text into something that can be executed.
        In case of C, another language I learned at that time in school, the compiler translated the text into machine
        code, which was directly executed by the CPU.
        However, Java was different.
        To execute Java programs, you had to install the Java Runtime Environment (JRE) on your computer.
        Why?
        Well, to fulfill the promise of "write once, run anywhere" (or debug anywhere if you ask some people).
        This was accomplished by compiling Java source code into a custom binary format, which was then read and
        executed by the JRE.
        To be more specific, it was executed by the Java Virtual Machine (JVM), which was part of the JRE.
    </p>

    <h2>Designing a VM</h2>

    <p>
        First order of business was reading the
        <a href="https://docs.oracle.com/javase/specs/jvms/se23/html/index.html" target="_blank">
            official specification of the Java Virtual Machine
        </a>.
        Although it was a bit dry, it was very interesting and fascinating to read about.
        In parallel, I looked through the source code of
        <a href="https://www.lua.org/source/5.4/" target="_blank">
            Lua
        </a>, a language that was designed to be embedded into other applications.
        The two are of course very different in their design and purpose.
        Fundamentally, Java uses a stack-based architecture, while Lua uses a register-based architecture.
        There are pros and cons to both, but a <i>very</i> simple distinction is that stack-based architectures are
        easier to implement on the compiler side, while register-based architectures are easier to implement on the VM
        side.
        Since I was more interested in the VM side, I decided to go with a register-based architecture.
        The most important choice was of course the name of the language.
        I decided to call it "Light" because it was supposed to be a fast language.
        Therefore, the VM would be called Light Virtual Machine (LVM).
        Next, there were two important decisions to make:
    </p>

    <ol>
        <li>What instructions should the VM have?</li>
        <li>How should the compiled files be structured?</li>
    </ol>

    <p>
        Of course, both questions were answered by looking at how Java did it and thinking about which features I
        wanted for my language.
        The results were:
        <a href="https://raw.githubusercontent.com/LukasHeinzl/LightVirtualMachine-OLD/refs/heads/main/LVM%20Bytecodes.txt"
           target="_blank">
            bytecodes
        </a>
        and
        <a href="https://raw.githubusercontent.com/LukasHeinzl/LightVirtualMachine-OLD/refs/heads/main/LVM%20Object%20File.txt"
           target="_blank">
            file format
        </a>.
        In comparison to Java, my language would support unsigned integers, operator overloading, and C++'s delete
        keyword.
        Those were the main features I would have liked to have in Java.
        Overall, all those features were theoretically implemented, but since I never got around to writing a compiler
        for it, they were never tested.
        However, using a hex editor, I was able to write some simple programs in the language.
        I got so far, that I was able to load a DLL and call a function from it, printing "Hello World" to the console
        using my very own VM.
    </p>

    <h2>History</h2>

    <p>
        The entire LVM project can be found on
        <a href="https://github.com/LukasHeinzl/LightVirtualMachine-OLD" target="_blank">GitHub</a>.
        Probably the three most interesting files are the
        <a href="https://github.com/LukasHeinzl/LightVirtualMachine-OLD/blob/main/src/lvm.cpp" target="_blank">
            VM core, handling memory and threads
        </a>, the
        <a href="https://github.com/LukasHeinzl/LightVirtualMachine-OLD/blob/main/src/Runtime.cpp" target="_blank">
            runtime, handling the execution of the bytecodes
        </a>, and the
        <a href="https://github.com/LukasHeinzl/LightVirtualMachine-OLD/blob/main/src/Bytecodes.cpp" target="_blank">
            bytecode implementation
        </a>.
        LVM was by far the most potent attempt at creating a programming language I ever made.
        However, there were many, <i>many</i> more attempts.
        Over the years, I've lost count of how many languages I've tried to create - I was very fascinated by the topic.
        My first ever attempt also made it to GitHub, and it was called
        <a href="https://github.com/LukasHeinzl/FSC-OLD" target="_blank">FSC</a> (dunno what FSC stands for).
        In total I probably spent about three years on all those projects combined.
        Nowadays, with having used many more languages and having moved away from Java as my main language,
        I gained a lot more understanding for language design and my opinions on what makes a good language have changed
        a lot.
        As with everything in life, you probably shouldn't create a language just because you can.
        But it sure as hack was a very interesting journey, yielding to me learning a lot and improving my skills.
    </p>
</Post>