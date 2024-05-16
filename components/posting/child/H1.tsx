import { RichTextType } from "@/type/notionRichtextType";

export const H1 = ({ text }: { text: RichTextType }) => {
    if (!text.rich_text.length) {
        return;
    }

    return <h1>{text.rich_text[0].plain_text}</h1>;
};
