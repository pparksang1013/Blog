import { RichTextInterface } from "./rich_text";

interface GroupedListInterface {
    id: string;
    has_children: boolean;
    [key: string]: RichTextInterface[];
}

export interface ListTypeInterface {
    type: string;
    grouped_list: GroupedListInterface[];
}
