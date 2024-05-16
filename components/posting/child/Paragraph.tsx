import { RichTextType } from "@/type/notionRichtextType";
import { postingContentsStyle } from "../style/postingContents.css";
import { notionColorStyle } from "@/style/notionColor.css";

export const Paragraph = ({ text }: { text: RichTextType }) => {
    if (!text.rich_text[0]) {
        return <br />;
    }

    let textStyleArr = [postingContentsStyle.p.basic];

    // 타입 단언
    for (const key in text.rich_text[0].annotations) {
        if (text.rich_text[0].annotations[key] === true) {
            const textStyle = `${postingContentsStyle.p[key as keyof typeof postingContentsStyle.p]}`;
            textStyleArr.push(textStyle);
        } else if (key === "color") {
            const colorValue = text.rich_text[0].annotations[key];

            if (colorValue !== "default") {
                const colorStyle = notionColorStyle[colorValue];
                textStyleArr.push(colorStyle);
            }
        }
    }

    return <p className={`${textStyleArr.join(" ")}`}>{text.rich_text[0].plain_text}</p>;
};
