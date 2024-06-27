import { paragraphStyle } from "@/app/style/(posting)/paragraph.css";
import { pAnnotationStyle } from "@/app/style/(posting)/annotations.css";

export const Paragraph = ({ text }: { text: any }) => {
    if (!text.rich_text[0]) {
        return <br />;
    }

    let textStyleArr = [paragraphStyle.p];

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
