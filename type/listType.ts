export interface ListsType {
    text: string;
    has_children: boolean;
    id: string;
    bulleted_list_item?: {
        rich_text: {
            type: string;
            plain_text: string;
            text: {
                content: string;
                link: null | string;
            }[];
            annotations: {
                bold: boolean;
                italic: boolean;
                strikethrough: boolean;
                underline: boolean;
                code: boolean;
                color: string;
            }[];
            href: null | string;
        };
    }[];
}

export interface ListPropType {
    type: string;
    lists: ListsType[];
}
