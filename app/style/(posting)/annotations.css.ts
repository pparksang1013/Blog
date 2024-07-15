import { globalTheme } from "@/app/style/(global)/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const annotationStyle = {
    // ANNOTATIONS
    bold: style({
        fontWeight: 800,
        color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    }),
    italic: style({
        fontStyle: "italic",
    }),
    strikethrough: style({
        textDecoration: "line-through",
    }),
    underline: style({ textDecoration: "underline", textUnderlineOffset: 4, textDecorationThickness: 0.7 }),
    code: style({
        color: globalTheme.colors.notion.text.red,
        backgroundColor: `rgba(${globalTheme.rgb.gray}, 0.2)`,
        fontSize: "0.9em",
        padding: "2px 4px",
    }),
    // COLOR
    blue: style({ color: globalTheme.colors.notion.text.blue }),
    blue_background: style({
        backgroundColor: globalTheme.colors.notion.background.blue,
    }),
    brown: style({
        color: globalTheme.colors.notion.text.brown,
    }),
    brown_background: style({
        backgroundColor: globalTheme.colors.notion.background.brown,
    }),
    gray: style({
        color: globalTheme.colors.notion.text.gray,
    }),
    gray_background: style({
        backgroundColor: globalTheme.colors.notion.background.gray,
    }),
    green: style({
        color: globalTheme.colors.notion.text.green,
    }),
    green_background: style({
        backgroundColor: globalTheme.colors.notion.background.green,
    }),
    orange: style({
        color: globalTheme.colors.notion.text.orange,
    }),
    orange_background: style({
        backgroundColor: globalTheme.colors.notion.background.orange,
    }),
    pink: style({
        color: globalTheme.colors.notion.text.pink,
    }),
    pink_background: style({
        backgroundColor: globalTheme.colors.notion.background.pink,
    }),
    purple: style({
        color: globalTheme.colors.notion.text.purple,
    }),
    purple_background: style({
        backgroundColor: globalTheme.colors.notion.background.purple,
    }),
    red: style({
        color: globalTheme.colors.notion.text.red,
    }),
    red_background: style({
        backgroundColor: globalTheme.colors.notion.background.red,
    }),
    yellow: style({
        color: globalTheme.colors.notion.text.yellow,
    }),
    yellow_background: style({
        backgroundColor: globalTheme.colors.notion.background.yellow,
    }),
};
