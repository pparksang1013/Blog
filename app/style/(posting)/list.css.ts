import { style } from "@vanilla-extract/css";
// UTIL
import styleVariantsUtil from "@/app/util/(posting)/setStyleVariants";

const ul = style({
    margin: "8px 0",
});

const childUl = style({
    marginLeft: 24,
});

const li = style({
    fontSize: 16.8,
    lineHeight: 1.68,
    listStylePosition: "inside",
});

const annotations = styleVariantsUtil();

export const listStyle = {
    ul,
    li,
    childUl,
    annotations,
};
