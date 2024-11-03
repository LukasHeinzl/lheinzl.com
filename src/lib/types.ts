export interface ITimeline {
    from: string;
    to?: string;
}

export interface IPost {
    title: string;
    published?: string;
    previewImage?: string;
    timeline?: ITimeline | string;
    tags: string[];
}

export interface IPostListEntries {
    [key: string]: IPost;
}

export interface IPostList {
    pinned: string;
    posts: IPostListEntries;
}