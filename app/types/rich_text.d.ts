import { ParagraphInterface } from "./paragraph";

export interface RichTextInterface {
    type: "text";
    text: {
        content: string;
        link: null | { url: string };
    };
    annotations: Record<string, string | boolean>;
    plain_text: string;
    href: string | null;
    color: string;
}
