import { styleVariants, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

const basedBox = style({
    width: 1400,
    margin: "0 auto",
});

const headerBox = style({
    padding: "28px 0",
});

const blogBox = style({
    margin: "20px auto",
});

const postingBox = style({
    margin: "20px auto",
    display: "flex",
    gap: 20,
    overflow: "hidden",
    minHeight: calc.subtract("100vh", "150px"),
    maxHeight: calc.subtract("100vh", "150px"),
});

const box = {
    headerBox,
    blogBox,
    postingBox,
};

export const boxStyle = styleVariants(box, (value) => {
    return [basedBox, value];
});
