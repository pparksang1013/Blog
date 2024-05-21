export interface RichTextObject {
    type: string;
    text: {
        content: string;
        link: null | string;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
        [key: string]: string | boolean;
    };
    plain_text: string;
    href: null | string;
    is_toggleable?: boolean;
}

export interface RichTextType {
    rich_text: RichTextObject[];
    color: string;
}
