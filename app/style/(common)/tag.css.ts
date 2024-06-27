import { globalTheme } from "@/app/style/(global)/globalTheme.css";
import { style } from "@vanilla-extract/css";

const ul = style({
    display: "flex",
    gap: 6,
    marginTop: 8,
});

const commonLi = style({
    listStyle: "none",
    fontSize: 12,
    padding: "0 5px 1.2px",
    borderRadius: 2,
    fontWeight: 400,
});

const defaultLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.gray,
        color: globalTheme.colors.notion.text.gray,
    },
]);

const brownLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.brown,
        color: globalTheme.colors.notion.text.brown,
    },
]);

const orangeLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.orange,
        color: globalTheme.colors.notion.text.orange,
    },
]);

const yellowLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.yellow,
        color: globalTheme.colors.notion.text.yellow,
    },
]);

const greenLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.green,
        color: globalTheme.colors.notion.text.green,
    },
]);

const blueLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.blue,
        color: globalTheme.colors.notion.text.blue,
    },
]);

const purpleLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.purple,
        color: globalTheme.colors.notion.text.purple,
    },
]);

const pinkLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.pink,
        color: globalTheme.colors.notion.text.pink,
    },
]);

const redLi = style([
    commonLi,
    {
        backgroundColor: globalTheme.colors.notion.background.red,
        color: globalTheme.colors.notion.text.red,
    },
]);

export const tagStyle = {
    ul,
    defaultLi,
    brownLi,
    orangeLi,
    yellowLi,
    greenLi,
    blueLi,
    purpleLi,
    pinkLi,
    redLi,
};
