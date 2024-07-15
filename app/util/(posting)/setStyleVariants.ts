import { annotationStyle } from "@/app/style/(posting)/annotations.css";
import { style, styleVariants } from "@vanilla-extract/css";

export default function styleVariantsUtil() {
    const variants = styleVariants(annotationStyle, (value) => {
        return [
            style({
                width: "fit-content",
                lineHeight: 1.4,
            }),
            value,
        ];
    });

    return variants;
}
