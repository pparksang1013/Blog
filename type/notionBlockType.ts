import { RichTextType } from "./notionRichtextType";

interface BlockResultsType {
    object: "block";
    id: string;
    parent: {
        type: string;
        block_id: string;
    };
    created_time: string;
    last_edited_time: string;
    created_by: {
        object: string;
        id: string;
    };
    last_edited_by: {
        object: string;
        id: string;
    };

    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
    type: string;
}

interface DynamicBlockType {
    [key: string]: {
        rich_text: RichTextType[];
    };
}

export type NotionBlockResultsType = BlockResultsType & DynamicBlockType;

export interface NotionBlockResponseType {
    object: "list";
    results: NotionBlockResultsType[];
}
