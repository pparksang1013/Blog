import { RichTextType } from "@/type/notionRichtextType";

export const Paragraph = ({ text }: { text: RichTextType }) => {
    if (!text.rich_text.length) {
        return;
    }

    return <p>{text.rich_text[0].plain_text}</p>;
};
