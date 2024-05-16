import { RichTextType } from "@/type/notionRichtextType";

export const H2 = ({ text }: { text: RichTextType }) => {
    if (!text.rich_text.length) {
        return;
    }

    return <h2>{text.rich_text[0].plain_text}</h2>;
};
