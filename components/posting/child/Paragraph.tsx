import { RichTextType } from "@/type/notionRichtextType";
import * as postingContentsStyle from "../style/postingContents.css";
import { pAnnotationStyle } from "../style/annotations.css";

export const Paragraph = ({ text }: { text: RichTextType }) => {
    if (!text.rich_text[0]) {
        return <br />;
    }

    let textStyleArr = [postingContentsStyle.p];

    for (const key in text.rich_text[0].annotations) {
        if (text.rich_text[0].annotations[key] === true) {
            const annotation = pAnnotationStyle[key as keyof typeof pAnnotationStyle];

            textStyleArr.push(annotation);
        }
    }

    if (text.rich_text[0].annotations.color !== "default") {
        const keyColor = text.rich_text[0].annotations.color;

        textStyleArr.push(pAnnotationStyle[keyColor as keyof typeof pAnnotationStyle]);
    }

    return <p className={`${textStyleArr.join(" ")}`}>{text.rich_text[0].plain_text}</p>;
};
