import { h2Style } from "@/app/style/(posting)/heading.css";
import { headingAnnotationStyle } from "@/app/style/(posting)/annotations.css";

export const H2 = ({ text }: { text: any }) => {
    if (!text.rich_text.length) {
        return;
    }

    let textStyleArr = [h2Style];

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
