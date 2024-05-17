import { globalTheme } from "@/components/app/style/globalTheme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { notionColorStyle } from "@/style/notionColor.css";

const boldStyle = style({
    fontWeight: 900,
});

const italicStyle = style({});

const striketStyle = style({});

const underLineStyle = style({});

const codeStyle = style({});

export const annotationObj = {
    bold: boldStyle,
    italic: italicStyle,
    strikethrough: striketStyle,
    underline: underLineStyle,
    code: codeStyle,
};

const p = style({});

export const pAnnotationStyle = styleVariants(annotationObj, (value) => {
    return [p, value];
});
