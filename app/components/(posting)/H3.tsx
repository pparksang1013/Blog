import { RichTextType } from "@/type/notionRichtextType";

export const H3 = ({ text }: { text: RichTextType }) => {
    if (!text.rich_text.length) {
        return;
    }

    return <h3>{text.rich_text[0].plain_text}</h3>;
};
