import { globalTheme } from "@/components/app/style/globalTheme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import * as colors from "@/style/notionColor.css";

const boldStyle = style({
    fontWeight: 900,
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
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
    blue: colors.blue,
    blue_background: colors.blue_background,
    brown: colors.brown,
    brown_background: colors.brown_background,
    gray: colors.gray,
    gray_background: colors.gray_background,
    green: colors.green,
    green_background: colors.green_background,
    orange: colors.orange,
    orange_background: colors.orange_background,
    pink: colors.pink,
    pink_background: colors.pink_background,
    purple: colors.purple,
    purple_background: colors.purple_background,
    red: colors.red,
    red_background: colors.red_background,
    yellow: colors.yellow,
    yellow_background: colors.yellow_background,
};

const p = style({
    width: "fit-content",
    padding: "0 4px",
    lineHeight: 1.4,
});

const heading = style({
    width: "fit-content",
    padding: "0 4px",
});

export const pAnnotationStyle = styleVariants(annotationObj, (value) => {
    return [p, value];
});

export const headingAnnotationStyle = styleVariants(annotationObj, (value) => {
    return [heading, value];
});
