import { style } from "@vanilla-extract/css";

const main = style({
    width: 800,
    maxWidth: 800,
    overflow: "scroll",
    scrollbarWidth: "none",
    paddingBottom: 30,
});

export const postingStyle = {
    main,
};
