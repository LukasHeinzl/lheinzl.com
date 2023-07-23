export async function load() {
    return {
        postData: await (await fetch("/posts/blog/data.json")).json()
    };
}