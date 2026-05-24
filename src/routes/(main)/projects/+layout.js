export async function load({ fetch }) {
    return {
        postData: await (await fetch("/posts/projects/data.json")).json()
    };
}