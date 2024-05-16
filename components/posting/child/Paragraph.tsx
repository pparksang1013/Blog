import { RichTextType } from "@/type/notionRichtextType";

export const Paragraph = ({ text }: { text: RichTextType }) => {
    return text.rich_text.length !== 0 ? <p>{text.rich_text[0].plain_text}</p> : <br />;
};
