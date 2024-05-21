import { RichTextType } from "@/type/notionRichtextType";
import * as postingContentsStyle from "../style/postingContents.css";

export const H1 = ({ text }: { text: RichTextType }) => {
    return <h1 className={postingContentsStyle.h1}>{text.rich_text[0].plain_text}</h1>;
};
