import { RichTextType } from "@/type/notionRichtextType";
import { headingAnnotationStyle } from "../style/annotations.css";
import * as postingContentsStyle from "../style/postingContents.css";

export const H2 = ({ text }: { text: RichTextType }) => {
    if (!text.rich_text.length) {
        return;
    }

    let textStyleArr = [postingContentsStyle.h2];

    for (const key in text.rich_text[0].annotations) {
        if (text.rich_text[0].annotations[key] === true) {
            const annotation = headingAnnotationStyle[key as keyof typeof headingAnnotationStyle];

            textStyleArr.push(annotation);
        }
    }

    if (text.rich_text[0].annotations.color !== "default") {
        const keyColor = text.rich_text[0].annotations.color;

        textStyleArr.push(headingAnnotationStyle[keyColor as keyof typeof headingAnnotationStyle]);
    }

    return <h2 className={`${textStyleArr.join(" ")}`}>{text.rich_text[0].plain_text}</h2>;
};
