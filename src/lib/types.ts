export interface IPost {
    title: string;
    published: string;
    tags: string[];
}

export interface IPostListEntries {
    [key: string]: IPost;
}

export interface IPostList {
    pinned: string;
    posts: IPostListEntries;
}