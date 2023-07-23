export async function load() {
    return {
        postData: await (await fetch("/posts/projects/data.json")).json()
    };
}