export interface TagType {
    id: string;
    name: string;
    color: string;
}

export interface NotionDatabaseType {
    title: string;
    id: string;
    pageId: string;
    keyword: string;
    date: string;
    tags: TagType[];
}
