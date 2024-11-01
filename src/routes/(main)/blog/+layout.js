export async function load({ fetch }) {
    return {
        postData: await (await fetch("/posts/blog/data.json")).json()
    };
}