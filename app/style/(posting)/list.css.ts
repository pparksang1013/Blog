import { style } from "@vanilla-extract/css";

const ul = style({
    marginTop: 8,
});

const childUl = style({
    marginLeft: 24,
});

const li = style({
    fontSize: 16.8,
    lineHeight: 1.68,
    listStylePosition: "inside",
});

export const listStyle = {
    ul,
    li,
    childUl,
};
